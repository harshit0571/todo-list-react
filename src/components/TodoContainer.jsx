import React, { useContext } from "react";
import { toggleTodo, deleteTodo, clearTodos } from "../utils";
import { TodoContext } from "../TodoContext";
import { ACTIONS } from "../TodoContext";

const TodoContainer = ({ Todos, setTodos }) => {
  const handleToggleTodo = (index) => {
    const updatedTodos = toggleTodo(index, Todos);
    setTodos([...updatedTodos]);
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = deleteTodo(index, Todos);
    setTodos([...updatedTodos]);
  };
  const handleClear = () => {
    const updatedTodos = clearTodos(Todos);
    setTodos([...updatedTodos]);
  };

  const { todos, dispatch, todoArray } = useContext(TodoContext);
  return (
    <div className="bottomContainer">
      <div className="todoHeaders">
        <h1>Tasks Lists</h1>
      </div>
      <div className="todoContainer">
        {todos.map((data, index) => (
          <div className="todo" key={index}>
            <div id="number">{index + 1})</div>
            <p id="task" className={data.completed ? "checked" : ""}>
              {data.title}
            </p>
            <div className="buttons">
              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => {
                  handleToggleTodo(index);
                }}
              />
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={dispatch({
                  type: ACTIONS.REMOVE_TASK,
                  payload: index,
                })}
              ></i>
            </div>
          </div>
        ))}
        {todos.length > 0 && (
          <button
            class="clearTodos"
            onClick={() => {
              handleClear();
            }}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
