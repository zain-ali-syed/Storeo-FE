import React from 'react'
import { Link } from 'react-router-dom';

const mockImage = "https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg";

const ProductSmallCard = (props) => {

  const { name, id, catName, images, description, price, discount } = props;
  return (
    <Link to={`/productcard/${id}`} >
      <div className="card hoverable" id="prodSmlCard">
        <div className="card-action">
          <div className="card-image">
            <img src={images[0] || mockImage} alt=""></img>
          </div>
          <div className="card-content">
            <h6 className="black-text">{name}</h6>
            <p className="black-text">{description}</p>
            <p className="black-text"><b>Price:</b> {price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductSmallCard;

