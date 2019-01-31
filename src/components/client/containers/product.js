import React, { Component } from 'react'
import ProductSmallCard from '../cards/prod-sml-card';
import '../containers/product.css'

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

{/* <div className="row">
<div className="col s12" id="prodCont">
  <div className="card grey lighten-3">
    <div className="card-content">
    <span className="card-title" id="catName">Category name</span>
      <div className="col s6 m6 l2">
        <ProductSmallCard />
      </div>
    </div>
  </div>
</div> */}