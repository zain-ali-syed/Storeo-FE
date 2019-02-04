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

    console.log('SIDE NAV CATEGORIES', categories);
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
    
    return (
      <div>
          <ul id="slide-out" className="sidenav">
            <li><div className="user-view">
              <div className="background blue lighten-2">
              </div>
              <a href="#"><img className="circle" src="https://res.cloudinary.com/ohcash/image/upload/v1547303384/photo-1529940340007-8ef64abc360a.jpg" alt=""></img></a>
              <a href="#"><span className="white-text name">John Doe</span></a>
              <a href="#"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
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

})

const mapDispatchToProps = (dispatch) => ({
  getCateg: (data) => dispatch(getCateg(data)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav));