import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePaymentStatus, showLastOrder } from '../../../actions/example.actions';

class Thankyou extends Component {
  
  componentWillUnmount () {
    this.props.togglePaymentStatus("not started");
    this.props.showLastOrder([]);
  }
  
  render () {

  if (!this.props.lastOrder.data) return <div>loading...</div>

  const product = this.props.lastOrder.data.ordered_items[0].products.map((prod)=>{
    return <div><p className="black-text">Product: {prod}</p></div>
  })

  const quantity = this.props.lastOrder.data.ordered_items[0].quantities.map((qty)=>{
    return <div><p className="black-text">Quantity: {qty}</p></div>
  })

  const totalPrice = this.props.lastOrder.data.ordered_items[0].prices.map((totalPr)=>{
    return <div><p className="black-text">Total price: {totalPr}</p></div>
  })

  return (
    <div>
      <h5>Thank you for your purchase!</h5>
      <h6>Here are the details of your order:</h6>
      <p className="black-text">order number: {this.props.lastOrder.data.order_num}</p>
      <p className="black-text">order date: {this.props.lastOrder.data.ordered_items[0].created_at}</p>
      {product}
      {quantity}
      {totalPrice}
    </div>
  );
};
}
const mapStateToProps = (state) => ({
  paymentStatus: state.paymentStatus,
  lastOrder: state.lastOrder,
})
const mapDispatchToProps = (dispatch) => ({
  togglePaymentStatus: (status) => dispatch(togglePaymentStatus(status)),
  showLastOrder: (data) => dispatch(showLastOrder(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Thankyou)
