
import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearBasket } from '../../../actions/example.actions';


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  // async submit(ev) {

  //   let {token} = await this.props.stripe.createToken({name: "Name"});

  //   if (token === undefined) return;    // Tomasz added this; remove if BE is completed??? //

  //   let response = await fetch("/charge", {
  //   method: "POST",
  //   headers: {"Content-Type": "text/plain"},
  //   body: token.id
  // });

  
  // if (response.ok) {
  //   this.setState({complete: true});
  // }

  // }

  submit = () => {
    this.props.clearBasket();
    this.setState({complete: true})
  }

  render() {
    if (this.state.complete) return <p className="black-text">Purchase Complete</p>;

    return (
      <div className="checkout">
        <p className="black-text">Would you like to complete the purchase?</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)
