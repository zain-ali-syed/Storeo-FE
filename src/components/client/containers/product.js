import React, { Component } from 'react'
import ProductSmallCard from '../cards/prod-sml-card';
import '../containers/product.css'

// render logic to be completed

export default class ProductContainer extends Component {
  render() {
    return (
      <div className="row">
            <div className="col s6 m6 l2">
              <ProductSmallCard />
            </div>
          </div>

    
    )
  }
}



