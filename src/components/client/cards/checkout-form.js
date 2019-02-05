import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { apiConstants } from '../../../constants/api.constants'
import { clearBasket, togglePaymentStatus } from '../../../actions/example.actions';
import { postNewOrder } from '../../../helpers/api';
import ProcessPayment from './ProcessPayment';


const tokenUros = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvc3NAcm9zcy5jb20iLCJpYXQiOjE1NDkyMTA4Mzh9.cFY9LqcDXFQjPqoSQlS3LTP5YnzmUHiMI1sH5w9vN9Q';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FAY29kZXdvcmtzLm1lIiwiaWF0IjoxNTQ5Mjg5OTUxfQ.c7QjuPr42SZ73C4mr50vqyXpRVIKb1nM5jm84gQ1tCc';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {

    console.log('hello');
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log('goodbye');
    if (token===undefined) return;
    
    let response = await fetch(apiConstants.PAYMENT, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        amount: this.props.totalPrice,
        token: token.id
    })
  });

    if (response.ok) {
      this.props.togglePaymentStatus("completed")
      this.submitOrder();
      this.props.clearBasket();
    }
  }

  orderBasket = () => {
    let basket = [];
    this.props.basket.forEach(el => {
    basket.push({product_id: el.id, quantity: el.quantity})
    })
    return basket;
  }

  submitOrder = () => {
    let basket = this.orderBasket();
      postNewOrder({
        total: this.props.totalPrice,
        special_instructions: this.props.specialInstr,
        ordered_items: basket
      }, {headers: {'Authorization': "Bearer " + token}})
  }

  message = () => {
  return (this.state.complete) ? <div><p className="black-text">Purchase Complete</p></div> : <div><p className="black-text">Would you like to complete the purchase?</p></div>;
  }

  totalPrice = () => {
    return (this.state.complete) ? "0" : this.props.totalPrice;
  }

  // checkoutBtn = () => {
  //   return (this.state.complete) ? 'disabled' : '';
  // }

  render() {
   
    return (
      <div className="checkout">
      <h6 className="black-text">Total: {this.totalPrice()}</h6>
        {this.message()}
        <br></br>
        {/* {this.props.processingPmt === 'processing' ? <ProcessPayment/> : null } */}
          <CardElement />
        <br></br>
        <button className={`waves-effect waves-light btn blue lighten-2`} onClick={this.submit}><i className="material-icons left"></i>Pay now</button>
        <Link to="/" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Cancel</Link>
      </div>
    );

  }

}

const mapStateToProps = (state) => ({
  basket: state.basket,
  paymentStatus: state.paymentStatus,
})

const mapDispatchToProps = (dispatch) => ({
  clearBasket: () => dispatch(clearBasket()),
  togglePaymentStatus: (status) => dispatch(togglePaymentStatus(status)),
})

export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(CheckoutForm))
