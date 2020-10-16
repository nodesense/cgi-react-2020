// app/pages/ProductEdit.js
import React from 'react';

import {Formik, Form, Field} from 'formik';
import { getJson, postJson, putJson, deleteJson } from '../services/core';
import config from '../config';

// Yup, we define schema for our model, set validators/rules, custom rules
import * as Yup from 'yup';

// Good pratice, define the schema in separate folders
// validators/product-schema.js
const ProductSchema = Yup.object().shape({
                            name: Yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required'),
                            

                            year: Yup.number()
                                   .positive("years cannot be in negative")
                                  .min(2010, "2010 onwards ")
                                  .max(2021, "you cannot add yet to release product"),

                            price: Yup.number()
                                       .positive("price should be positive")
                                       .test("pricecheck", 
                                             "Price should not be >= 10000",
                                             value =>  value < 10000
                                             )

                        },  
                      );

class ProductEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: {} }
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        console.log("Id is ", id)
        if (id) { // edit/ pull data from db, edit and save the data
            try {
                const response = await getJson(`${config.API_ENDPOINT}/api/products/${id}`)
                this.setState({productClone: JSON.parse(JSON.stringify(response.data)) })
                this.setState({product: response.data })
            } catch(error) {
                this.setState({product: {}})
            }
        } else {
            // create a new product
            this.setState({productClone: JSON.parse(JSON.stringify({})) })
               
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

    reset = () => {
        this.setState({
            product: this.state.productClone
        })
    }

    render() { 
        const {id} = this.props.match.params;
        console.log("ProductEdit render ", this.props)
        console.log("product data in render ", this.state.product)

        return ( <div>
            <h2>Product Edit {id} </h2>

            
                    <Formik initialValues= { this.state.product    }
                            onSubmit={this.handleOnSubmit}
                            onReset={this.reset}
                            validationSchema={ProductSchema}
                            enableReinitialize 
                    >
                        {({ errors, touched }) => (
                            <>
                            <pre> {JSON.stringify(errors, null, 4)} </pre>
                            <pre> {JSON.stringify(touched, null, 4)} </pre>
                            <Form>

                            <Field name="brandId" as="select">
                                    <option value={1}>HTC</option>
                                    <option value={2}>Google</option>
                                    <option value={3}>LG</option>
                            </Field>
                            
                            
                                <Field name="name" type="text" />
                                {errors.name &&  <p>Errror {errors.name}</p> }
                                <Field name="year" type="number" />
                                <Field name="price" type="number" />

                                <button type="submit">Save</button>
                                <button type="reset">Reset</button>
                            </Form>
                            </>
                        )}
                    </Formik>
            

            <button onClick={this.delete}> Delete </button>

        </div> );
    }
}
 
export default ProductEdit;