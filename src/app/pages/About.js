// About.js
import React from 'react';

import {Link} from 'react-router-dom';

// n => (n * n)

// notice, paranthese not curly brace
// {} - block of code, then return statement needed
// () - single line function, no return statement
// destructing in function declaration
// (props) => change to destructing  { founders, branches }
const About = ({ founders, branches:{headOffice, branchOffice} }) => (
    <div>
        <h2>About page</h2>

        {/* for loop not allowed */}
        <h4>Founders</h4>
        <ul>
            {
                founders.map( name => <li key={name}>{name}</li>)
            }
        </ul>

        <p>Head Office {headOffice.city}</p>
        <p>Branch Office {branchOffice.city}</p>

        {/* use Link or NavLink to move from one page to another page : SPA
            do'nt use <a href, as it will leave the page */}
        <Link to="/cart">Cart</Link>
            <br />
        {/* DONT DO THIS a href, it will break SPA, send request to server */}
        <a href="/cart"> a href Cart Req to server/bad part </a>

    </div>
)

export default About;