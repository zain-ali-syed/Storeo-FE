import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'materialize-css/dist/css/materialize.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//Admin Components
import Dashboard from './components/admin/Dashboard';
import Category from './components/admin/category';
import CategoryAddEdit from './components/admin/category/CategoryAddEdit';
import Product from './components/admin/product';
import Orders from './components/admin/orders';


//Client Components
import Home from './components/client/Home';
import Contact from './components/client/Contact';
import { Basket } from './components/client/Basket';
import ProductCard from './components/client/cards/prod-card';
import ProductsList from './components/client/ProductsList';
import Checkout from './components/client/Checkout';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Dashboard}></Route>
          <Route exact path="/admin/categories" component={Category}></Route>
          <Route exact path="/admin/category/add_edit" component={CategoryAddEdit}></Route>
          <Route exact path="/admin/category/add_edit/:id" component={CategoryAddEdit}></Route>
          <Route exact path="/admin/products" component={Product}></Route>
          <Route exact path="/admin/orders" component={Orders}></Route>

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/basket" component={Basket}></Route>
          <Route exact path="/productcard" component={ProductCard}></Route>
          <Route exact path="/productslist" component={ProductsList}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
