import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
// require('../dist/styles/global.scss');


import Welcome from './components/Welcome';
// import Home from './components/Home';
// import NotFound from './components/NotFound';



const app = document.getElementById('app');
const routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/employees" component={Employees} />
      <Route path="/employees/{name}" component={Employees} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routes, app)
