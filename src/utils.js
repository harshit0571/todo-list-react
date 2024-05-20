export const fetchTodos = async () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos != 'undefined') {
      return JSON.parse(savedTodos)
    } else {
        const response = await fetch(
            " https://jsonplaceholder.typicode.com/todos?_limit=10"
          );
          const data = await response.json();
          saveToLocal(data)
          return data;
    }
  };

export const toggleTodo = (index, todoArray) => {
    todoArray[index].completed = !todoArray[index].completed;
    console.log(todoArray[index]);
    saveToLocal();
  };
  
export const deleteTodo = (index, todoArray) => {
    todoArray.splice(index, 1);
    saveToLocal();
    
  };
  
export const saveToLocal = (todoArray) => {
    localStorage.setItem("todos", JSON.stringify(todoArray));
  };  

