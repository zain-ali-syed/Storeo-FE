import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ProdBasket from './cards/prod-basket';
import './Basket.css';

class Basket extends Component {

  componentDidMount() {
    this.totalPrice();
  }

  // componentDidUpdate (prevProps) {
  //   if (this.props.basket.length !== prevProps.basket.length)
  //   this.totalPrice();
  // }

  showBasket = () => {
    if (this.props.basket.length === 0) {
      return <div className="basketcnt"><i class="material-icons grey-text large">shopping_basket</i></div>
    } else {
      return this.props.basket.map((item, index) => {
        return <li className="collection-item avatar" key={index}><ProdBasket {...item} /></li>
      })
    }
  }

  checkoutZero = () => {
    return (this.totalPrice() === 0) ? 'disabled' : '';
  }

  totalPrice = () => {
    let subTotalPr = 0;
    this.props.basket.forEach(item => {
      subTotalPr += item.price * item.quantity;
    });
    return subTotalPr;
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

              <div className="card col s12 m8 l6" id="basket">
                <span className="card-title">Your basket</span>

                <div className="card-content">
                  <div className="basket-summary">
                    <div>
                      <p className="black-text">Items: </p>
                      <p className="black-text">Shipping & handling: </p>
                      <p className="black-text">Total before tax: </p>
                      <p className="black-text">Tax to be collected: </p>
                    </div>
                    <div id="summary-amounts">
                      <p className="black-text">€ {this.totalPrice()}</p>
                      <p className="black-text" id="shipping-handling">€ 0.00</p>
                      <p className="black-text">€ 0.00</p>
                      <p className="black-text">€ {this.totalPrice()}</p>
                    </div>
                  </div>

                  <div className="basket-total-wrapper">
                    <div>
                      <h5 className="basket-total">Order total:</h5>
                    </div>
                    <div>
                      <h5 className="basket-total">€ {this.totalPrice()}</h5>
                    </div>
                  </div>

                  <Link to={`/checkout/${this.totalPrice()}`} className={`waves-effect waves-light btn ${this.checkoutZero()} amber`} id="checkout-btn"><i className="material-icons left"></i>Proceed to Checkout</Link>
                  {/* <Link to="/" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Cancel</Link> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

