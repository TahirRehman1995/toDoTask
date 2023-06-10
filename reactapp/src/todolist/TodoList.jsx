import React, { useState } from "react";
import "./todo.css";
import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";

export const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false
    },
    {
      id: 2,
      title: "Learn Node",
      completed: false
    },
    {
      id: 3,
      title: "Learn Mongo",
      completed: false
    },
    {
      id: 4,
      title: "Learn to be Insan",
      completed: false
    }
  ]);

  const deleteTodo = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const toggleComplete = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const addTask = (title) => {
    if (!title) {
      return;
    }
    const newTask = { id: items.length + 1, title, completed: false };
    const newItems = [...items, newTask];
    setItems(newItems);
  };

  return (
    <div>
      <div className="bar">
        <h2 className="heading">Website Todo</h2>
      </div>
      <div className="todo-list shadow-lg">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            completed={item.completed}
            deleteTodo={() => deleteTodo(item.id)}
            toggleComplete={() => toggleComplete(item.id)}
          />
        ))}
      </div>
      <AddTodo addTodo={addTask} />
    </div>
  );
};
