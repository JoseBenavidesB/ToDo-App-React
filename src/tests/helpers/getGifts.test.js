import { getGifts } from '../../helpers/getGifts';

describe('Test getGifts', ()=>{

    test('should return array with 5', async()=> {

        const gifs = await getGifts('one punch')
        
        expect( gifs.length ).toBe( 5 );
    });

    test('should return  array with 0', async()=> {

        const gifs = await getGifts('')
        
        expect( gifs.length ).toBe( 0 );
    });
});
