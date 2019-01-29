import React, { Component } from 'react'
import '../cards/prod-sml-card.css'

export default class ProductSmallCard extends Component {
  render() {
    return (
      <a href="#" >
        <div className="row">
          <div className="col s3 m2" id="prodSmlCard">
            <div className="card blue-grey darken-1">
                <div className="card-action center">
                <p>Product</p>
              </div>
            </div>
          </div>
        </div>
        </a>
    )
  }
}

