import React, { useState } from "react";
import { addTask } from "../utils";

const AddTodoBox = ({ Todos, setTodos }) => {
  const [inputVal, setinputVal] = useState("");
  const handleAddTask = () => {
    console.log(inputVal, Todos, "d");
    const todoArray = addTask(inputVal.trim(), Todos);
    setTodos([...todoArray]);
    setinputVal("");
  };
  return (
    <div class="addTodoBox">
      <input
        type="text"
        id="addInput"
        placeholder="what would you like to do?"
        onChange={(e) => setinputVal(e.target.value)}
        value={inputVal}
      />
      <button
        onClick={() => {
          handleAddTask();
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodoBox;
