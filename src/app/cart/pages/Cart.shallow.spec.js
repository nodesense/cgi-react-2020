import React from 'react';
import {shallow} from "enzyme";

import {MemoryRouter as Router} from 'react-router-dom'

import Cart from "./Cart";

describe("Cart shallow Tests", () => {

    it("test initial component", () => {
        let wrapper = shallow( 
                <Cart /> 
        )
    
        // it wont't render table rows 
        // expect(wrapper.find("tr").length).toBe(2)
        expect(wrapper).toMatchSnapshot();
            
        // instance is cart component instance
        wrapper.instance().empty()
        wrapper.update() // calls the render
        const instance = wrapper.instance()
        expect(instance.state.amount).toBe(0)
        expect(instance.state.count).toBe(0)
    })
   
})