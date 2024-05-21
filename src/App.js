import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import TodoProvider from "./TodoContent";
function App() {
  return (
    <TodoProvider>
      <main>
        <Header />
        <MainContainer />
      </main>
    </TodoProvider>
  );
}

export default App;
