// app/pages/ProductEdit.js
import React from 'react';

class ProductEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: {} }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        console.log("Id is ", id)
    }

    render() { 
        const {id} = this.props.match.params;
        console.log("ProductEdit render ", this.props)
        return ( <div>
            <h2>Product Edit {id} </h2>
        </div> );
    }
}
 
export default ProductEdit;