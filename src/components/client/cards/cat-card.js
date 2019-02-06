import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/cat-card.css'


const CategoryCard = ({name, id}) => {
  
  return (
          <Link to={{ pathname:`/productslist/${id}`, state:{ categoryName: name}} } >
              <div >
                <div  id="catCard">
                <div className="card hoverable">
                  <div className="card blue lighten-2">
                    <div className="card-action center">
                    <p>{name}</p>
                    </div>
                  </div>
                  <div className="card-image">
                    <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </Link>
  );
};

export default CategoryCard;