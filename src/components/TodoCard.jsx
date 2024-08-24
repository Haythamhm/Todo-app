import React, { useState } from "react";
import "../styles/todocard.css";

export default function TodoCard({
    todo,
    index,
    handleDeleteTodo,
    handleToggleComplete,
    handleEditTodo,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);

    const handleEdit = () => {
        handleEditTodo(index, editValue);
        setIsEditing(false);
    };

    return (
        <li className={`todo-card ${todo.completed ? "completed" : ""}`}>
            {isEditing ? (
                <input
                    className="edit-input"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={handleEdit}
                    onKeyPress={(e) => e.key === "Enter" && handleEdit()}
                />
            ) : (
                <span
                    className="todo-text"
                    onClick={() => handleToggleComplete(index)}
                >
                    {todo.text}
                </span>
            )}

            <div className="actions">
                <button className="edit-button" onClick={() => setIsEditing(true)}>
                    <i className="fa fa-edit"></i>
                </button>
                <button
                    className="delete-button"
                    onClick={() => handleDeleteTodo(index)}
                >
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    );
}
