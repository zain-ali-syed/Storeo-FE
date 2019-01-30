import React, { Component } from 'react';
import ProductList from './ProductList.js';
import Layout from '../Layout';


class Product extends Component {

    render() {
        return (
            <Layout>
                <div>
                    <span>
                        <i className="medium material-icons blue-grey-text text-darken-3">add_circle</i>
                        <span className="action_header">Add new product</span>
                        <ProductList />
                    </span>
                </div>
            </Layout>
        );
    }
}



export default Product;