// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

    static recalculate(prevState, props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        return {
            discount, 
            grandTotal
        }
    }
     
    static getDerivedStateFromProps(props, state) {
        return CartSummary.recalculate(state, props)
    }

    // is not called during initial/creation stage
    // called only during update cycle, this.setState, when parent render called
    // should return true or false
    // if return true, render shall be called on update cycle
    // if return false, render shall not be called on update cycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log("CartSummary shouldComponentUpdate ")
        console.log("\nnext props", nextProps, "\ncurrent props", this.props)
        console.log("\nnext state", nextState, "\ncurrent state", this.state)
        // FIXME: compare prevProp with current props, prev state and current state, return true or false

        // cons: code is not scable across as many properties/state attribute
        const canRender = nextProps.amount !== this.props.amount ||
                          nextProps.count !== this.props.count ||
                          nextState.discount !== this.state.discount ||
                          nextState.grandTotal !== this.state.grandTotal

        console.log("canRender", canRender)
        return canRender;
    }

    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;