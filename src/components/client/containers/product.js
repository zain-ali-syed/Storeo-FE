import React, { Component } from 'react';
import { getProductsByCatId } from '../../../helpers/api';
import ProductSmallCard from '../cards/prod-sml-card';

import '../containers/product.css'


const maxItems = 6;

export default class ProductContainer extends Component {
  state = {}

  async componentDidMount() {
    const products = await getProductsByCatId(this.props.id); // props !!!
    this.setState({products: products.data});
  }

  displayProductsByCategId = () => {
    console.log('PRODUCTS BY CAT ID', this.state.products);
    return this.state.products.map((product, index) => {
      if (index < maxItems ) {
        return (
          <div 
            className="col s6 m6 l2"
            key={product.id}>
            
            <ProductSmallCard 
              checkCatId={this.props.id} 
              catName={this.props.name} {...product}
            />
          </div>
        )
      }
      return true;
    })
  }

  render() {
    if(!this.state.products) return <div>loading</div>
    return (
      <div className="row">
            {this.displayProductsByCategId()}
      </div>
    )
  }
}




