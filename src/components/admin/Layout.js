import React, { Component } from 'react';
import M from 'materialize-css';
import { NavLink } from 'react-router-dom';

class Layout extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  getMenu = () => (
    <React.Fragment>
      <li><NavLink to="/admin/products">Manage Products</NavLink></li>
      <li><NavLink to="/admin/categories">Manage Categories</NavLink></li>
      <li><NavLink to="/admin/orders">View Orders</NavLink></li>
    </React.Fragment>
  )

  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="blue-grey darken-2" role="navigation">
            <div className="nav-wrapper container">
              <span id="logo-container" href="#" className="brand-logo">Admin Section</span>

              <ul className="right hide-on-med-and-down"> {this.getMenu()} </ul>
              <ul id="nav-mobile" className="sidenav">{this.getMenu()}</ul>
              <a href="#!" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>

            </div>

          </nav>

        </header>



        <main className="row">
          <div className="col s12 m2 hide-on-small-only"></div>
          <div className="col s12 m8"> {this.props.children} </div>
          <div className="col s12 m2"></div>
        </main>


      </ React.Fragment >
    );
  }
}

export default Layout;

