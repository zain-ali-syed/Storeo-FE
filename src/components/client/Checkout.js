import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';

import ProdCheckout from './cards/prod-checkout';

export default class Checkout extends Component {


// ProductSmallCard loop rendering logic goes here

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
                    <li className="collection-item">
                        <ProdCheckout />
                    </li>

                    <li className="collection-item">
                      <ProdCheckout />
                    </li>

                    <li className="collection-item">
                      <ProdCheckout />
                    </li>

            </ul>
             
              </div>

            
              <div className="card col s12 m8 l6">
                <span className="card-title">Total payment</span>

                  <div className="card-content">
                    <span className="card-title"></span>
                        
                        <h6 className="black-text">Total: 331.19 EUR</h6>
                    
                        <Link to="/checkout" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Payment</Link>
                        <Link to="/" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Cancel</Link>
                  </div>
              </div>

          </div>
     
     
         </div>
      </div>


      </Layout>
    )
  }
}
