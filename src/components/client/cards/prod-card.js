import React, {Component} from 'react'
import Layout from '../Layout';
import { connect } from 'react-redux'
import { getProducts } from '../../../helpers/api';
import { addToBasket } from '../../../actions/example.actions';

class ProductCard extends Component {

  state = {
    product:{}
  };
  
  async componentDidMount() {
    const product = await getProducts(this.props.match.params.id);
    this.setState({product: {...product.data[0], quantity:0}});
  }

  addProdToBasket = () => {
    this.props.addToBasket(this.state.product, 1)
  }

  render() {

  if(!this.state.product) return <div>loading</div>

  return (

    <Layout>
  <div className="container">
  <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt="" className="responsive-img"></img>
          </div>
        </div>

        
          <div className="col s3">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://res.cloudinary.com/ohcash/image/upload/v1547302800/photo-1534972195531-d756b9bfa9f2.jpg" alt=""></img>
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                {/* <img className="activator" src={this.state.product.images[0]} alt=""></img> */}
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                {/* <img className="activator" src={this.state.product.images[1]} alt=""></img> */}
              </div>
            </div>
          </div>
            
        </div>
      

      <div className="card col s12 m6">
        <span className="card-title">{this.state.product.name}</span>
          <div className="card-content">
          <span className="card-title">{this.state.product.selling_price}</span>
          <p className="black-text">List price: {this.state.product.price} </p>
          <p className="black-text">Discount: {this.state.product.discount} </p>
          <br></br>
            <p className="black-text">{this.state.product.description} </p>
            <br></br>
          
            <br></br>
             <p className="black-text"> I am a very simple card. I am good at containing small bits of information.</p>
            <br></br>
               
                {/* <div className="col s12 m12">
                
                <button className="col s2 waves-effect waves-light btn-small blue lighten-2"><i className="material-icons">expand_more</i></button>

                <div className="col s1">
                  <p className="black-text">{qty}</p>
                </div>

                <button className="col s2 waves-effect waves-light btn-small blue lighten-2"><i className="material-icons">expand_less</i></button>
                </div> */}

            <div className="card-action center">
            <button className="waves-effect waves-light btn blue lighten-2" onClick={this.addProdToBasket}><i className="material-icons left">add</i>Add to basket</button>
            </div>
          </div>
          </div>
      </div>
  </div>
      
  </Layout>
  );
};
}

const mapStateToProps = (state) => ({
  basket: state.basket
})

const mapDispatchToProps = (dispatch) => ({
  addToBasket: (id, qty) => dispatch(addToBasket(id, qty))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)

