import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../cards/prod-sml-card.css'

export default class ProductSmallCard extends Component {
  render() {
    return (
      <Link to="/productcard" >
        <div className="row">
          <div className="col s3 m2" id="prodSmlCard">
            <div className="card blue lighten-2">
                <div className="card-action center">
                <p>Product</p>
              </div>
            </div>
          </div>
        </div>
        </Link>
    )
  }
}

