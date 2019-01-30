import React, { Component } from 'react'
import Layout from '../Layout';

export default class ProductCard extends Component {
  render() {
    return (
      <Layout>
        <div>Product card</div>
        <button className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left">add</i>Add to basket</button>
      </Layout>
    )
  }
}

