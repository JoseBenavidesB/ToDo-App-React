import React from 'react'
import { shallow } from "enzyme";


import { HookApp } from "../HookApp";

describe( 'Test <HookApp />', () => {
    
    test( "Should Return <HookApp /> correctly", () => {
        const wrapper = shallow( <HookApp/> );

        expect( wrapper ).toMatchSnapshot();
    })
});
