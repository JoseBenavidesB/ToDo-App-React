import React from 'react'
import { useForm } from '../../hooks/useForm';

export const AddTodo = ({ handleAddToDo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( description.trim().length <= 1) { return;}

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        
        handleAddToDo(newTodo);
        reset();
    }
    return (
        <>
            <h4> Add ToDo </h4> <hr/>

            <form onSubmit={ handleSubmit }>
                
                <input
                    type="text"
                    name="description"
                    className='form-control mb-0 m-auto'
                    placeholder="Write something"
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button 
                    type= "submit" 
                    className='btn btn-outline-primary mt-2 col-12 m-auto'> Add </button>

            </form>
        </>
    )
}
