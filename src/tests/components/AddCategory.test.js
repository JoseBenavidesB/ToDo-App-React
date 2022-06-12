import React from 'react'
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom'

describe('Test <AddCategory/>', () => {  
    
    const setCategories = jest.fn(); 
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>); //repeat to have help from editor

    beforeEach( ()=> { //something execute before
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('should return <AddCategory/> correctly', () => {  

        
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change box text', ()=> {
        
        const value= "hello world";
        const input = wrapper.find('input');

        input.simulate('change', {target: {value} }) //target ... event

        //console.log(input.props())
    });

    test('if input doesnt change, Dont have post information with submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} }); // (){}  short way fuction

        expect( setCategories ).not.toHaveBeenCalled(); // snippet from import '@testing-library/jest-dom'
    });

    test('should call setCategories and clear text box', () => {  

        const value = 'nuevo';

        //simulate inputChange
        const input = wrapper.find('input');
        input.simulate('change', {target: {value}});

        //simulate submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //setCategories called
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        //input value have to be ''
        expect( input.prop('value') ).toBe('');
        

    })

});
