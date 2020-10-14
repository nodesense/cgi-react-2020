// Footer.js
import React from 'react';
import PropTypes from 'prop-types'; // npm i prop-types

import ThemeContext from "../contexts/Theme";


// PropTypes validate properties, show warning
// contract validation data type, required/not
// ES6
const Footer = (props) => {
    // destructuing object
    // props.children is a keyword, refers to content children <p>Hello</p>
    // <Footer> <p>Hello</p> </Footer>
    const {appTitle, year, company, showAddress, children} = props;
    return (
        <div>
            <hr />
            <p>Copyrights @{year}, {company}, {appTitle}</p>
            {/* JSX doesn't accept statement, but accept expressions */}

            {showAddress && <p>MG Road, Bengaluru</p>}

            {children}
            {/* to ues multiple consumers, or use in functional component */}
            <ThemeContext.Consumer>
                {value => <button style= { {background: value} }>Welcome</button> }
            </ThemeContext.Consumer>
        </div>
    )
}

//note: p small char
// react keyword
Footer.propTypes = {
    appTitle: PropTypes.string.isRequired, // string type, mandatory
    company: PropTypes.string, // optional
    year: PropTypes.number.isRequired,
    showAddress: PropTypes.bool.isRequired
}

// default props
// used if the prop not passed
// keyword
Footer.defaultProps = {
    company: "Product App company"
}

// best pratice to have export at end,
// help us to easily wrap with high order component
export default Footer;