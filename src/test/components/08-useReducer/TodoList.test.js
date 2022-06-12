import React from 'react';
import { shallow } from "enzyme/build"
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { newToDo } from '../../fixtures/demoToDo';

describe( 'Test TodoList', () => {
    
    const handleToggle = jest.fn(); 
    const handleDelete = jest.fn();

    const wrapper = shallow( <TodoList 
        toDos = {newToDo}
        handleToggle = { handleToggle }
        handleDelete = { handleDelete }
    />)

    test('should show TodoList correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have two ToDo list item', () => {
        
        expect( wrapper.find( 'TodoListItem').length).toBe( newToDo.length );

        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );

        expect( wrapper.find('TodoListItem').at(0).prop('handleToggle') ).toEqual( expect.any(Function) );
    });


})