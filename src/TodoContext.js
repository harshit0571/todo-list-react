import React, { createContext, useEffect, useReducer, useState } from "react";
import {
  addTask,
  clearTodos,
  deleteTodo,
  fetchTodos,
  saveToLocal,
  toggleTodo,
} from "./utils";
import { type } from "@testing-library/user-event/dist/type";

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
    default:
      return todos;
  }
};
export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todoArray, setTodoArray] = useState([]);
  const [todos, dispatch] = useReducer(todoReducer, []);
  useEffect(() => {
    const renderLists = async () => {
      const list = await fetchTodos();
      console.log(list);
      dispatch({ type: ACTIONS.SET_TODOS, payload: list });
    };
    renderLists();
  }, []);

  // console.log(todos, "reducer");

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
