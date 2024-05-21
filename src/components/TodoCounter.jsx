import React from "react";

const TodoCounter = ({ Todos, setTodos }) => {
  
  let completed =
    Todos.length > 0 ? Todos.filter((todo) => todo.completed).length : 0;
  let total = Todos.length;
  let inCompleted = total - completed;
  return (
    <div class="todoCounter">
      <div class="totalTodos">Total Tasks: {total}</div>
      <div class="completedTodos">Completed Tasks: {completed}</div>
      <div class="incompletedTodos">Incomplete Tasks: {inCompleted}</div>
    </div>
  );
};

export default TodoCounter;
