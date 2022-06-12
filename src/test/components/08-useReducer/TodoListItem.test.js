import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { newToDo } from '../../fixtures/demoToDo';



describe( 'test TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const todo = newToDo[0]

    const wrapper = shallow( <TodoListItem 
        todo= {newToDo[0]}
        idx= {1}
        handleDelete= { handleDelete }
        handleToggle= { handleToggle }
    />);


    test('should return <TodoListItem /> correctly', () => {

        
        expect(wrapper).toMatchSnapshot();
    });

    test('should call handleDelete', () => { 
        //jest.fn()???
        //toHaveBeenCalled
        //toHaveBeenCalledWith
        wrapper.find( 'button').simulate( 'click', { })

        expect( handleDelete ).toHaveBeenCalledWith( todo.id );

    });

    test('should call handleToggle', () => { 
        //jest.fn()???
        //toHaveBeenCalledWith

        wrapper.find( 'p').simulate( 'click', { })
        expect( handleToggle ).toHaveBeenCalledWith( todo.id );
    });

    test('should show text correctly', () => { 
        //parraph content

        const p = wrapper.find('p')
        expect( p.text() ).toBe(`${1 + 1}. ${todo.desc}`)
    });

    test('should have complete class if Todo.done is true', () => { 
        //parraph content
        const todo = newToDo[0];
        todo.done = true;

        const wrapper = shallow( <TodoListItem 
            todo= { todo }
            idx= {1}
        />);

        const p = wrapper.find('p')
        expect( p.hasClass('complete') ).toBe(true)
    });

})