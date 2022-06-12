
import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ toDos = [], handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush p-0">
        {toDos.map((todo, idx) => (
            <TodoListItem key={todo.id} todo={ todo } idx={ idx }  handleDelete={handleDelete} handleToggle={handleToggle}/>
        ))}
    </ul>
    
  );
}
