import React, { Component } from 'react';
import M from 'materialize-css';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



class Layout extends Component {

  componentDidMount() {
    M.AutoInit();
    console.log("props ", this.props)
  }



  getMenu = () => (
    <React.Fragment>
      <li><NavLink to="/admin/products">Manage Products</NavLink></li>
      <li><NavLink to="/admin/categories">Manage Categories</NavLink></li>
      <li><NavLink to="/admin/orders">View Orders</NavLink></li>
      <a className="waves-effect waves-light btn-small" onClick={this.props.logOut}>
        <i className="material-icons right white-text" >forward</i>Logout
        </a>
    </React.Fragment>
  )

  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="blue-grey darken-2" role="navigation">
            <div className="container">
              <a id="logo-container" href="#" className={this.props.user.role === "admin" ? "brand-logo" : "brand-logo center"}>Admin Section</a>

              {this.props.user.role === "admin" &&
                <React.Fragment>
                  <ul className="hide-on-med-and-down right"> {this.getMenu()} </ul>
                  <ul id="nav-mobile" className="sidenav">{this.getMenu()}</ul>
                  <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </React.Fragment>
              }
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logOut: () => { console.log("diaptached"); dispatch({ type: "LOGOUT_USER" }) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

