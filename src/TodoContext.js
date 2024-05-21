import React, { createContext, useEffect, useReducer } from "react";
import {
  clearTodos,
  deleteTodo,
  fetchTodos,
  saveToLocal,
  toggleTodo,
  addTask,
} from "./utils";

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
      console.log("Calling addTask from reducer with payload:", action.payload);
      const newTodo = {
        id: todos.length + 1,
        title: action.payload,
        completed: false,
      };
      const addedTodos = [...todos, newTodo];
      saveToLocal(addedTodos);
      return addedTodos;
    case ACTIONS.REMOVE_TASK:
      console.log(
        "Calling deleteTodo from reducer with index:",
        action.payload
      );
      const removedTodos = todos.filter(
        (todo, index) => index !== action.payload
      );
      saveToLocal(removedTodos);
      return removedTodos;
    case ACTIONS.TOGGLE_TASK:
      console.log(
        "Calling toggleTodo from reducer with index:",
        action.payload
      );
      const toggledTodos = todos.map((todo, index) =>
        index === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      saveToLocal(toggledTodos);
      return toggledTodos;
    case ACTIONS.CLEAR_TODOS:
      console.log("Calling clearTodos from reducer");
      const clearedTodos = [];
      saveToLocal(clearedTodos);
      return clearedTodos;
    default:
      return todos;
  }
};

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const renderLists = async () => {
      const list = await fetchTodos();
      dispatch({ type: ACTIONS.SET_TODOS, payload: list });
    };
    renderLists();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
