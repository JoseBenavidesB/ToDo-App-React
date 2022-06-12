import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('test hook useFetchGifs', () => {

    test('should return initial value', async()=> {

        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs( 'One punch') );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        //console.log(data, loading);
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('should return img array and loading: false', async() => {

        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs( 'One punch ') );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 5 );
        expect( loading ).toBe( false );
    })
});
