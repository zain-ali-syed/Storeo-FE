import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';


import 'materialize-css/dist/css/materialize.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//Admin Components
import Dashboard from './components/admin/Dashboard';


//Client Components
import Home from './components/client/Home';
import Contact from './components/client/Contact';
import { Basket } from './components/client/Basket';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Dashboard}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/basket" component={Basket}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
