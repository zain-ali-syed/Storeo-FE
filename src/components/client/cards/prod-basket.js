import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteFromBasket, changeQuantity } from '../../../actions/example.actions';
import { Link } from 'react-router-dom';

class ProdBasket extends Component {

  delFromBasket = () => {
    this.props.deleteFromBasket(this.props.id);
  }

  chgQuantity = (qty=1) => {
    if (qty===-1 && this.props.quantity===1) {
    return
  } else {
    this.props.changeQuantity(qty, this.props.id);
  }
}
  
  render () {

   console.log(this.props);

  return (
          <div className="">

                <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt="" className="circle"></img>
                      <span>
                        
                      <Link to={`/productcard/${this.props.id}`} className="card-title">{this.props.name}</Link>

                            <div className="card-content">
                            <span className="card-title">{this.props.price}</span>
                            <p className="black-text">{this.props.description}</p>
                              <p className="black-text">I am good at containing small bits of information.</p>
                                
                                   <div className="col s12 m12">
                                      <a to="" className="btn-flat" onClick={this.chgQuantity}><i className="material-icons blue white-text">expand_more</i></a>
                                      <div className="col">
                                        <p className="black-text">{this.props.quantity}</p>
                                      </div>
                                      <a to="" className="btn-flat"><i className="material-icons blue white-text">expand_less</i></a>
                                      </div>
                                   </div>
                       
                        </span>

                      <br></br> 
                      
                      <a to="" className="secondary-content btn-flat" onClick={this.delFromBasket}><i className="material-icons blue-text">delete</i></a>
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