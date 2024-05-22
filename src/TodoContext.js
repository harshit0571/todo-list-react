import React, { createContext, useEffect, useReducer } from "react";
import { fetchTodos, saveToLocal } from "./utils";
import { ACTIONS, todoReducer } from "./TodoReducer";

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
