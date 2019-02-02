import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import CheckoutForm from '../client/cards/checkout-form';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { connect } from 'react-redux'

import ProdCheckout from './cards/prod-checkout';


class Checkout extends Component {

// ProductSmallCard loop rendering logic goes here

payWithStripe = () => {
  return (
  
    <StripeProvider apiKey="pk_test_ujoxDJZ1TJvSLNby07kJdPad">
        <div className="example">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );

    

// return (
// <form action="your-server-side-code" method="POST">
//   <script
//     src="https://checkout.stripe.com/checkout.js" class="stripe-button"
//     data-key="pk_test_ujoxDJZ1TJvSLNby07kJdPad"
//     data-amount="999"
//     data-name="Demo Site"
//     data-description="Example charge"
//     data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
//     data-locale="auto"
//     data-currency="eur">
//   </script>
// </form>
// )

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



  render() {
    return (
      <Layout>
       
       <div className="container">

          <div className="row card col s12">
          
          <div className="col s4">
          <p className="black-text">Delivery address</p>
          </div>

          <div className="col s4">
          <p className="black-text">Invoice address</p>
          </div>

          <div className="col s4">
          <p className="black-text">Payment method</p>
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
                        
                        <h6 className="black-text">Total: 331.19 EUR</h6>
                    

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