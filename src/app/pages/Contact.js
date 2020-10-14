import React, {useEffect, useRef, useState} from 'react';

import Counter from '../components/Counter';
import Like from '../components/Like';

const Contact = ({}) => {
    const [visits, setVisit] = useState(10);
    const [flag, setFlag] = useState(true)

    // useEffect(callback, [dependencies list])

    //useEffect(callback) - means that it is called on component initial mount, also called on update cycle
    //useEffect(callback) - means that componentDidMount, componentDidUpdate

    //useEffect(callback, []) - means that it is called on component initial mount,NOT CALLED LATER
    //useEffect(callbac, []) - means that componentDidMount

    // condition based on change, like similar memoize, only if the dependencies changed, then call
    //useEffect(callback, [visits]) - means that it is called on component initial mount, THEN
                                      // ONLY if visits value changed
    //useEffect(callback, [visits, props.address, props.balance])

    useEffect(() => {
        console.log("useEffect setting  title - Parent")
        document.title = "Contact us -" + visits

        return () => {
            // reset the page title when use leave the page
            document.title = "ShopX"
        }
    }  )

    // Ref is to access the REAL DOM
    // if we have already dom reference, pass as initial value , or pass null
    // nameRef.current shall be initialized with inital dom ref if there
    const nameRef = useRef(null)
    const likeRef = useRef(null)

    const setFocus = () => {
        nameRef.current.value = "Your name here"
        nameRef.current.focus()

        console.log('Like Ref', likeRef)
    }

    return (
        <div>
            <h2>Contact page</h2>
            <input name="name" type="text"
                   ref={nameRef} 
            />
            <button onClick={setFocus}>Fill Details</button>

            <button onClick={ () => setVisit(visits + 1)}>+Visit</button>
            <button onClick={ () => setFlag(!flag)}>!Flag</button>
            
            <Counter initialCount={100} />

            <Like likes={100000} pageTitle="Contact"  
                  ref={likeRef}  
            />
        </div>
    )
}

export default Contact;