import React, {PureComponent} from 'react'

class Task extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      done: props.task.done
    }
    console.warn(`Task ${props.task.id} constructor()`)
  }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} componentDidMount()`)
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate()`)
  }

  componentWillUnmount(){
    console.warn(`Task ${this.props.task.id} componentWillUnmount()`)
    window.removeEventListener('resize', this.sayHi)
  }

  onCheck = (event) => {
    //changing it on the front end
    this.setState({done: event.target.checked})

    //change it on the back end
    fetch(`http://localhost:4000/tasks/${this.props.task.id}`, {
      method:"PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({done: event.target.checked})
    })
  }

  render(){
    console.warn(`Task ${this.props.task.id} render()`)
    return(
      <div>
        <button onClick={
          () => this.props.onDelete(this.props.task.id)
        }>x</button>
        {this.props.task.text}
        <input type="checkbox" checked={this.state.done} onChange={this.onCheck}/>
      </div>
    )
  }
}

export default Task
