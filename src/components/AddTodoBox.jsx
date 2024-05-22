import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { ACTIONS } from "../reducers/TodoReducer";

const AddTodoBox = () => {
  const [inputVal, setInputVal] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputVal.trim() !== "") {
      console.log("Dispatching ADD_TASK with payload:", inputVal);
      dispatch({ type: ACTIONS.ADD_TASK, payload: inputVal });
      setInputVal("");
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
