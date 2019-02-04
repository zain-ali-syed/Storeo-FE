import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearBasket } from '../../../actions/example.actions';
import {postNewOrder} from '../../../helpers/api';


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvc3NAcm9zcy5jb20iLCJpYXQiOjE1NDkyMTA4Mzh9.cFY9LqcDXFQjPqoSQlS3LTP5YnzmUHiMI1sH5w9vN9Q';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    // this.submit = this.submit.bind(this);
  }

  submit = async (ev) => {

    let {token} = await this.props.stripe.createToken({name: "Name"});
    
    // if (token === undefined) return;    // Tomasz added this; remove if BE is completed??? //
    
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
    
    this.setState({complete: true});
    this.submitOrder();
    this.props.clearBasket();
       // to be removed when BE connection ready

    if (response.ok) {
      this.setState({complete: true});
    }
  }

// submitOrder - to be completed!!!

  submitOrder = () => {
      postNewOrder({
        total: this.props.totalPrice,
        special_instructions: this.props.specialInstr,
        ordered_items: [{
          product_id: 1,
          quantity: 5
        }]
      }, {headers: {'Authorization': "Bearer " + token}})
  }

  message = () => {
  return (this.state.complete) ? <div><p className="black-text">Purchase Complete</p></div> : <div><p className="black-text">Would you like to complete the purchase?</p></div>;
  }

  totalPrice = () => {
    return (this.state.complete) ? "0" : this.props.totalPrice;
  }

  render() {
    
    return (
      <div className="checkout">
      <h6 className="black-text">Total: {this.totalPrice()}</h6>
        {this.message()}
        <br></br>
          <CardElement />
        <br></br>
        <button className="waves-effect waves-light btn blue lighten-2" onClick={this.submit}><i className="material-icons left"></i>Pay now</button>
        <Link to="/" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Cancel</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  basket: state.basket,
})

const mapDispatchToProps = (dispatch) => ({
  clearBasket: () => dispatch(clearBasket())
})

export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(CheckoutForm))
