import React from 'react'
import { Link } from 'react-router-dom';
import './prod-sml-card.css';

const mockImage = "https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg";


const ProductSmallCard = (props) => {
  
  const renderDiscount = (discountNum) => {
    if (discountNum >= 1) {
      return (
        <p>
          <span class="discount-label">
            <span className="discount-text">
              discount  
            </span> {discountNum} %</span>
          {/* <span class="badge" data-badge-caption="%"> ↓ {discountNum}
          </span> */}
        </p>
      )
    }
  }
  const { name, id, catName, images, description, price, discount } = props;
  const discountFixed = Math.floor(discount);
  return (
    <Link to={`/productcard/${id}`} >
      <div className="card hoverable prodSmlCard">
        <div className="card-action">
          <div 
            className="card-image product-card-image-container"
            style={{ 
              backgroundImage: `url(${images[0] || mockImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}  
          >
            {/* <img 
              src={images[0] || mockImage}
              alt=""
              className="product-card-image responsive-img"
            ></img> */}
          </div>
          <div className="card-content">
            {renderDiscount(discountFixed)}
            <h6 className="black-text product-title">{name}</h6>
            <p className="black-text text text-concat ellipsis">{description}</p>
            {/* <p className="black-text"><b>Price:</b> {price} €</p> */}
          </div>
        </div>
        <p className="price-tag"><b>Price:</b> {price} €</p>
      </div>
    </Link>
  );
};

export default ProductSmallCard;

