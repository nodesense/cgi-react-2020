// Header.js
import React from 'react';

// parent to child communication
// using props - properties
// <Header appTitle="ShopX"
// appTitle is a property

// the props are passed as props object
function Header(props) {
    console.log('Header render', props);
    // props are immutable, changing will break app or not a good practice
    // props.appTitle = "Training App"; // error 
    // parent own the data [read/write], child is a consumer [read only]
    // props.appTitle
    return (
        <div>
            <h2>{props.appTitle}</h2>
        </div>
    )
}

export default Header;