import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import CheckoutForm from '../client/cards/checkout-form';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { connect } from 'react-redux'

import ProdCheckout from './cards/prod-checkout';


class Checkout extends Component {

state = {}

payWithStripe = () => {

  return (
  
    <StripeProvider apiKey="pk_test_ujoxDJZ1TJvSLNby07kJdPad">
        <div className="example">
          <Elements>
            <CheckoutForm totalPrice={this.props.match.params.totalPr} specialInstr={this.state.specialInstr}/>
          </Elements>
        </div>
      </StripeProvider>
    );
}

showBasket = () => {
  if (this.props.basket.length===0) {
  return <div><p className="black-text">BASKET EMPTY...</p></div>
  } else {

   return this.props.basket.map((item, index) => {
          return <li className="collection-item avatar" key={index}><ProdCheckout {...item}/></li>
      })
  }
}

handleInput = (event) => {
this.setState({specialInstr: event.target.value})
}

  render() {

    return (
      <Layout>
       
       <div className="container">

          <div className="row card col s12">
          
          <div className="col s6">
          <p className="black-text center">Delivery address</p>
          </div>

          <div className="col s6">
              <div className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <input placeholder="special delivery instructions" id="special_instructions" type="text" className="validate" data-length="30"
              value={this.state.specialInstr} onChange={this.handleInput}></input>
              {/* <label>max. 30 characters</label> */}
              </div>
          </div>
    
          </div>
          <div className="row">
          <div className="col s12">
              <div className="col s12 m8 l6">
                <ul className="collection">
                  {this.showBasket()}
                </ul>
              </div>
              <div className="card col s12 m8 l6">
                <span className="card-title">Payment summary</span>
                  <div className="card-content">
                    <span className="card-title"></span>
                       {this.payWithStripe()}
                  </div>
              </div>
          </div>
         </div>
      </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  basket: state.basket,
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)