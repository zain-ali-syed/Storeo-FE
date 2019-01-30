import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';

export default class Checkout extends Component {
  render() {
    return (
      <Layout>
        <div>Checkout</div>
        <button className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Buy</button>
        <Link to="/" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Cancel</Link>
      </Layout>
    )
  }
}
