import React from "react";
import { toggleTodo, deleteTodo } from "../utils";

const TodoContainer = ({ Todos, setTodos }) => {
  return (
    <div className="bottomContainer">
      <h1>Tasks Lists</h1>
      <div className="todoContainer">
        {Todos.map((data, index) => (
          <div className="todo" key={index}>
            <div id="number">{index + 1})</div>
            <p id="task" className={data.completed ? "checked" : ""}>
              {data.title}
            </p>
            <div className="buttons">
              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => toggleTodo(index, Todos)}
              />
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => deleteTodo(index, Todos)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
