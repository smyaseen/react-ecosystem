import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, isCompleted }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {!todo.isCompleted && (
        <button
          className="completed-button"
          onClick={() => {
            isCompleted(todo.text);
          }}
        >
          Mark As Completed
        </button>
      )}

      <button
        onClick={() => onRemovePressed(todo.text)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
