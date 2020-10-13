// pages/Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";

import {Link} from 'react-router-dom';

class Cart extends Component {
    static defaultProps = {
    }

    static propTypes = {
    }

    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        this.setState( {
            items: [...this.state.items, item]
        })
    }
    
    // Child to parent: By means of Callback
    // Cart shall pass removeItem, updateItem functions as props to CartList
    // CartList shall pass removeItem, updateItem functions as props to CartItem
    // When -1/+1, X on events in CartItem, cartItem shall call removeItem/updateItem directly with arg
    removeItem = (id) => {
        console.log("removeItem ", id, "called by CartItem")
        
        // filter not needed the item
        this.setState((prevState, props) => {
            return {
                items: prevState.items.filter ( item => item.id !== id)
            }
        })
    }

    updateItem = (id, qty) => {
        console.log("updateItem", id, qty, "called by cartitem")
        
        this.setState( (prevState, props) => {
            return {
                // clone the array of items using map
                // clone the object/item of qty
                // if item no need to change, return as is
                // if change needed, clone it and update the qty
                items: prevState.items.map ( item => item.id !== id? item: {...item, qty: qty}  )
            }
        })
    }

    empty = () => {
        this.setState({
            items: []
        }) 
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    // make it friendly with setState functional pattern
    static recalculate(prevState, props) {
        let count = 0, 
            amount = 0;

        for (let item of prevState.items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        return {
            //es6
            amount, // amount: amount
            count, // count: count
        }
    }

    // called before render
    static getDerivedStateFromProps(props, state) {
        console.log("Cart getDerivedStateFromProps")
        // memoize, to avoid expensive computations again and again
        return  Cart.recalculate(state, props)
    }
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>

            <Link to="/checkout" className="button">
                Checkout
            </Link>
            
            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;