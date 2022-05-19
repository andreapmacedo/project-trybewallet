import React from 'react';
// import Routes from './main/routes';
// import { Route, Switch, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const App = () => (
  // <Routes />
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/carteira" component={ Wallet } />
    {/* <Redirect path="*" to="/" /> */}
  </Switch>
);

export default App;
