// app/pages/PageCounter.js
// useReducer basic

import React, {useReducer} from 'react';

// reducer
// Reducer is a pure function
// reducer doesn't store data
// reducer should SYNC
// reduce SHOULD NOT do async, no API call, no defered call, no promises, no rxjs, no events
// reducer (state, action)
// action is an OBJECT { type: 'STRING preferred/unique one', payload/addtional attributes is completely optional}
// should not mutate the data
// reducers provides logic to action
const reducer = (state, action) => {
    console.log("reducer called, state ", state, " action ", action)
    switch(action.type) {

        case 'increment': 
            //BAD ==> STATE MUTATION, NOT ALLOWED state.counter = state.counter + action.value
            return {counter: state.counter + action.value}

        case 'decrement': 
            return {counter: state.counter - action.value}

        case 'reset': 
            return {counter: 0}

        // TODO Now 'decrement' and 'reset' where no payload to reset

        // have default implementation
        // if no default, not implemented actions would set the state to undefined
        // js by default returns undefined
        default: return state;
    }
}

// dispatch accept action as arg
// dispatch shall call the reducer with current state as first argument, 
// second arg is action

const PageCounter = ({}) => {
    const [state, dispatch] = useReducer(reducer, {counter: 100})
    console.log("State ", state)
    return (
        <div>
            <h2>Page Counter</h2>

            <p>Counter {state.counter} </p>

            <button onClick={() => dispatch({type: 'increment', value: 1}) }> +1 </button>
            <button onClick={() => dispatch({type: 'increment', value: 5}) }> +5 </button>

            <button onClick={() => dispatch({type: 'increment', value: -1}) }> -1 </button>
            <button onClick={() => dispatch({type: 'reset'}) }> Reset </button>
        </div>
    )
}

export default PageCounter;