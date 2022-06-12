import React from 'react';
import { shallow } from 'enzyme';

import GifExpertApp from '../GifExpertApp';


describe('Test <GifExpertApp/>', () => { 

    test('should return <GifExpertApp/> correctly', () => {

        const wrapper = shallow(<GifExpertApp/>)

        expect( wrapper ).toMatchSnapshot();
    });

    test('should a category list', () => {

        const categories = ['Dragon Ball', 'Goku'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });
});
