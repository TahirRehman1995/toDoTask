/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DeleteIcon from "../assets/deleteicon.png";
import "./todo.css";

export const TodoItem = ({ title, deleteTodo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`todo-item ${isChecked ? "completed" : ""}`} id="todo-1">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <p className="todo-task-title">{title}</p>
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  );
};
