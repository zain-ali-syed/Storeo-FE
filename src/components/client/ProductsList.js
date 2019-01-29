import React, { Component } from 'react'
import ProductSmallCard from '../client/cards/prod-sml-card';
import Layout from './Layout';


export default class ProductsList extends Component {
  render() {
    return (
      <Layout>
        <ProductSmallCard />
      </Layout>
    )
  }
}

