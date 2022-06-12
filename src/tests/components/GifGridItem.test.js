import React from 'react'
import { GifGridItem } from "../../components/GifGridItem";


import {shallow} from 'enzyme';

describe('Test <GifGridItem/>', () => { 
    
    const title = 'This is a test';
    const url = 'https://localhost.com'
    const wrapper = shallow( <GifGridItem 
        title={title} 
        url= {url}/> );
        
    test('should <GifGridItem/> correctly', () => {  

        expect( wrapper ).toMatchSnapshot();
    });

    test('should have paragraph with title', () => {  

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title);
    });

    test('should have image equal url and alt equal title', ()=> {

        const img = wrapper.find('img')

        expect( img.prop('src') ).toBe(url);
        expect( img.props().alt ).toBe( title );

    });

    test('should have animate__headShake class', ()=> {

        const className = 'animate__headShake';
        const div = wrapper.find('div');

        expect(div.prop('className').includes(className)).toBe(true);
    });

});