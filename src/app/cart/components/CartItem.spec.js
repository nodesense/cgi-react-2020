import React from 'react';
import {mount} from "enzyme";

import {MemoryRouter as Router} from 'react-router-dom'

import CartItem from "./CartItem";

describe("Cart Tests", () => {

    it("test initial component", () => {
        // test cases can provide mocks for callbacks
        const updateItem = jest.fn(); // mock function
        const removeItem = jest.fn();
         let wrapper = mount(<table><tbody><CartItem updateItem={updateItem} 
                                        removeItem={removeItem}
                                        item={ {id: 10, price: 100, qty: 2, name: "P2"} } />
                                        </tbody></table>
                                        )
       // const component = wrapper.instance()
    
        // header row, data row
        expect(wrapper.find("tr").length).toBe(1)
        expect(wrapper.find("td").at(0).text()).toBe("P2")
        expect(wrapper.find("td").at(1).text()).toBe("100")
        expect(wrapper.find("td").at(2).text()).toBe("2")
        expect(wrapper.find("td").at(3).text()).toBe("200")
         
        // up button, updateItem callback
        wrapper.find("button").at(0).simulate('click'); 

        expect(updateItem).toBeCalled();

        expect(updateItem).toBeCalledWith(10, 3);

       // expect(wrapper).toMatchSnapshot();
    })
   
})