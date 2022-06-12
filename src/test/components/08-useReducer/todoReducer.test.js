import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { newToDo } from "../../fixtures/demoToDo"

describe( 'test todoReducer ', () => {


    test('should return todoReducer correctly', () => {
        const state = todoReducer(newToDo,{})
        expect( state ).toEqual(newToDo)
    });
    test('should add correctly', () => {
        
        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'learn css',
                done: false
            }
        }
        const state = todoReducer(newToDo, action)
        
        expect( state.length ).toBe(3)
    });
    test('should delete correctly', () => {
        
        const action = {
            type: 'delete',
            payload: 2
        }
        const state = todoReducer(newToDo, action)
        expect( state.length ).toBe(1);
        expect( state).toEqual( [newToDo[0]])
        
    });
    test('should toggle correctly', () => {
        
        const action = {
            type: 'toggle',
            payload: 2
        }
        const state = todoReducer(newToDo, action)
        expect( state[1].done ).toBe( true )
        expect( state[0]).toEqual( newToDo[0])
    });
    
})