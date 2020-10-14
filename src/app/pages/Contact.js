import React, {useEffect, useRef} from 'react';

import Counter from '../components/Counter';

const Contact = ({}) => {
    useEffect(() => {
        document.title = "Contact us"

        return () => {
            // reset the page title when use leave the page
            document.title = "ShopX"
        }
    })

    // Ref is to access the REAL DOM
    // if we have already dom reference, pass as initial value , or pass null
    // nameRef.current shall be initialized with inital dom ref if there
    const nameRef = useRef(null)

    const setFocus = () => {
        nameRef.current.value = "Your name here"
        nameRef.current.focus()
    }

    return (
        <div>
            <h2>Contact page</h2>
            <input name="name" type="text"
                   ref={nameRef} 
            />
            <button onClick={setFocus}>Fill Details</button>
            <Counter initialCount={100} />
        </div>
    )
}

export default Contact;