import React from 'react'
import Layout from '../Layout';

const ProductCard = () => {
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
          <div className="col s3 m3 l3">
            <img src="https://res.cloudinary.com/ohcash/image/upload/v1547302800/photo-1534972195531-d756b9bfa9f2.jpg" alt="" className="responsive-img"></img>
          </div>
          <div className="col s3 m3 l3">
            <img src="https://res.cloudinary.com/ohcash/image/upload/v1547302800/photo-1534972195531-d756b9bfa9f2.jpg" alt="" className="responsive-img"></img>
          </div>
          <div className="col s3 m3 l3">
            <img src="https://res.cloudinary.com/ohcash/image/upload/v1547302800/photo-1534972195531-d756b9bfa9f2.jpg" alt="" className="responsive-img"></img>
          </div>
        </div>
      

      <div className="card col s12 m6">
        <span className="card-title">Product name</span>
          <div className="card-content">
          <span className="card-title">114.99 EUR</span>
            <p className="black-text">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                <button className="waves-effect waves-light btn-small blue lighten-2"><i className="material-icons">expand_more</i></button>
                <button className="waves-effect waves-light btn-small blue lighten-2"><i className="material-icons">expand_less</i></button>
            <div className="card-action center">
            <button className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left">add</i>Add to basket</button>
            </div>
          </div>
          </div>
      </div>
  </div>
      
  </Layout>
  );
};

export default ProductCard;

