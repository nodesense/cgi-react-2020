// About.js
import React from 'react';

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
    </div>
)

export default About;