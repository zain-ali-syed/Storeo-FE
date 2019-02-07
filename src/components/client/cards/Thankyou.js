import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePaymentStatus, showLastOrder } from '../../../actions/example.actions';
import Order from '../orders/Order.js';
import './thankyou.css';

class Thankyou extends Component {

  componentWillUnmount() {
    this.props.togglePaymentStatus("not started");
    this.props.showLastOrder([]);
  }

  render() {
    if (!this.props.lastOrder.data) return <div>loading...</div>

    return (
      <div className="container">
        <h5>Thank you for your order. Your order details can be viewed below</h5><br />
        <Order {...this.props.lastOrder.data.ordered_items[0]} />
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


