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

    console.log('ITEM $$$$$$', this.props);
    const totalPrice = this.props.price * this.props.quantity;
    const image = this.props.images[0] || null;

    return (
      <div className="card basket-item-card">

        <div className="basket-item-header-wrapper">
          <img src={image} alt="" className="circle basket-item-card-image"></img>
          <p className="price-tag-basket-item"><b>Price: </b>{this.props.price} €</p>
        </div>
          <Link to={`/productcard/${this.props.id}`} className="card-title">{this.props.name}</Link>
        
        <span>

          <div className="card-content" id="basket-card">
            <p className="basket-item-description">{this.props.description}</p>

            <p className="price-tag-basket-item"><b>Total:</b> {totalPrice} €</p>
            <div className="col s12 m12" id="change-qty-wrapper">
              <button className="change-qty-button" onClick={() => this.chgQuantity(-1)}><i className="material-icons white-text">expand_more</i></button>
              <div className="qty-number">
                <p className="black-text">{this.props.quantity}</p>
              </div>
              <button className="change-qty-button" onClick={() => this.chgQuantity(1)}><i className="material-icons white-text">expand_less</i></button>
            </div>
          </div>

        </span>

        <br></br>

        <button 
          className="secondary-content btn-flat basket-item-delete-button" 
          onClick={this.delFromBasket}
        >
          <i className="material-icons">delete</i>
        </button>
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