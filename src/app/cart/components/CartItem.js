// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   

    // called only once during initial mounting stage/creation stage
    // called after render function
    // called after virtual dom mounted into real dom
    // REAL DOM is READY

    // Use cases: Make API call, Access DOM, setTimer, Subscribe for changes from redux/rxjs
    componentDidMount() {
        console.log("CartItem componentDidMount");
    }

    // called only once during component destruction
    // remove item from cart/list, conditional if, route page
    // cancel pending calls, clear timer, unsubscribe etc
    componentWillUnmount() {
        console.log("CartItem componentWillUnmount")
    }

    remove = (e) => {
        this.props.removeItem(this.props.item.id)
    }

    render() {
        let {item, updateItem, removeItem} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button onClick={ () => updateItem(item.id, item.qty - 1)  }>
                        -1
                </button>    
                <button onClick={this.remove}>
                        X
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;