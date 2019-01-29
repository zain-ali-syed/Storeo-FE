import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../cards/cat-card.css'

export default class CategoryCard extends Component {
  render() {
    return (
      <Link to="/productslist" >
        <div className="row">
          <div className="col s6 m3" id="catCard">
            <div className="card blue-grey darken-1">
                <div className="card-action center">
                <p>Category</p>
              </div>
            </div>
          </div>
        </div>
        </Link>
    )
  }
}

