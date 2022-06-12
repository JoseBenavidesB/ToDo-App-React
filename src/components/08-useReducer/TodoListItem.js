import React from 'react'

export const TodoListItem = ({ todo, idx , handleToggle, handleDelete }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && "complete"}`}
      >
        {idx + 1}. {todo.desc}
      </p>

      <button
        // id= { todo.id }
        onClick={() => handleDelete(todo.id)}
        className="btn btn-danger m-2"
      >
        Delete
      </button>
    </li>
  );
}
