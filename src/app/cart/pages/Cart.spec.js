import React from 'react';
import {mount} from "enzyme";

import {MemoryRouter as Router} from 'react-router-dom'

import Cart from "./Cart";

describe("Cart Tests", () => {

    it("test initial component", () => {
        let wrapper = mount(
            <Router >
                <Cart />
            </Router>
        )
    
        // header row, data row
        expect(wrapper.find("tr").length).toBe(2)
       // expect(wrapper).toMatchSnapshot();
    })
   
})