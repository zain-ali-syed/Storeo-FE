import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryCard from '../cards/cat-card';

import './category.css';

const maxItems = 4;

class CategoryContainer extends Component {

// async componentDidMount() {
//     const categories = await getCategories()
//     this.props.getCateg(categories.data)
// }

displayCategories = () => {
  return this.props.categories.map((category, index) => {
      if (index < maxItems ) {
        return (
          <div 
            className="col s12 m6 l3 categoryCard" 
            key={category.id}
          >
            <CategoryCard {...category}/>
          </div>
        )
      }
      return true;
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


const mapStateToProps = (state) => ({
  categories: state.categories,
})

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(
  mapStateToProps
)(CategoryContainer);
