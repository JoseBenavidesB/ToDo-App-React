import React from 'react'
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch'); // SIMULACION con esto evito que se ejecute el customhooks y en cambio se ejecuta lo que yo voy hacer
jest.mock('../../../hooks/useCounter');


describe( 'test MultipleCustomHooks ', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {},
        decrement: () => {}
    });

    test('should return correctly', () => { 

        useFetch.mockReturnValue({ //simulacion useFetch con MOCK
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();

     });

     test('should show data', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'jose',
                quote: 'hello world',
            }],
            loading: false,
            error: null
        });
        
        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-3').text().trim() ).toBe( 'hello world');
        expect( wrapper.find('footer').text().trim() ).toBe( 'jose');

     });
})