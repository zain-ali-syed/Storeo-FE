import React, { Component } from 'react'
import ProductSmallCard from '../cards/prod-sml-card';

export default class ProductContainer extends Component {
  render() {
    return (
      <div className="row">
      <div className="col s12" id="prodCont">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <ProductSmallCard />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

