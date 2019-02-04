import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ProdBasket from './cards/prod-basket';

class Basket extends Component {

componentDidMount () {
  this.totalPrice();
}

// componentDidUpdate (prevProps) {
//   if (this.props.basket.length !== prevProps.basket.length)
//   this.totalPrice();
// }

showBasket = () => {
    if (this.props.basket.length===0) {
    return <div><p className="black-text">BASKET EMPTY...</p></div>
    } else {
     return this.props.basket.map((item, index) => {
            return <li className="collection-item avatar" key={index}><ProdBasket {...item}/></li>
        })
    }
}

checkoutZero = () => {
  return (this.totalPrice() === 0) ? 'disabled' : '';
}

totalPrice = () => {
  let subTotalPr = 0;
  this.props.basket.forEach(item => {
    subTotalPr+=item.price*item.quantity;
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
            
              <div className="card col s12 m8 l6">
                <span className="card-title">Your basket</span>

                  <div className="card-content">
                    <span className="card-title"></span>
                        <p className="black-text">List of basket items</p>
                        <h6 className="black-text">Total: {this.totalPrice()}</h6>
                    
                        <Link to={`/checkout/${this.totalPrice()}`} className={`waves-effect waves-light btn ${this.checkoutZero()} blue lighten-2`}><i className="material-icons left"></i>Checkout</Link>
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
  basket: state.basket,
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

