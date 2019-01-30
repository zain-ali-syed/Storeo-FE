import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../cards/cat-card.css'

export default class CategoryCard extends Component {
  render() {
    return (
      <Link to="/productslist" >
        <div className="row">
          <div className="col s6 m3" id="catCard">
           <div class="card">
            <div className="card blue lighten-2">
              <div className="card-action center">
              <p>Category</p>
              </div>
            </div>
            <div class="card-image">
              <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </Link>
    )
  }
}



