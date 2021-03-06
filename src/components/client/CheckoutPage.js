import React, { Component } from 'react'
import Layout from './LayoutPage';
import CheckoutForm from './cards/checkout-form';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { connect } from 'react-redux';
import ProdCheckout from './cards/product-checkout';
import ThankYouPage from './ThankYouPage';
import './CheckoutPage.css';

class Checkout extends Component {

  state = {
    specialInstr: ""
  }

  payWithStripe = () => {

    return (

      <StripeProvider apiKey="pk_test_rfSkDgPYccMxhueycrd0cHXG">
        <div className="example">
          <Elements>
            <CheckoutForm totalPrice={this.props.match.params.totalPr} specialInstr={this.state.specialInstr} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }

  showBasket = () => {
    if (this.props.basket.length === 0) {
      return <div className="basketcnt"><i className="material-icons grey-text large">shopping_basket</i></div>
    } else {

      return this.props.basket.map((item, index) => {
        return <li className="collection-item avatar" key={index}><ProdCheckout {...item} /></li>
      })
    }
  }

  handleInput = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
    this.setState({ specialInstr: event.target.value })
    }
    
  }

  render() {

    const CheckoutPage = () => {
      return (


        <div className="container">
          <div className="row card col s12">
            <div className="col s6">
              <p className="card-title">Delivery address</p>
              <p className="black-text">Address: {this.props.user.address}</p>
              <p className="black-text">Zip: {this.props.user.zip}</p>
              <p className="black-text">Country: {this.props.user.country}</p>
              <p className="black-text">Phone: {this.props.user.phone}</p>
            </div>

            <div className="col s6">
             
              <div className="input-field col s12">
             
                <i className="material-icons prefix blue-text" style={{ fontSize: '25px' }}>mode_edit</i>
             
                <input placeholder="special delivery instructions" id="special_instructions" type="text" style={{ fontSize: '14px' }}  data-length="30" onKeyUp={this.handleInput} ></input>
                 
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col s12">
              <div className="col s12 m8 l6">
                {/* <ul className="collection">
                  {this.showBasket()}
                </ul> */}
              </div>
              <div className="card col s12 m8 l6" id="payment-form">
                <span className="card-title">Payment summary</span>
                <div className="card-content">
                  <span className="card-title"></span>
                  {this.payWithStripe()}
                </div>
              </div>
            </div>
          </div>
        </div>

      )
    }


    let checkoutLife;
    switch (this.props.paymentStatus) {
      case 'not started':
        checkoutLife = <CheckoutPage />;
        break;
      case 'completed':
        checkoutLife = <ThankYouPage/>;
        break;
      default:
        checkoutLife = <CheckoutPage />;
    }

    return (
      <Layout>
        {checkoutLife}
      </Layout>
    )
  }
}


const mapStateToProps = (state) => ({
  basket: state.basket,
  categories: state.categories,
  paymentStatus: state.paymentStatus,
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)