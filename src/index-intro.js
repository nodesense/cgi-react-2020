// bootstrap file
// loaded as first file in  browser

// default import, no curly braces
import React from 'react';
import ReactDOM from 'react-dom';

console.log("starting react app")
// boot strapping react
// virtual dom
// <h1 id="myheader" class="highlight">WElcome to react</h1>
//class -> className, for -> forName

// this is react, use js to create virtual dom view
const vDOM = React.createElement("h1",  // html tag
                                 {id: "myheader", className: "highlight"}, // attributes
                                 // content
                                 "Welcome to react" // content children
                                 )
// JSX - JavaScript + XML, use xml tag inside JS
// Babel to convert XML to Js during compile time
// () for best practice
// While using JSX, React should be imported, it should be capital R
const vDOM2 = (
    <div>
        <h2>Welcome to React</h2>
    </div>
)

// first component
// class or functional component, shoudl have capital case for JSX
// returns a Virtual DOM
function Hello() {
    console.log("hello called")
    return (
        <div>
            <h2>Welcome to React</h2>
        </div>
    )
}


// virtual dom --> real dom
// uni directional flow v.dom -> real dom
ReactDOM.render(<Hello />, document.getElementById("root"))