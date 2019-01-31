import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: null
    }
    console.warn('App constructor()')
  }

  componentDidUpdate(){
    console.warn(`App componentDidUpdate()`)
  }

  componentDidMount(){
    console.warn('App componentDidMount()')
    fetch(`http://localhost:4000/tasks`)
    .then(res => res.json())
    .then(tasks => {
      this.setState({
        taskList: tasks
      })
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/tasks`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({done: false, text: this.state.formText})
    })
    .then(res => res.json())
    .then(newTask => {
      this.setState({
        taskList: [newTask, ...this.state.taskList]
      })
    })
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onDeleteOfTask = (taskId) => {
    fetch(`http://localhost:4000/tasks/${taskId}`,{
      method:"DELETE"
    })

    let copyOfTaskList = [...this.state.taskList] //[{} , {} , {} , {}]
    let indexOfDeleteTask = copyOfTaskList.findIndex(task => task.id === taskId)
    copyOfTaskList.splice(indexOfDeleteTask, 1)
    this.setState({
      taskList: copyOfTaskList
    })
    //delete the task on the back end
    //and also the front end
  }

  render() {
    console.warn('App render()')
    return (
      <div className="App">
        <Form
          onChange={this.onTypingChange}
          onSubmit={this.onAddNewTask}
        />
        <TaskList
          tasks={this.state.taskList}
          onDelete={this.onDeleteOfTask}
        />
      </div>
    );
  }
}

export default App;
