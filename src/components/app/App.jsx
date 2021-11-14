import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Welcome from '../Welcome';
import Login from '../Login';
import Register from '../Register';
import Error from '../Error';
import Landing from '../Landing';
import Footer from '../Footer';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
