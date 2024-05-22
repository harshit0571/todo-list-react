import { saveToLocal } from "./utils";

export const ACTIONS = {
    SET_TODOS: "SET_TODOS",
    ADD_TASK: "ADD_TASK",
    REMOVE_TASK: "REMOVE_TASK",
    TOGGLE_TASK: "TOGGLE_TASK",
    CLEAR_TODOS: "CLEAR_TODOS",
  };
  
  const setTodos = (payload) => {
    return payload;
  };
  
  const addTask = (todos, payload) => {
    console.log("Calling addTask from reducer with payload:", payload);
    const newTodo = {
      id: todos.length + 1,
      title: payload,
      completed: false,
    };
    const addedTodos = [...todos, newTodo];
    saveToLocal(addedTodos);
    return addedTodos;
  };
  
  const removeTask = (todos, payload) => {
    console.log("Calling deleteTodo from reducer with index:", payload);
    const removedTodos = todos.filter((todo, index) => index !== payload);
    saveToLocal(removedTodos);
    return removedTodos;
  };
  
  const toggleTask = (todos, payload) => {
    console.log("Calling toggleTodo from reducer with index:", payload);
    const toggledTodos = todos.map((todo, index) =>
      index === payload ? { ...todo, completed: !todo.completed } : todo
    );
    saveToLocal(toggledTodos);
    return toggledTodos;
  };
  
  const clearTodos = () => {
    console.log("Calling clearTodos from reducer");
    const clearedTodos = [];
    saveToLocal(clearedTodos);
    return clearedTodos;
  };
  
  export const todoReducer = (todos, action) => {
    switch (action.type) {
      case ACTIONS.SET_TODOS:
        return setTodos(action.payload);
      case ACTIONS.ADD_TASK:
        return addTask(todos, action.payload);
      case ACTIONS.REMOVE_TASK:
        return removeTask(todos, action.payload);
      case ACTIONS.TOGGLE_TASK:
        return toggleTask(todos, action.payload);
      case ACTIONS.CLEAR_TODOS:
        return clearTodos();
      default:
        return todos;
    }
  };
  