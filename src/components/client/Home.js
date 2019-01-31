import React, { Component } from 'react'
import Layout from './Layout';
import CategoryContainer from './containers/category';
import ProductContainer from './containers/product';
import CategoryCard from '../client/cards/cat-card';


export default class Home extends Component {


    render() {
    return (
        <Layout>
            <CategoryContainer />
            <p className="black-text">Category Name</p>
            <ProductContainer />
            <p className="black-text">Category Name</p>
            <ProductContainer />
            <p className="black-text">Category Name</p>
            <ProductContainer />
            <p className="black-text">Category Name</p>
            <ProductContainer />
        </Layout>

        );
        };
    }


