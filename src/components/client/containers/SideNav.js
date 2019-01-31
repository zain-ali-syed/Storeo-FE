import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../../helpers/api';

class SideNav extends Component {

  state = {
    categories: []
  }

  async componentDidMount() {
      const categories = await getCategories() //resolved promise
      this.setState((prevState) => ({ categories: categories.data }))
  }

  displayCategories = () => {
    return this.state.categories.map((category, index) => {
        return <a className="waves-effect" href="/productslist" key={category.id}>{category.name}</a>
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

export default SideNav;