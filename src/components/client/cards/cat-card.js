import React, { Component } from 'react'
import '../cards/cat-card.css'

export default class CategoryCard extends Component {
  render() {
    return (
      <a href="#" >
        <div className="row">
          <div className="col s6 m4 l4" id="catCard">
            <div className="card blue-grey darken-1">
                <div className="card-action center">
                <p>Category</p>
              </div>
            </div>
          </div>
        </div>
        </a>
    )
  }
}
