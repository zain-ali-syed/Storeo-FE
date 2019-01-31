import React, { Component } from 'react'
import CategoryCard from '../cards/cat-card';
import { getCategories } from '../../../helpers/api'
import '../containers/category.css'

const maxItems = 4;

export default class CategoryContainer extends Component {

  state = {
    categories: []
}

async componentDidMount() {
    const categories = await getCategories() //resolved promise
    this.setState((prevState) => ({ categories: categories.data }))
}

displayCategories = () => {
  return this.state.categories.map((category, index) => {
      if(index < maxItems ) return <div className="col s12 m12 l3 "><CategoryCard key={category.id} {...category}/></div>
  })
}


  render() {
    return (
        <div > 
          <div className="row" >
            {this.displayCategories()}
          </div>
        </div>
    )
  }
}

