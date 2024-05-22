export const fetchTodos = async () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos != null) {
    return JSON.parse(savedTodos);
  } else {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();
    saveToLocal(data);
    return data;
  }
};
export const saveToLocal = (todoArray) => {
  localStorage.setItem("todos", JSON.stringify(todoArray));
};

export const setTodos = (payload) => {
  return payload;
};

export const addTask = (todos, payload) => {
  console.log("Calling addTask from reducer with payload:", payload);
  const newTodo = {
    id: todos.length + 1,
    title: payload,
    completed: false,
  };
  const addedTodos = [...todos, newTodo];
  saveToLocal(addedTodos);
  return addedTodos;
};

export const removeTask = (todos, payload) => {
  console.log("Calling deleteTodo from reducer with index:", payload);
  const removedTodos = todos.filter((todo, index) => index !== payload);
  saveToLocal(removedTodos);
  return removedTodos;
};

export const toggleTask = (todos, payload) => {
  console.log("Calling toggleTodo from reducer with index:", payload);
  const toggledTodos = todos.map((todo, index) =>
    index === payload ? { ...todo, completed: !todo.completed } : todo
  );
  saveToLocal(toggledTodos);
  return toggledTodos;
};

export const clearTodos = () => {
  console.log("Calling clearTodos from reducer");
  const clearedTodos = [];
  saveToLocal(clearedTodos);
  return clearedTodos;
};

// export const addTask = (input, todoArray) => {
//   let arr = [];
//   if (input) {
//     const newTodo = {
//       id: todoArray.length + 1,
//       title: input,
//       completed: false,
//     };
//     arr = [...todoArray, newTodo];
//     todoArray.push(newTodo);
//   }
//   saveToLocal(arr);
//   return arr;
// };

// export const clearTodos = (todoArray) => {
//   todoArray = [];
//   saveToLocal(todoArray);
//   return todoArray;
// };

// export const toggleTodo = (index, todoArray) => {
//   todoArray[index].completed = !todoArray[index].completed;
//   saveToLocal(todoArray);
//   return [...todoArray];
// };

// export const deleteTodo = (index, todoArray) => {
//   todoArray.splice(index, 1);
//   saveToLocal(todoArray);
//   return [...todoArray];
// };
