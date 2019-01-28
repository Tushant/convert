import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

const Accounts = () => (
  <Switch>
    <Route exact path="/accounts" render={() => <Redirect to="/accounts/login" />} />
    <Route path="/accounts/login" component={Login} />
    <Route path="/accounts/signup" component={Signup} />
    <Route path="/accounts/profile" component={Profile} />
  </Switch>
);

export default Accounts;
