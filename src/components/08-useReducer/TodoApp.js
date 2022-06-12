
import React from 'react'; 
import { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
//import { useForm } from '../../hooks/useForm';


import './styles.css'
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';


const init = ()=> {

    return JSON.parse(localStorage.getItem( 'todos')) || [];
    /* return [{
        id: new Date().getTime(),
        desc: 'Learn React',
        done: false
    }]; */
}
export const TodoApp = () => {

    const [toDos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => { //save in the local storage
        
        localStorage.setItem( 'todos', JSON.stringify( toDos ) )
      }
    , [toDos]);
    
    const handleDelete = ( id ) => {
        const action = {
            type: 'delete',
            payload: id
        }
        //dispatch
        dispatch(action);
    };

    const handleToggle = ( todoId ) => {
        dispatch( {
            type: 'toggle',
            payload: todoId
        })
    };
    const handleAddToDo = (newTodo) => {
        dispatch({
            type : 'add',
            payload : newTodo
        });
    };

    return (
        <>
            <h1> ToDo App ({ toDos.length })</h1> <hr/>

            <div key={1} className="row">
                <div className="col-7">

                    <TodoList 
                        toDos={ toDos } 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                    />

                </div >
                <div  className="col-5">
                    < AddTodo handleAddToDo={handleAddToDo}/>
                </div>
            </div>
            
        </>
    )
}
