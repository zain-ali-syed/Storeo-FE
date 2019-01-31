import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductsByCatId } from '../../helpers/api'
import { getProdByCatId } from '../../actions/example.actions';
import ProductSmallCard from '../client/cards/prod-sml-card';
import Layout from './Layout';


class ProductsList extends Component {

 
  async componentDidMount() {
    const products = await getProductsByCatId(this.props.match.params.id)
    this.props.getProdByCatId(products.data)
  }

  displayProducts = () => {
    return this.props.products.map((product) => {
        return <div className="col s6 m6 l2" key={product.id}><ProductSmallCard checkCatId={this.props.match.params.id} {...product}/></div>
    })
  }

  render() {
    return (
      <Layout>
        <div className="row">
        {this.displayProducts()}
        </div>
      </Layout>
    );
  }
}


const mapStateToProps = (state) => ({
  products: state.products,

})

const mapDispatchToProps = (dispatch) => ({
  getProdByCatId: (data) => dispatch(getProdByCatId(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
