import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFromBasket, changeQuantity } from '../../../actions/example.actions';
import { Link } from 'react-router-dom';
import './prod-basket.css';

class ProdBasket extends Component {

  delFromBasket = () => {
    this.props.deleteFromBasket(this.props.id);
  }

  chgQuantity = (qty) => {
    if (qty === -1 && this.props.quantity === 1) {
      return
    } else {
      this.props.changeQuantity(qty, this.props.id);
    }
  }

  render() {

    const totalPrice = this.props.price * this.props.quantity;

    return (
      <div className="">

        <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt="" className="circle"></img>
        <span>

          <Link to={`/productcard/${this.props.id}`} className="card-title">{this.props.name}</Link>

          <div className="card-content" id="basket-card">
            <span className="card-title">Price per item: {this.props.price}</span>
            <p className="black-text">Total product cost: {totalPrice}</p>
            <p className="black-text">{this.props.description}</p>

            <div className="col s12 m12" id="change-qty-wrapper">
              <div className="change-qty-button" onClick={() => this.chgQuantity(-1)}><i className="material-icons blue white-text">expand_more</i></div>
              <div className="qty-number">
                <p className="black-text">{this.props.quantity}</p>
              </div>
              <div className="change-qty-button" onClick={() => this.chgQuantity(1)}><i className="material-icons blue white-text">expand_less</i></div>
            </div>
          </div>

        </span>

        <br></br>

        <button to="" className="secondary-content btn-flat" onClick={this.delFromBasket}><i className="material-icons blue-text">delete</i></button>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  basket: state.basket,
})

const mapDispatchToProps = (dispatch) => ({
  deleteFromBasket: (product) => dispatch(deleteFromBasket(product)),
  changeQuantity: (qty, id) => dispatch(changeQuantity(qty, id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProdBasket);