import React, { Component } from 'react'
import CategoryCard from '../cards/cat-card';
import '../containers/category.css'

export default class CategoryContainer extends Component {
  render() {
    return (
      <div className="row">
      <div className="col s12" id="catCont">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

