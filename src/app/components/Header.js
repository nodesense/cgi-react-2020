// Header.js
import React from 'react';

import {NavLink} from 'react-router-dom';

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
            
            {/* NavLink also match starts with patten
                use exact to force exactly equal to - default path
            */}

            <NavLink to="/" exact className="button"  activeClassName="success" > Home </NavLink>
            <NavLink to="/products" className="button" activeClassName="success"> Products </NavLink>
            <NavLink to="/cart" className="button"  activeClassName="success" > Cart </NavLink>
            <NavLink to="/about" className="button" activeClassName="success"> About </NavLink>
            <NavLink to="/login" className="button" activeClassName="success"> Login </NavLink>
        </div>
    )
}

export default Header;