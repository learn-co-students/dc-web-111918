import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks !== null ?
    props.tasks.map(taskObj =>
      <Task
        key={taskObj.id}
        task={taskObj}
        onDelete={props.onDelete}
    />) :
    null
  )
}

export default TaskList

// (boolen expression) ? thingToReturnIfTrue : thingToReturnIfFalse

// [<Task>, <Task,> <Task>]
// null
