import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./app.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todoValue.trim()) {
      setTodos([...todos, { text: todoValue, completed: false }]);
      setTodoValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleEditTodo = (index, newValue) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newValue } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleComplete={handleToggleComplete}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default App;
