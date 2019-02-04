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
import Register from './components/admin/Register';
import Login from './components/admin/Login';


//Client Components
import Home from './components/client/Home';
import Contact from './components/client/Contact';
import Basket from './components/client/Basket';
import ProductCard from './components/client/cards/prod-card';
import ProductsList from './components/client/ProductsList';
import Checkout from './components/client/Checkout';
import ProductAdd from './components/admin/product/ProductAdd';
import ProductEdit from './components/admin/product/ProductEdit';


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
          <Route exact path="/admin/products/add" component={ProductAdd}></Route>
          <Route exact path="/admin/products/edit/:id" component={ProductEdit}></Route>
          <Route exact path="/admin/orders" component={Orders}></Route>
          <Route exact path="/admin/register" component={Register}></Route>
          <Route exact path="/admin/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/basket" component={Basket}></Route>
          <Route exact path="/productcard/:id" component={ProductCard}></Route>
          <Route  path="/productslist/:id" component={ProductsList}></Route>
          <Route exact path="/checkout/:totalPr" component={Checkout}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
