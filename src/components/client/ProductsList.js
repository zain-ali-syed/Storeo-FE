import React, { Component } from 'react';

import { getProductsByCatId } from '../../helpers/api'
import { getProdByCatId } from '../../actions/example.actions';
import ProductSmallCard from '../client/cards/prod-sml-card';
import Layout from './Layout';


export default class ProductsList extends Component {

  state = {
    products: ""
  }

 
  async componentDidMount() {
    const products = await getProductsByCatId(this.props.match.params.id)
    this.setState({products: products.data})
  }

  displayProducts = () => {
    return this.state.products.map((product) => {
        return <div className="col s6 m6 l2" key={product.id}><ProductSmallCard checkCatId={this.props.match.params.id} {...product}/></div>
    })
  }

  render() {
    
    if(!this.state.products) return <div>loading</div>
    return (
      <Layout>
        <div className="row">
        {this.displayProducts()}
        </div>
      </Layout>
    );
  }
}



