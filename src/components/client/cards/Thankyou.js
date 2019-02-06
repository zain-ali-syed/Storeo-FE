import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePaymentStatus, showLastOrder } from '../../../actions/example.actions';
import './thankyou.css';

class Thankyou extends Component {
  
  componentWillUnmount () {
    this.props.togglePaymentStatus("not started");
    this.props.showLastOrder([]);
  }
  
  render () {

  if (!this.props.lastOrder.data) return <div>loading...</div>
 
  const product = this.props.lastOrder.data.ordered_items[0].products.map((prod)=>{
    return <p className="product">{prod}</p>
  })

  const quantity = this.props.lastOrder.data.ordered_items[0].quantities.map((qty)=>{
    return <p className="product center">{qty}</p>
  })
  
  return (
   
      <div className="container">
       
                <span><p className="title">Thank you for shopping at Storeo!</p></span>
                        
                      <div class="card grey lighten-2">
                          <div class="card-content"> 
                          <div className="orderHeader">
                          <p className="order">order number: {this.props.lastOrder.data.order_num}</p>
                          <p className="order">order date: {this.props.lastOrder.data.ordered_items[0].created_at.split("T")[0]}</p> 
                          </div>


                            <div className="row orderDets">
                            <div className="col s12 ">
                            <div className="col s3 table"><p>Product</p></div>
                            <div className="col s2 table"><p className="center">Quantity</p></div>
                              </div>

                              <div className="col s12">
                              <div className="col s3">{product}</div>
                              <div className="col s2">{quantity}</div>
                              </div>
                              </div>
                          
                        </div>
                    </div>
                  
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


