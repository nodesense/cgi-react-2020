// name the test cases either .spec.js or test.js
// JEST shall scan all fiels with spec.js or test.js execute them
import React from 'react';

import PageCounter, {reducer}  from './PageCounter';

import renderer from 'react-test-renderer';
  

// test suite
describe("Testing Reducers Test Suite", () => {
    // a test suite contains more test cases
    // it means test specification
    // english word it.
    it("should increment state value", () => {
        // assert/test statement/predicates
        // expect(1 + 1).toBe(2) // shallow compare [compare two values, or two refs, not deep equal]
        const state = {counter: 0}
        const action = {type: 'increment', value: 10}

        // toEqual , deep equality == without type checking
        // reducer toStrictEqual deep equality === with type checking
        expect(reducer(state, action)).toEqual({counter: 10})
    })

    it("should decrement state value", () => {
        const state = {counter: 100}
        const action = {type: 'decrement', value: 10}
        expect(reducer(state, action)).toEqual({counter: 90})
    })
})

describe("Test PageCouner component test", () => {
    // V.dom testing, NO REAL DOM, no react-dom library, no events/no queue
    // snapshot, convert V DOM into JSON format
    it("test page counter defaults", () => {
        // create component, render it to V.DOM
        // convert to JSON tree
        const tree = renderer
                    .create(<PageCounter />)
                    .toJSON();

        // very first time, it will create a folder, create a reference copy for test
        // for subsequest, test, reference copy used for comparison
        expect(tree).toMatchSnapshot();
    })
})