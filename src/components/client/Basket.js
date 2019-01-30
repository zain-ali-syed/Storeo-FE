import React, { Component } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

export class Basket extends Component {

  render() {
    return (
      <Layout>

      BASKET
      
      <div className="container">

            <div className="row">

            <div className="card col s12 m6">
              <span className="card-title">Product name</span>

              <div className="col s4 card-image">
                  <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt="" className="responsive-img"></img>
                </div>

                <div className="card-content">
                <span className="card-title">114.99 EUR</span>
                  <p className="black-text">I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information.</p>
                    
                      <div className="col s12 m12">
                      
                      <button className="col s2 waves-effect waves-light btn-small blue lighten-2"><i className="material-icons">expand_more</i></button>

                      <div className="col s1">
                        <p className="black-text">5</p>
                      </div>

                      <button className="col s2 waves-effect waves-light btn-small blue lighten-2"><i className="material-icons">expand_less</i></button>
                      </div>

                      <Link to="/checkout" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left">check</i>Checkout</Link>
                      <Link to="/" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Cancel</Link>

                </div>
                </div>
            </div>

            <div className="row">

              <div className="card col s12 m6">
                <span className="card-title">Product name</span>

                <div className="col s4 card-image">
                    <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt="" className="responsive-img"></img>
                  </div>

                  <div className="card-content">
                  <span className="card-title">114.99 EUR</span>
                    <p className="black-text">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information.</p>
                      
                        <div className="col s12 m12">
                        
                        <button className="col s2 waves-effect waves-light btn-small blue lighten-2"><i className="material-icons">expand_more</i></button>

                        <div className="col s1">
                          <p className="black-text">5</p>
                        </div>

                        <button className="col s2 waves-effect waves-light btn-small blue lighten-2"><i className="material-icons">expand_less</i></button>
                        </div>

                        <Link to="/checkout" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left">check</i>Checkout</Link>
                        <Link to="/" className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left"></i>Cancel</Link>

                  </div>
                  </div>
              </div>


  </div>




      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

