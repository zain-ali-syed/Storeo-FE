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
    if (!tags || !Array.isArray(tags)) tags = [];
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

