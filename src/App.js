import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Family from '../src/Container/Family/family';
import Detail from '../src/Container/Detail/detail';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Family} exact />
        <Route path="/detail/:id" component={Detail} exact />
      </Router>
    );
  }
}

export default App;
