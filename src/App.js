import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Family from '../src/Container/Family/family';
import Detail from '../src/Container/Detail/detail';
import Gopal from '../src/Container/Gopal/gopal';
import Suresh from '../src/Container/Suresh/suresh';
import Naran from '../src/Container/Naran/naran';
import Mavji from '../src/Container/Mavji/mavji';
import Parbat from '../src/Container/Parbat/parbat';
import Vipul from '../src/Container/Vipul/vipul';
import Narsi from '../src/Container/Narsi/narsi';
import Virji from '../src/Container/Virji/virji';
import Ravji from '../src/Container/Ravji/ravji';
import Dhanji from '../src/Container/Dhanji/dhanji';
import Nanji from '../src/Container/Nanji/nanji';
import Hira from '../src/Container/Hira/hira';
import Dasend from '../src/Container/Das/das';
import Him from '../src/Container/Him/him';
import Pars from '../src/Container/Pars/pars';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Family} exact />
        <Route path="/detail/1" component={Gopal} exact />
        <Route path="/detail/2" component={Suresh} exact />
        <Route path="/detail/3" component={Naran} exact />
        <Route path="/detail/4" component={Mavji} exact />
        <Route path="/detail/5" component={Parbat} exact />
        <Route path="/detail/6" component={Vipul} exact />
        <Route path="/detail/7" component={Narsi} exact />
        <Route path="/detail/8" component={Virji} exact />
        <Route path="/detail/9" component={Ravji} exact />
        <Route path="/detail/10" component={Dhanji} exact />
        <Route path="/detail/11" component={Nanji} exact />
        <Route path="/detail/12" component={Hira} exact />
        <Route path="/detail/13" component={Dasend} exact />
        <Route path="/detail/14" component={Him} exact />
        <Route path="/detail/15" component={Pars} exact />




      </Router>
    );
  }
}

export default App;
