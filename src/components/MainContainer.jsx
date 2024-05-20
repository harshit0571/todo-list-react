import React, { useEffect, useState } from "react";
import AddTodoBox from "./AddTodoBox";
import TodoCounter from "./TodoCounter";
import TodoContainer from "./TodoContainer";
import { fetchTodos } from "../utils";

const MainContainer = () => {
  const [Todos, setTodos] = useState([]);
  useEffect(() => {
    const renderLists = async () => {
        setTodos(await fetchTodos());
    };
    renderLists();
  }, []);
  return (
    <section class="mainContainer">
      <AddTodoBox />
      <TodoCounter />
      <TodoContainer Todos={Todos} setTodos={setTodos} />
    </section>
  );
};

export default MainContainer;
