import React, { Component } from 'react'
import axios from 'axios';
import Layout from './Layout';
import CategoryContainer from './containers/category';
import ProductContainer from './containers/product';
import { apiConstants } from '../../constants/api.constants';


export default class Home extends Component {

componentDidMount () {
    axios.get(apiConstants.PRODUCTS_URL)
    .then(json => console.log(json))
}

    render() {
    return (
        <Layout>
            <CategoryContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
        </Layout>

        );
        };
    }

