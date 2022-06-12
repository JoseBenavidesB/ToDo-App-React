import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe( 'Test in useCounter', () => {
    test('should return default values', () => { 

        const { result } = renderHook( () => useCounter() );
        
        expect( result.current.counter ).toBe(0);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

     });

     test('should return counter value 100', () => { 

        const { result } = renderHook( () => useCounter(100) );
        
        expect( result.current.counter ).toBe(100);
     });

     test('should incremment counter 1', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment, reset } = result.current;

        act( () => {
            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe(101);

     });

     test('should reset counter value', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { reset, decrement } = result.current;

        act( () => {
            decrement();
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe(100);

     });

     test('should decremment counter value -1', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;
        expect( counter ).toBe(99);

     });
})
     