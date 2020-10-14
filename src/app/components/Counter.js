import React, {useState, useEffect, useContext, useMemo} from 'react';
import ThemeContext  from '../contexts/Theme';

// React Hooks
// useState --> bring state to the functional component


// ({}) destructing, no props are passed now
// ({initialCount}) destructing,   props is {initialCount: 100}

function add(a, b)   {
    console.log("add called with ", a , b)
    return a + b;
}

const Counter = ({initialCount}) => {
    console.log("Counter render")

   

    // useState returns an array, first index contains  value, second contains setter function
    //const [counter, setCounter] = useState(0) // 0 is initial value
    // something similar to using constructor to initialize default state
    const [counter, setCounter] = useState(initialCount) // can be initialized from props
    
    // show hide some elements
    // idea is to trigger render without change in counter value
    const [flag, toggle] = useState(true) // can be initialized from props
    

     // Momoized add
     // useMemo returns a value, not a function
     const result =useMemo( () => add(10, counter), // simple function callback involved only param 2 changed
                            [ counter]  // param 2, if this param 2 change, first is called 
                            )
     console.log("Result is ", result)


    // useEffect accept a callback function as an input
    // useEffect will be called by internally when?
    // First time, after v.dom is mounted in the real dom [componentDidMount]
    // Then whenever the Function render called, after updatign real dom [componentDidUpdate]
    // to access real dom
    // subscribe, unsubscribe, settimer, clear time
    // the callback function can return another function [curry function], which can useful for cleanup context
    // the returned/curry function is called by react during cleanup
    // when componnet get destroyed
    useEffect( () => {
        // componentDidMount, componentDidUpdate code goes here
        console.log("useEffect called")
        console.log("Counter is ", counter)

        // this function is called by react when component is unmouting for cleanup
        // 
        return () => {
            // componentWillUnmount code goes here
            // cleanup, unsubscribe.
            console.log("UseEffect callback , clean resource ")
        }
    })


    const theme = useContext(ThemeContext)
    console.log("useContext theme is ", theme)


    // <> represent React.Fragment
    // JSX Needs a parent element, we cannot put two child directly
    // People are forced to use div like containers when more than children found.
    // React.Fragement or <> are same, no parent html tag is enforced
    return (
        <>
            <h4>Counter</h4>
            <p>Page visit {counter}</p>
            {/* calling setter ensure that function is re-rendered */}
            <button style = { {background:  theme} } onClick={ () => setCounter(counter + 1) }> + 1 </button>
            <button onClick={ () => setCounter(counter - 1) }> - 1 </button>

            {flag &&  <p>Result is {result}</p>}
            <button onClick={ () =>  toggle(!flag) }>Toggle</button>

        </>
    )
}

export default Counter;