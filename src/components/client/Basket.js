import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

export class Basket extends Component {

  render() {
    return (
      <Layout>
        <div>Basket</div>
        <Link to="/checkout" className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Checkout</Link>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

