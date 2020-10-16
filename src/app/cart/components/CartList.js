// CartList.js

import React, {PureComponent, Component} from "react";
import PropTypes from "prop-types";

import {FixedSizeList as List} from 'react-window';

import CartItem from "./CartItem";


const ClassicRows = ( {items, updateItem, removeItem} ) => {

    return (
        <>
        {
        items.map(item => <CartItem key={item.id} item={item}
                            updateItem={updateItem}
                            removeItem={removeItem} />)
        }
        </>
    )
    
}

const RenderCartItem = ({index, style, data, removeItem, updateItem}) => {
    console.log("index ", index)
    const item = data[index];
    console.log("Rendering ", item)
    return (<CartItem key={item.id} item={item}
        updateItem={updateItem}
        removeItem={removeItem} />)
}

const VirtualizedRows = ( {items, updateItem, removeItem} ) => {

    return (
        <List itemData={items} height={600} itemSize={45} itemCount={items.length} width={900} >
            {RenderCartItem}
        </List>
    )
    
}

 //TODO: PureComponent
// PureComponent is a component, derived from Component class
// PureComponent already implements shouldComponentUpdate methods
// it shallow compare ALL props with nextprops, compare ALL state with next state, return true or false
// if any difference in state or props, then it allows render to be called
 class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items, updateItem, removeItem} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {/* render all the items, not efficient */}

                    <ClassicRows items={items} updateItem={updateItem} removeItem={removeItem} />  
                    {/* <VirtualizedRows items={items} updateItem={updateItem} removeItem={removeItem} /> */}
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;