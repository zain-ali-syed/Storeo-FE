import React, { Component } from 'react';
import ProductList from './ProductList.js';
import { Link } from 'react-router-dom';
import Layout from '../Layout';





class Product extends Component {

    render() {
        return (
            <Layout>
                <div style={{ marginBottom: "100px" }}>
                    <span>
                        <i className="medium material-icons blue-grey-text text-darken-3">add_circle</i>
                        <Link to="/admin/products/add">
                            <span className="action_header blue-green darken-1">Add new product</span>
                        </Link>
                        <ProductList />
                    </span>
                </div>
            </Layout>
        );
    }
}



export default Product;