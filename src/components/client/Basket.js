import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

export class Basket extends Component {

  render() {
    return (
      <Layout>
        <div>Basket</div>
        <Link to="/checkout" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left">check</i>Checkout</Link>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

