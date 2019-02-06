import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/cat-card.css'


const CategoryCard = (props) => {
  const { name, id, image, description } = props;
  console.log('CATEGORY CARD', props)
  return (
    <Link to={{ pathname: `/productslist/${id}`, state: { categoryName: name } }} >
      <div className="category-card-wrapper">
          <div className="card hoverable catCard">
                <h2 className="category-name">{name}</h2>
            <div
              className="card-image category-card-image-container"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}

            >
              {/* <img src={image} alt=""></img> */}
            </div>
            <p
              className="category-description text text-concat ellipsis"
            >
              {description}
            </p>
            <Link to="">
              <p className="category-bottom-link">Shop now</p>
            </Link>
          </div>
      </div>
    </Link>
  );
};

export default CategoryCard;