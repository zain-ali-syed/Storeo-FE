import React, { Component } from 'react'
import Layout from '../Layout';
import { connect } from 'react-redux'
import { getProducts } from '../../../helpers/api';
import { addToBasket } from '../../../actions/example.actions';
import './prod-card.css';
import {v1} from 'uuid'
import { isArray } from 'util';

class ProductCard extends Component {

  state = {
    product: {},
    images: [],
    currentImage: undefined,
  };

  async componentDidMount() {
    const product = await getProducts(this.props.match.params.id);
    this.setState({ 
      product: { ...product.data[0], quantity: 0 },
      images: product.data[0].images,
      currentImage: product.data[0].images[0],
    });
  }

  addProdToBasket = () => {
    this.props.addToBasket(this.state.product, 1)
  }

  renderTags = (tags) => {
    if (!tags || !Array.isArray(tags) ) tags = [];
    return (
      <div className='tag-scroll'>
        {tags.map(tag => (<span className="tag" key={v1()}>{tag}</span>) )}
      </div>
    )
  }
  
  renderProductProperties = (product) => {
    let {property_names, property_values} = product;
    if (!property_names || !property_values) {
      property_names = [];
      property_values = [];
    }
    return (
      property_names.map( (propertyName, i) => {
        return (
        <p className="product-property-name italic" key={v1()}>
        {propertyName}: <span className="text" >{property_values[i]}</span>
        </p>)
      }) 
    )
  }

  changeCurrentImage = async (e) => {
    await this.setState({ currentImage: e.target.src});
  }


  render() {
    if (!this.state.product) return (<div>loading</div>);
    const {product, images, currentImage} = this.state;
    return (

      <Layout>

        <div className="main-container">

          <div className="main-images-wrapper">
            <img src={currentImage || null} alt="" className="main-image" />
            <div className="mini-images-wrapper">
              {(images && images.length > 0)
                ? images.map(image => (
                  <div onClick={this.changeCurrentImage} key={v1()}>
                    <img src={image} className="mini-image" />
                  </div>
                    ))
                : <p>No images</p>
              }
            </div>
          </div>

          <div className="product-details-wrapper">
            {(product)
              ? (
                <div>
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-property-name">
                    Price: <span className="text">{product.price}</span>
                  </p>
                  <p className="product-property-name">
                    Discount: <span className="text">{product.discount}</span>
                  </p>
                  <br/>
                  <p className="product-property-name"> Description: </p>
                  <p className="product-description text">{product.description}</p>
                  <p className="product-property-name"> Product Properties </p>
                  {this.renderProductProperties(product)}
                  <p className="product-property-name"> Tags </p>
                  {this.renderTags(product.tags)}

                  <div className="card-action center">
                    <button className="waves-effect waves-light btn blue lighten-2" onClick={this.addProdToBasket}><i className="material-icons left">add</i>Add to basket</button>
                  </div>

                </div>
              )
              : <h4>Loading</h4>
            }
            
          </div>



        </div>

        <div className="main-container">

          <div className="row">

            <div className="col s12 m6">

              <div className="card">
                <div className="card-image">
                  <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt="" className="responsive-img"></img>
                </div>
              </div>

              <div className="card">
                <div className="card-image-display">

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
          </div>  {/* End of div.row */}

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

