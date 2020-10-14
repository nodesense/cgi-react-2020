// app/pages/ProductList.js
import React from 'react';
import axios from 'axios';

import * as productsApi from '../services/products';

console.log("REACT_APP_API_ENDPOINT", process.env.REACT_APP_API_ENDPOINT)

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.source = axios.CancelToken.source();

        productsApi.getProducts({ cancelToken: this.source.token })
                   .then ( products => {
                       console.log("products received ", products)
                       this.setState({products})
                   })
                   .catch ( error => {
                       console.log("Error ", error)
                   })
    }

    componentWillUnmount() {
        // cancel the pending calls
        console.log("ProductList will unmount")

        this.source.cancel("User leaving page..")
    }

    render() {
        console.log("ProductList render");
        return (
            <div>
                <h2>Products</h2>
                <ol>
                    {
                        this.state.products.map (product => <li key={product.id}>{product.name}</li>)
                    }
                </ol>
            </div>
        )
    }
}

export default ProductList;