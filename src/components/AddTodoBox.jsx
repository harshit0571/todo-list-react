import React, { useContext, useState } from "react";
import { ACTIONS, TodoContext } from "../TodoContext";

const AddTodoBox = () => {
  const [inputVal, setInputVal] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputVal.trim() !== "") {
      console.log("Dispatching ADD_TASK with payload:", inputVal);
      dispatch({ type: ACTIONS.ADD_TASK, payload: inputVal });
      setInputVal(""); // Clear the input field after adding the task
    }
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
