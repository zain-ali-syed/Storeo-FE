import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePaymentStatus } from '../../../actions/example.actions';

class Thankyou extends Component {

  componentWillUnmount () {
    this.props.togglePaymentStatus("not started");
  }

  render () {

  return (
    <div>
      <h5>Thank you for your purchase!</h5>
      <h6>Here are the details of your order:</h6>
    </div>
  );
};
}

const mapStateToProps = (state) => ({
  paymentStatus: state.paymentStatus,
})

const mapDispatchToProps = (dispatch) => ({
  togglePaymentStatus: (status) => dispatch(togglePaymentStatus(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Thankyou)

