// app/pages/ProductEdit.js
import React from 'react';

import {Formik, Form, Field} from 'formik';
import { getJson, postJson, putJson, deleteJson } from '../services/core';
import config from '../config';

class ProductEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: null }
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        console.log("Id is ", id)
        if (id) { // edit/ pull data from db, edit and save the data
            try {
                const response = await getJson(`${config.API_ENDPOINT}/api/products/${id}`)
                this.setState({product: response.data })
            } catch(error) {
                this.setState({product: {}})
            }
        } else {
            // create a new product
            this.setState({product: {}})
        }
    }

    handleOnSubmit = async (values) => {
        console.log("Values from formik", values)
        const product = values;
        if (product.id) {
            // PUT method, update the data in the backend
            try {
                const result = await putJson(`${config.API_ENDPOINT}/api/products/${product.id}`, product)
                this.props.history.push("/products")
            } catch(error) {

            }
        } else {
            // create a new product in the backend
            try {
            const result = await postJson(`${config.API_ENDPOINT}/api/products`, product)
            this.props.history.push("/products")
            }catch(error) {}
        } 
    }

    delete = async () => {
        try {
            const result = await deleteJson(`${config.API_ENDPOINT}/api/products/${this.state.product.id}`)
            this.props.history.push("/products")
        }catch(error) {}
    }

    render() { 
        const {id} = this.props.match.params;
        console.log("ProductEdit render ", this.props)
        console.log("product data in render ", this.state.product)

        return ( <div>
            <h2>Product Edit {id} </h2>

            {this.state.product && 
                    <Formik initialValues= { this.state.product    }
                            onSubmit={this.handleOnSubmit}
                            
                    >
                        <Form>
                            <Field name="name" type="text" />
                            <Field name="year" type="number" />
                            <Field name="price" type="number" />

                            <button type="submit">Save</button>
                        </Form>
                    </Formik>
            }

            <button onClick={this.delete}> Delete </button>

        </div> );
    }
}
 
export default ProductEdit;