import React, { useEffect, useState } from "react";
import AddTodoBox from "./AddTodoBox";
import TodoCounter from "./TodoCounter";
import TodoContainer from "./TodoContainer";
import { fetchTodos } from "../utils";

const MainContainer = () => {
  return (
    <section class="mainContainer">
      <AddTodoBox  />
      {/* <TodoCounter  /> */}
      <TodoContainer  />
    </section>
  );
};

export default MainContainer;
