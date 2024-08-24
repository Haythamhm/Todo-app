import React from "react";
import "../styles/todoinput.css";

export default function TodoInput({ todoValue, setTodoValue, handleAddTodo }) {
return (
    <div className="input-container">
    <input
        className="todo-input"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter a new task..."
    />
    <button className="add-button" onClick={handleAddTodo}>
        Add
    </button>
    </div>
);
}
