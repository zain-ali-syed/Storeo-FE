import React, { Component } from 'react'
import ProductSmallCard from '../client/cards/prod-sml-card';
import Layout from './Layout';


const ProductsList = () => {
  return (
    <Layout>
      <div className="col s6 m6 l2">
      <ProductSmallCard />
      </div>
    </Layout>
  );
};

export default ProductsList;

