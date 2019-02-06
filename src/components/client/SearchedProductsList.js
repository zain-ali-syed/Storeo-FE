import React, { Component } from 'react';

import ProductSmallCard from './cards/prod-sml-card';
import Layout from './Layout';
import { connect } from 'react-redux';
import './SearchedProductsList.css';

class searchedProductsList extends Component {

  state = {
    products: [],
    lastLocation: '',
  }

  async componentDidMount() {
    this.setState({ lastLocation: this.props.location.pathname });
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    if (this.state.lastLocation !== this.props.location.pathname) {
      this.setState({ lastLocation: this.props.location.pathname });
    }
  }

  // fetchProducts = async () => {
  //   const products = await getProductsByCatId(this.props.match.params.id);
  //   this.setState({ products: products.data || [] });
  // }


  displayProducts = () => {
    const products = this.props.searchResult || [];
    console.log('SEARCH PRODUCTS', products);
    return products.map((product) => {
      return (
        <div 
          className="col s6 m6 l3"
          key={product.id}
        >
          <ProductSmallCard {...product} />
        </div>)
    })
  }

  render() {

    const {q, cat} =  this.props.match.params || '';
    console.log('SEARCH PRODUCTS LIST', this.props.match.params)

    if (!this.props.searchResult || this.props.searchResult.length < 1) {
      return (
      <Layout>
        <br/>
        <h5 className="category-name">No Results</h5>
      </Layout>)
    }
    return (
      <Layout>
        <h5 className="category-name">
          Results for: <p className="result-text">{` '${q}' in ${(cat).charAt(0).toUpperCase() + cat.substr(1)}` || ''}</p>
        </h5>
        <div className="row">
          {this.displayProducts()}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.searchResult,
});
  
export default connect(mapStateToProps)(searchedProductsList);