import React, { Component } from 'react'
import { connect } from 'react-redux';

import CategoryCard from '../cards/cat-card';
import { getCategories } from '../../../helpers/api'
import { getCateg } from '../../../actions/example.actions';


const maxItems = 4;

class CategoryContainer extends Component {

async componentDidMount() {
    const categories = await getCategories()
    this.props.getCateg(categories.data)
}

displayCategories = () => {
  return this.props.categories.map((category, index) => {
      if(index < maxItems ) return <div className="col s12 m12 l3" key={category.id}><CategoryCard {...category}/></div>
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

const mapDispatchToProps = (dispatch) => ({
  getCateg: (data) => dispatch(getCateg(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
