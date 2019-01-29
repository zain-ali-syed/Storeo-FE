import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from './Layout';
import { connect } from 'react-redux'

export class Basket extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Layout>
        Basket
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
