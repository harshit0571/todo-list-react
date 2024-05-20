import React from "react";
import AddTodoBox from "./AddTodoBox";
import TodoCounter from "./TodoCounter";
import TodoContainer from "./TodoContainer";

const MainContainer = () => {
  return (
    <section class="mainContainer">
      <AddTodoBox />
      <TodoCounter />
      <TodoContainer />
    </section>
  );
};

export default MainContainer;
