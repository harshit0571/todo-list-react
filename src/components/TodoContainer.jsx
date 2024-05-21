import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { ACTIONS } from "../TodoContext";

const TodoContainer = () => {
  const { todos, dispatch } = useContext(TodoContext);
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
                  dispatch({ type: ACTIONS.TOGGLE_TASK, payload: index });
                }}
              />
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => {
                  dispatch({ type: ACTIONS.REMOVE_TASK, payload: index });
                }}
              ></i>
            </div>
          </div>
        ))}
        {todos.length > 0 && (
          <button
            class="clearTodos"
            onClick={() => {
              dispatch({ type: ACTIONS.CLEAR_TODOS });
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
