import { useForm } from "../../hooks/useForm";
import { renderHook, act } from '@testing-library/react-hooks'

describe( 'test useForm ', () => {

    const initialForm = {
        name: 'Jose',
        email: 'josecorreo'
    };

    test('should return a default form', () => { 
        const {result}   = renderHook( ()=> useForm(initialForm) )
        const [ values, handleInputChange, reset ] = result.current;

        expect( values ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });

    test('should change value form ( change name )', () => { 
        const {result}   = renderHook( ()=> useForm(initialForm) )
        const [ , handleInputChange ] = result.current;


        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'pedrooo'
                }
            });
        });
        
        const [ values ] = result.current;

        expect( values ).toEqual( { ...initialForm, name: 'pedrooo' })
    

    });

    test('should reset form', () => {  
        const {result}   = renderHook( ()=> useForm(initialForm) )
        const [ , handleInputChange, reset ] = result.current;


        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'pedrooo'
                }
            });
            reset();
        });
        
        const [ values ] = result.current;
        expect( values ).toEqual( initialForm )


    });


});