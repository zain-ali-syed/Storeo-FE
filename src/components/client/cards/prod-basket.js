import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ProdBasket extends Component {
  
  render () {
    
  return (
          <div className="">

                <img src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt="" className="circle"></img>
                      <span>
                        
                      <span className="card-title">{this.props.name}</span>

                            <div className="card-content">
                            <span className="card-title">{this.props.price}</span>
                            <p className="black-text">{this.props.description}</p>
                              <p className="black-text">I am good at containing small bits of information.</p>
                                
                                   <div className="col s12 m12">
                                      <a href="#"><i className="material-icons blue white-text">expand_more</i></a>
                                      <div className="col">
                                        <p className="black-text">5</p>
                                      </div>
                                      <a href="#"><i className="material-icons blue white-text">expand_less</i></a>
                                      </div>
                                   </div>
                       
                        </span>

                      <br></br>
                      
                      <a href="#!" className="secondary-content"><i className="material-icons blue-text">delete</i></a>
          </div>
  );
  }
};

