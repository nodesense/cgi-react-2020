import React, {useState} from 'react';

// React Hooks
// useState --> bring state to the functional component


// ({}) destructing, no props are passed now
// ({initialCount}) destructing,   props is {initialCount: 100}

const Counter = ({initialCount}) => {
    console.log("Counter render")

    // useState returns an array, first index contains  value, second contains setter function
    //const [counter, setCounter] = useState(0) // 0 is initial value
    // something similar to using constructor to initialize default state
    const [counter, setCounter] = useState(initialCount) // can be initialized from props
    
    // <> represent React.Fragment
    // JSX Needs a parent element, we cannot put two child directly
    // People are forced to use div like containers when more than children found.
    // React.Fragement or <> are same, no parent html tag is enforced
    return (
        <>
            <h4>Counter</h4>
            <p>Page visit {counter}</p>
            {/* calling setter ensure that function is re-rendered */}
            <button onClick={ () => setCounter(counter + 1) }> + 1 </button>
            <button onClick={ () => setCounter(counter - 1) }> - 1 </button>
        </>
    )
}

export default Counter;