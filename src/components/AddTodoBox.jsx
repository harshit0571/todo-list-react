import React from 'react'

const AddTodoBox = () => {
  return (
    <div class="addTodoBox">
      <input
        type="text"
        id="addInput"
        placeholder="what would you like to do?"
      />
      <button onclick="addTask()">Add Task</button>
    </div> 
  )
}

export default AddTodoBox