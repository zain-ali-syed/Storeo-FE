import React, { Component } from 'react'
import ProductSmallCard from '../cards/prod-sml-card';
import { connect } from 'react-redux';
import '../containers/product.css'

// render logic to be completed

const maxItems = 6;


class ProductContainer extends Component {


displayProducts = () => {

  
}


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

const mapStateToProps = (state) => ({
  categories: state.categories,

})

const mapDispatchToProps = (dispatch) => ({
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);


