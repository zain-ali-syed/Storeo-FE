import React, { Component } from 'react'
import axios from 'axios';
import Layout from './Layout';
import CategoryContainer from './containers/category';
import ProductContainer from './containers/product';
import { apiConstants } from '../../constants/api.constants';


export default class Home extends Component {


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

