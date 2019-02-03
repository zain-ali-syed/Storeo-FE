import React, {Component} from 'react';

export default class ProdCheckout extends Component {

  render () {
  
  return (
    <div className="">
          
        <span className="card-title">{this.props.name}</span>

              <div className="card-content">
              <span className="card-title">{this.props.price}</span>
              <p className="black-text">{this.props.description}</p>
                <p className="black-text">I am good at containing small bits of information.</p>
              </div>

    </div>
  );
  }
};
