import { shallow } from 'enzyme/build'
import React from 'react'
import { AddTodo } from '../../../components/08-useReducer/AddTodo'


describe('Test AddTodo', () => {
    const handleAddToDo = jest.fn();

    const wrapper = shallow( <AddTodo handleAddToDo={ handleAddToDo }/>)

    test('should show correctly', () => { 
        
        expect( wrapper ).toMatchSnapshot();
     });

     test('dont call handleAddToDo', () => { 
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddToDo ).toHaveBeenCalledTimes(0);

     });

     test('should call handleAddToDo', () => { 

        const value = 'learn react'

        wrapper.find('input').simulate('change', { 
            target: {
                value,
                name: 'description'
            }
        });
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddToDo ).toHaveBeenCalledTimes(1);
        expect( handleAddToDo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        
        expect( wrapper.find('input').prop('value') ).toBe('');//this is the RESET()

     });


});