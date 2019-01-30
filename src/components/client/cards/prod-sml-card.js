import React from 'react'
import { Link } from 'react-router-dom';
import '../cards/prod-sml-card.css'

const ProductSmallCard = () => {
  return (
    <Link to="/productcard" >
    <div className="row">
      <div className="col s3 m2" id="prodSmlCard">
        <div className="card blue lighten-2">
            <div className="card-action center">
            <p>Product</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductSmallCard;

