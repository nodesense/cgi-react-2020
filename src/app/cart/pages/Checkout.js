// pages/Checkout.js
import React from 'react';

// Ref: Reference to REAL DOM
// createRef
// access to d3, canvas, div, access to input focus....
// Ref is local to component, works with class component


// React works based on virtual dom
// End user interact with Real dom
// Forms are control, accept inputs from the user

class Checkout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: 'Gopalakrishnan',
            lastname: '',
            city: ''
        }

        // don't assign ref to state, as ref is reference to dom, control/ui, not a data
        this.firstnameRef = React.createRef();
    }

    componentDidMount() {
        // Ref is available after component mounted
        // always use ref in componentDidMount and/or componentDidUpdate
        // current is a real dom, input tag
        console.log("REAL DOM", this.firstnameRef.current)
        this.firstnameRef.current.focus(); // set the cursor to input element
    }

    handleChange = (e) => {
        const target = e.target; // target is input/select real dom
        const {name, value} = target; // name is firstlame, lastname, city etc
        console.log("name", name, "value", value)

        this.setState({
            [name]: value
        })
    }

    render() {
        console.log("Checkout render")
        return (
            <div>
                <h2>Checkout</h2>
                <form>
                    First Name 
                    {/* when value not mentioned, user could type values in the ui */}
                    {/* add value in virtual dom then 
                        react sync virtual dom to real dom, overwrite user value
                        to solve the problem, 
                                subscribe onChange, 
                                take the changed value
                                apply the changed value to state
                                and update virtual dom
                    
                    */}
                    <input name="firstname" type="text" 
                           value={this.state.firstname}
                           onChange={this.handleChange}
                           ref={this.firstnameRef}
                           />

                    Last name
                    <input name="lastname" type="text" 
                           value={this.state.lastname}
                           onChange={this.handleChange}
                           />
                    
                    City
                    <select name="city"
                            value={this.state.city}
                            onChange={this.handleChange} >
                        <option value="BLR">Bengaluru</option>
                        <option value="CHE">Chennai</option>
                        <option value="PUN">Pune</option>
                        <option value="MUM">Mumbai</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Checkout;