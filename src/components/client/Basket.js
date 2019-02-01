import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ProdBasket from './cards/prod-basket';

export class Basket extends Component {


showBasket = () => {
    if (!this.props.basket) {
    return <div><p className="black-text">BASKET EMPTY...</p></div>
    } else {
     return this.props.basket.map((item, index) => {
            return <li className="collection-item avatar"><ProdBasket/></li>
        })
    }
}


  render() {
    
    return (
      <Layout>
      
      <div className="container">
          <div className="row">

          <div className="col s12">

              <div className="col s12 m8 l6">

              <ul className="collection">
                {this.showBasket()}
             </ul>
             
              </div>

            
              <div className="card col s12 m8 l6">
                <span className="card-title">Your basket</span>

                  <div className="card-content">
                    <span className="card-title"></span>
                        <p className="black-text">List of basket items</p>
                        <h6 className="black-text">Total: 331.19 EUR</h6>
                    
                        <Link to="/checkout" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left">check</i>Checkout</Link>
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

const mapStateToProps = (state) => ({
  basket: state.basket
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

