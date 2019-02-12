import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePaymentStatus, showLastOrder } from './../../actions/actions';
import Order from './cards/previous-orders-entry.js';
import './ThankYouPage.css';

class ThankYouPage extends Component {

  componentWillUnmount() {
    this.props.togglePaymentStatus("not started");
    this.props.showLastOrder([]);
  }

  render() {
    if (!this.props.lastOrder.data) return <div>loading...</div>
    const {order_num} = this.props.lastOrder.data; 

    return (
      <div className="container">
        <h5>Thank you for your order. Your order details can be viewed below</h5><br />
        <Order order_num={order_num} {...this.props.lastOrder.data.ordered_items[0]} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage)


