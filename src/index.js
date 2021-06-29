import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';

import {  BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class Test extends React.Component {

  render() {
    return (
      <>
        <Router>
          <NaviBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={Users}/>
            <Route path='/about' component={About}/>
          </Switch>
        </Router>
      </>
    );
  }
}

ReactDOM.render(
  <Test/>,
  document.getElementById('root')
);