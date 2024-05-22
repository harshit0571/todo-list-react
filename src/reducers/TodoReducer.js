import {
  addTask,
  setTodos,
  removeTask,
  toggleTask,
  clearTodos,
} from "../utils";

export const ACTIONS = {
  SET_TODOS: "SET_TODOS",
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  CLEAR_TODOS: "CLEAR_TODOS",
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
