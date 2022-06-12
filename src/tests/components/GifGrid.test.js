import React from 'react'
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom'

jest.mock('../../hooks/useFetchGifs'); // fingir

describe('Test <GifGrid/>', () => { 

    const category = 'One punch';

    test('should return <GifGrid/> perfectly', ()=> {
    
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show items when load img with useFetchGifs', () => { 
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost.com',
            title: 'Test title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
    
    
})