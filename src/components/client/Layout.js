import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './containers/SideNav';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { getSearchProducts } from '../../helpers/api';
import { saveSearchResult } from '../../actions/example.actions';
import './Layout.css'


class Layout extends Component {
  state = {
    selectedCategoryName: undefined,
    categoryId: null,
    queryPhrase: '',
  }

  componentDidMount() {
    M.AutoInit();
    // this.totalBasketQty();
  }

  totalBasketQty = () => {
    let subTotalBasketQty = 0;
    this.props.basket.forEach(item => {
      subTotalBasketQty += item.quantity
    });
    return subTotalBasketQty;
  }

  selectCategory = async (categoryId, selectedCategoryName) => {
    await this.setState({ categoryId, selectedCategoryName });
  }

  handleSearchSubmit = async (event) => {
    event.preventDefault();
    const { queryPhrase, selectedCategoryName } = this.state;
    let categoryQuery;
    if (!selectedCategoryName) categoryQuery = '';
    else categoryQuery = '&category=' + selectedCategoryName;

    const searchQuery = `?q=${queryPhrase}${categoryQuery}`;
    let searchResult = await getSearchProducts(searchQuery);
    this.props.saveSearchResult(searchResult.data);

    console.log('STATE  $$$$$', this.props.searchResult);

  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ queryPhrase: event.target.value });
  }

  render() {

    return (

      <React.Fragment>

        <header>
          <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

          {/*-- Dropdown Structure --*/}
          <ul id="dropdown1" className="dropdown-content">
            {(!this.props.categories)
              ? []
              : this.props.categories.map((category) => {
                return (
                  <li key={category.id}>
                    <a
                      href="#!"
                      onClick={() => this.selectCategory(category.id, category.name)}
                      className="waves-effect"
                    >
                      {category.name}
                    </a>
                  </li>
                )
              })}

          </ul>

          <nav className="grey darken-1" role="navigation">
            <div className="nav-wrapper">

              <Link id="logo-container" to="/" className="nav-logo">Storeo</Link>

              {/*-- Dropdown Trigger --*/}
              <a href="#!" className="dropdown-trigger" data-target="dropdown1">

                <div className="category-selection">
                  <p className="selected-cat-name">
                    {this.state.selectedCategoryName || 'All'}
                  </p>
                  <span className="material-icons search-cat-arrow-down">arrow_drop_down</span>
                </div>
              </a>
              <div className="search-field">

                <form onSubmit={this.handleSearchSubmit}>
                  <div className="input-field">
                    <input id="search" type="search" value={this.state.queryPhrase} onChange={this.handleChange} required />

                    <label className="label-icon" htmlFor="search">
                      <i className="material-icons input-field" id="search-icon">search</i>
                    </label>

                    <i className="material-icons input-field">close</i>
                  </div>
                </form>
              </div>


              <div className="action-buttons">
                <ul className="hide-on-med-and-down">
                  <li>
                    {
                      !this.props.user.id ? <Link to="/login">Login/Register</Link> :
                        <React.Fragment>
                          <a className="waves-effect waves-light btn-small" onClick={this.props.logOut}>
                            <i className="material-icons right white-text" >forward</i>Logout
                          </a>

                        </React.Fragment>
                    }
                  </li>
                  <li>
                    <Link to="/myprofile">{this.props.user.first_name + " " + this.props.user.last_name}</Link>
                  </li>
                  <li><Link to="/basket">
                    <i className="material-icons white-text">shopping_cart</i>
                    <div id="badgeNbr">
                      <p id="badgeText">{this.totalBasketQty()}</p>
                    </div>
                  </Link></li>


                  <li><Link to="#"></Link></li>
                </ul>
              </div>


            </div>
          </nav>

        </header>

        <main className="row" id="main">
          <div className="col s12 m1 hide-on-small-only"></div>
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
  user: state.user,
  basket: state.basket,
  categories: state.categories,
  searchResult: state.searchResult,
})

const mapDispatchToProps = (dispatch) => ({
  saveSearchResult: (listOfProducts) => dispatch(saveSearchResult(listOfProducts)),
  logOut: () => { dispatch({ type: "LOGOUT_USER" }) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

