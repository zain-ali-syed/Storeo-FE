import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import 'materialize-css/dist/css/materialize.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Privatise Routes
import AdminPrivateRoute from './private_routes/AdminPrivateRoute';
import StorePrivateRoute from './private_routes/StorePrivateRoute';


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
import Thankyou from './components/client/Thankyou';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Admin Routes */}
          <AdminPrivateRoute exact path="/admin" user={this.props.user} component={Dashboard}></AdminPrivateRoute>
          <AdminPrivateRoute exact path="/admin/categories" user={this.props.user} component={Category}></AdminPrivateRoute>
          <AdminPrivateRoute exact path="/admin/category/add_edit" user={this.props.user} component={CategoryAddEdit}></AdminPrivateRoute>
          <AdminPrivateRoute exact path="/admin/category/add_edit/:id" user={this.props.user} component={CategoryAddEdit}></AdminPrivateRoute>
          <AdminPrivateRoute exact path="/admin/products" user={this.props.user} component={Product}></AdminPrivateRoute>
          <AdminPrivateRoute exact path="/admin/products/add" user={this.props.user} component={ProductAdd}></AdminPrivateRoute>
          <AdminPrivateRoute exact path="/admin/products/edit/:id" user={this.props.user} component={ProductEdit}></AdminPrivateRoute>
          <AdminPrivateRoute exact path="/admin/orders" user={this.props.user} component={Orders}></AdminPrivateRoute>
          <Route exact path="/admin/register" user={this.props.user} component={Register}></Route>
          <Route exact path="/admin/login" user={this.props.user} component={Login}></Route>

          {/* Storefront Routes */}
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/basket" component={Basket}></Route>
          <Route exact path="/productcard/:id" component={ProductCard}></Route>
          <Route path="/productslist/:id" component={ProductsList}></Route>
          <Route exact path="/checkout/:totalPr" component={Checkout}></Route>
          <Route exact path="/thankyou" component={Thankyou}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
