import React from 'react'
import { shallow } from 'enzyme'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';




describe( ' test RealExampleRef ', () => {

    const wrapper = shallow( <RealExampleRef /> );

    test('should return correctly ', () => { 
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    });

    test('should show <MultipleCustomHook /> ', () => { 
        
        wrapper.find('button').simulate('click')
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);

        console.log(wrapper.html())

    });
})