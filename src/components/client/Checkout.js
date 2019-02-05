import React, { Component } from 'react'
import Layout from './Layout';
import CheckoutForm from '../client/cards/checkout-form';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { connect } from 'react-redux';
import ProdCheckout from './cards/prod-checkout';
import Thankyou from '../client/cards/Thankyou';


class Checkout extends Component {

state = {
  specialInstr: ""
}

payWithStripe = () => {

  return (
  
    <StripeProvider apiKey="pk_test_rfSkDgPYccMxhueycrd0cHXG">
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

const CheckoutPage = () => { 
      return (
       
      
          <div className="container">
     
             <div className="row card col s12">
             
             <div className="col s6">
             <p className="black-text center">Delivery address</p>
             <p className="black-text">Address: {this.props.user.address}</p>
             <p className="black-text">Zip: {this.props.user.zip}</p>
             <p className="black-text">Country: {this.props.user.country}</p>
             <p className="black-text">Phone: {this.props.user.phone}</p>
             <p className="black-text center">4242 4242 4242 4242</p>
             </div>
     
             <div className="col s6">
                 <div className="input-field col s12">
                 <i className="material-icons prefix blue-text" style={{fontSize: '25px'}}>mode_edit</i>
                 <input placeholder="special delivery instructions" id="special_instructions" type="text" style={{fontSize: '14px'}} className="validate" data-length="30"
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
         
      )
     }
    
  
    let checkoutLife;
      switch (this.props.paymentStatus) {
        case 'not started':
        checkoutLife = <CheckoutPage />;
        break;
        case 'completed':
          checkoutLife = <Thankyou />;
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