import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { useState } from "react";

function App() {
  return (
    <main>
      <Header />
      <MainContainer/>
    </main>
  );
}

export default App;
