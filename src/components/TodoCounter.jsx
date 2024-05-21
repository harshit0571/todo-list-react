import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
  const { todos } = useContext(TodoContext);

  let completed =
    todos.length > 0 ? todos.filter((todo) => todo.completed).length : 0;
  let total = todos.length;
  let inCompleted = total - completed;

  return (
    <div class="todoCounter">
      <div class="totaltodos">Total Tasks: {total}</div>
      <div class="completedtodos">Completed Tasks: {completed}</div>
      <div class="incompletedtodos">Incomplete Tasks: {inCompleted}</div>
    </div>
  );
};

export default TodoCounter;
