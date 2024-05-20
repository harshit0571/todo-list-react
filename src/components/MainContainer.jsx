import React from 'react'

const MainContainer = () => {
  return (
    <section class="mainContainer">
    <div class="addTodoBox">
      <input
        type="text"
        id="addInput"
        placeholder="what would you like to do?"
      />
      <button onclick="addTask()">Add Task</button>
    </div> 
    <div class="todoCounter">
      <div class="totalTodos">Total Tasks: 10</div>
      <div class="completedTodos">Completed Tasks: 3</div>
      <div class="incompletedTodos">Incomplete Tasks: 7</div>
    </div>
    <div class="bottomContainer">
      <h1>Tasks Lists</h1>
      <div class="todoContainer"></div>
    </div>
  </section>
  )
}

export default MainContainer