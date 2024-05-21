import React from "react";
import { addTask, clearTodos, deleteTodo, toggleTodo } from "./utils";

export const ACTIONS = {
  SET_TODOS: "SET_TODOS",
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  CLEAR_TODOS: "CLEAR_TODOS",
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.SET_TODOS:
      return action.payload;
    case ACTIONS.ADD_TASK:
      return addTask(action.payload, todos);
    case ACTIONS.REMOVE_TASK:
      return deleteTodo(action.payload, todos);
    case ACTIONS.TOGGLE_TASK:
      return toggleTodo(action.payload, todos);
    case ACTIONS.CLEAR_TODOS:
      return clearTodos(todos);
  }
};

const TodoProvider = () => {
  return <div>TodoContent</div>;
};

export default TodoProvider;
