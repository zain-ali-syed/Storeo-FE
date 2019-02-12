import React, {Component} from 'react';

export default class ProdCheckout extends Component {

  render () {
  
  const totalPrice = this.props.price*this.props.quantity;

  return (
    <div className="">
          
        <span className="card-title">{this.props.name}</span>

              <div className="card-content">
              <span className="card-title">Price per item: {this.props.price}</span>
              <br></br>
              <span className="card-title">Nb of items: {this.props.quantity}</span>
              <br></br>
              <span className="card-title">Total cost: {totalPrice}</span>
              <p className="black-text">{this.props.description}</p>
              </div>

    </div>
  );
  }
};

