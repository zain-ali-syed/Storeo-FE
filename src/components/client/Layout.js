import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../client/Layout.css';
import M from 'materialize-css';

class Layout extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="grey darken-1" role="navigation">
            <div className="nav-wrapper container">
              <Link id="logo-container" to="#" className="brand-logo">Client Section</Link>


              <ul className="right hide-on-med-and-down">
                <li><Link to="/">
                <i className="material-icons white-text">home</i>
                </Link></li>
                <li><Link to="#">Login</Link></li>
                <li><Link to="/basket">
                <i className="material-icons white-text">shopping_cart</i>
                <div className="badge red" id="badge"></div>
                <div id="badgeNbr"></div><p id="badgeText">4</p>
                </Link></li>
                <li><Link to="#"></Link></li>
              </ul>
              <ul id="nav-mobile" className="sidenav">
                <li><Link to="#">Login</Link></li>
                <li><Link to="#">Basket</Link></li>
                <li><Link to="#">Contact</Link></li>
              </ul>
              <Link to="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>

            </div>
          </nav>
        </header>


        <main className="row">
          <div className="col s12 m1 hide-on-small-only">

          </div>
          <div className="col s12 m10"> {this.props.children} </div>
          <div className="col s12 m1"></div>
        </main>



        {/* <footer className="page-footer grey darken-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">Lorem ipsum copy here.</p>
              </div>
            </div>
          </div>
        </footer> */}
      </ React.Fragment >
    );
  }
}

export default Layout;

