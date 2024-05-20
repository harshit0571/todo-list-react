export const fetchTodos = async () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos != "undefined" && savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    const response = await fetch(
      " https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();
    saveToLocal(data);
    return data;
  }
};

export const toggleTodo = (index, todoArray) => {
  todoArray[index].completed = !todoArray[index].completed;
  console.log(todoArray[index]);
  saveToLocal(todoArray);
  return todoArray;
};

export const deleteTodo = (index, todoArray) => {
  todoArray.splice(index, 1);
  saveToLocal(todoArray);
  return todoArray;
};

export const saveToLocal = (todoArray) => {
  localStorage.setItem("todos", JSON.stringify(todoArray));
};

export const addTask = (input, todoArray) => {
  if (input) {
    const newTodo = {
      id: todoArray.length + 1,
      title: input,
      completed: false,
    };
    todoArray.push(newTodo);
  }
  saveToLocal(todoArray);
  return todoArray;
};

export const clearTodos = (todoArray) => {
  localStorage.removeItem("todos");
  return [];
};
