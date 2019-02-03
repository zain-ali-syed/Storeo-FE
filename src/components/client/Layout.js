import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../client/Layout.css';
import SideNav from './containers/SideNav';
import M from 'materialize-css';
import { connect } from 'react-redux';


class Layout extends Component {

  componentDidMount() {
    M.AutoInit();
    // this.totalBasketQty();
  }

 totalBasketQty = () => {
    let subTotalBasketQty = 0;
    this.props.basket.forEach(item => {
      subTotalBasketQty+=item.quantity
    });
    return subTotalBasketQty;
  }

  render() {

    return (
      <React.Fragment>
        <header>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <nav className="grey darken-1" role="navigation">
            <div className="nav-wrapper container">
              <Link id="logo-container" to="/" className="brand-logo">Storeo</Link>
              <ul className="right hide-on-med-and-down">

                <li><Link to="#">Login</Link></li>
                <li><Link to="/basket">
                <i className="material-icons white-text">shopping_cart</i>
                <div className="badge red" id="badge"></div>
                <div id="badgeNbr"></div><p id="badgeText">{this.totalBasketQty()}</p>
                </Link></li>
                <li><Link to="#"></Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="row">
          <div className="col s12 m1 hide-on-small-only">

          </div>
          <div className="col s12 m10"> {this.props.children} </div>
          <div className="col s12 m1"></div>
        </main>

      
        <SideNav />
        
        

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

{/* <li><Link to="/">
                <i className="material-icons white-text">home</i>
                </Link></li> */}

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  basket: state.basket,
})

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(
  mapStateToProps
)(Layout);

