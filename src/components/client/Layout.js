import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SideNav from "./containers/SideNav";
import M from "materialize-css";
import { connect } from "react-redux";
import { getSearchProducts } from "../../helpers/api";
import { saveSearchResult } from "../../actions/example.actions";
import "./Layout.css";
import logo from "./../../images/logo_storeo_white.png";
// import logo from "./../../images/logo-new-white.png";
// import logo from "./../../images/logo-new-white2.png";

import styles from './../../constants/style.constants.css';


class Layout extends Component {
  state = {
    selectedCategoryName: undefined,
    categoryId: null,
    q: ""
  };

  componentDidMount() {
    M.AutoInit();
    // this.totalBasketQty();
  }

  totalBasketQty = () => {
    let subTotalBasketQty = 0;
    this.props.basket.forEach(item => {
      subTotalBasketQty += item.quantity;
    });
    return subTotalBasketQty;
  };

  selectCategory = async (categoryId, selectedCategoryName) => {
    await this.setState({ categoryId, selectedCategoryName });
  };

  handleSearchSubmit = async event => {
    event.preventDefault();
    let { q, selectedCategoryName } = this.state;
    q = q
      .trim()
      .split(" ")
      .filter(str => str.length > 0)
      .join(" ");
    if (!q) {
      console.log("SEARCH", q);
      return;
    }
    let categoryName;
    if (!selectedCategoryName) categoryName = "";
    else categoryName = "&category=" + selectedCategoryName;

    const searchQuery = `?q=${q}${categoryName}`;
    let searchResult = await getSearchProducts(searchQuery);
    await this.props.saveSearchResult(searchResult.data);

    this.props.history.push(
      `/searchresult/${selectedCategoryName || "all"}/${q}`
    );
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ q: event.target.value });
  };

  render() {
    const { first_name, id } = this.props.user;
    return (
      <React.Fragment>
        <header>
          <a href="#!" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          {/*-- Dropdown Structure --*/}
          <ul id="dropdown1" className="dropdown-content">
            <a
              href="#!"
              onClick={() => this.selectCategory(null, "All")}
              className="waves-effect category-search-list-item category-all"
            >
              All
            </a>
            {!this.props.categories
              ? []
              : this.props.categories.map(category => {
                return (
                  <li key={category.id}>
                    <a
                      href="#!"
                      onClick={() =>
                        this.selectCategory(category.id, category.name)
                      }
                      className="waves-effect category-search-list-item"
                    >
                      {category.name}
                    </a>
                  </li>
                );
              })}
          </ul>

          <nav className="grey darken-1" role="navigation">
            <div className="nav-wrapper">
              <Link id="logo-container" to="/" className="nav-logo">
                <img src={logo} alt="" className="responsive-img logo-image" />
              </Link>

              {/*-- Dropdown Trigger --*/}
              <a href="#!" className="dropdown-trigger" data-target="dropdown1">
                <div className="category-selection">
                  <p className="selected-cat-name">
                    {this.state.selectedCategoryName || "All"}
                  </p>
                  <span className="material-icons search-cat-arrow-down">
                    arrow_drop_down
                  </span>
                </div>
              </a>
              <div className="search-field">
                <form onSubmit={this.handleSearchSubmit}>
                  <div className="input-field">
                    <input
                      id="search"
                      type="search"
                      value={this.state.q}
                      onChange={this.handleChange}
                      required
                    />

                    <label className="label-icon" htmlFor="search">
                      <i
                        className="material-icons input-field"
                        id="search-icon"
                      >
                        search
                      </i>
                    </label>

                    <i className="material-icons input-field">close</i>
                  </div>
                </form>
              </div>

              <div className="action-buttons">
                <ul className="hide-on-med-and-down">
                  <li>
                    {id ?
                      (<Link
                        className="navbar-icons"
                        to="/myprofile">
                        <i
                          className="profile-icon material-icons left white-text"
                        >
                          account_circle</i>
                        {first_name.charAt(0).toUpperCase() +
                          first_name.slice(0, 8)}
                      </Link>)
                      : null
                    }
                  </li>
                  <li>
                    <Link
                      className="navbar-icons basket-icon"
                      to="/basket">

                      <i className="material-icons white-text">shopping_cart</i>
                      <div id="badgeNbr">
                        <p id="badgeText">{this.totalBasketQty()}</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    {!id ? (
                      <Link
                        className="navbar-icons"
                        to="/login">Login/Register</Link>
                    ) : (
                        <React.Fragment>
                          <a className="navbar-icons logout-icon" onClick={this.props.logOut}>
                            <i className="material-icons right white-text">
                              exit_to_app</i>Logout
                        </a>
                        </React.Fragment>
                      )}
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="row" id="main" style={{ marginBottom: "100px" }}>
          <div className="col s12 m1 hide-on-small-only" />
          <div className="col s12 m10"> {this.props.children} </div>
          <div className="col s12 m1" />
        </main>

        <SideNav />
        <footer>
          <div class="copyright">
            <p>Copyright 2019 - Storeo</p>
          </div>
          <div class="social">
            <a href="#" class="support">Contact Us</a>
            <a href="#" className="face">f</a>
            <a href="#" className="tweet">t</a>
            <a href="#" className="linked">in</a>
          </div>
        </footer>

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

const mapStateToProps = state => ({
  user: state.user,
  basket: state.basket,
  categories: state.categories,
  searchResult: state.searchResult
});

const mapDispatchToProps = dispatch => ({
  saveSearchResult: listOfProducts =>
    dispatch(saveSearchResult(listOfProducts)),
  logOut: () => {
    dispatch({ type: "LOGOUT_USER" });
  }
});

const LayoutWithRouter = withRouter(Layout);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutWithRouter);
