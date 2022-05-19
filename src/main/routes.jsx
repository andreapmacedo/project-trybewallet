import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

export default () => (
  <Switch>
    <Route path="/" component={ Login } />
    <Route exact path="/carteira" component={ Wallet } />
    {/* <Route path="*" render={ () => <NotFound /> } /> */}
    <Redirect path="*" to="/" />
  </Switch>
);
