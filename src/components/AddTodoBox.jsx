import React, { useState } from "react";
import { addTask } from "../utils";

const AddTodoBox = ({ Todos, setTodos }) => {
  const [inputVal, setInputVal] = useState("");
  const handleAddTask = () => {
    console.log(inputVal, Todos, "d");
    const todoArray = addTask(inputVal.trim(), Todos);
    setTodos([...todoArray]);
    setInputVal("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask();
  };
  return (
   
      <form onSubmit={handleSubmit} className="addTodoBox">
        <input
          type="text"
          id="addInput"
          placeholder="What would you like to do?"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <button type="submit">Add Task</button>
      </form>
   
  );
};

export default AddTodoBox;
