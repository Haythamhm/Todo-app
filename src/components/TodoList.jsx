import React from 'react';
import TodoCard from './TodoCard';
import '../styles/todolist.css'; // Import the stylesheet if not already done

export default function TodoList({ todos, handleDeleteTodo, handleToggleComplete, handleEditTodo }) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoCard
                    key={index}
                    todo={todo}
                    index={index}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggleComplete={handleToggleComplete}
                    handleEditTodo={handleEditTodo}
                />
            ))}
        </ul>
    );
}
