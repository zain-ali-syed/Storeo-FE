import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './SideNav.css';
import { getCategories } from '../../../helpers/api';
import { getCateg } from '../../../actions/example.actions';
import { connect } from 'react-redux';


class SideNav extends Component {


  async componentDidMount() {
    const categories = await getCategories()
    this.props.getCateg(categories.data);
  }

  displayCategories = () => {
    return this.props.categories.map((category) => {
        return( 
          <Link 
            className="waves-effect"
            to={{ pathname:`/productslist/${category.id}`, state:{ categoryName: category.name}} }
            key={category.id}>{category.name}
          </Link>
        )
    })
  }

  render() {
    const { first_name, last_name, email } = this.props.user;
    const image = 'https://lh3.googleusercontent.com/--26DbWZiyz4/W2ghoMr2Z5I/AAAAAAAACgc/u85bZXW6aEAdoH6CKtZsrY9ZTi_TYWMLwCEwYBhgL/w140-h139-p/IMG-1428612482700-V.jpg'
    return (
      <div>
          <ul id="slide-out" className="sidenav">
            <li><div className="user-view">
              <div className="sidenav-user-info-header">
              </div>
              <a href="#!"><img className="circle" src={image} alt=""></img></a>
              <a href="#!"><span className="black-text name">{`${first_name} ${last_name}`}</span></a>
              <a href="#!"><span className="black-text email">{email}</span></a>
            </div></li>
            <li>
              <h6 className="category-header">Choose Product Category</h6>
            </li>
            <li>
              {this.displayCategories()}
            </li>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  getCateg: (data) => dispatch(getCateg(data)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav));

