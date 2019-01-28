import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import styled from "styled-components";

import Home from "components/Home";
import Login from "components/Accounts/Login";
import Header from "components/App/Header";

import {AUTH_TOKEN} from 'constants/auth';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 2em;
  `,
  Body = styled.div`
    padding-top: 48px;
    position: relative;
  `;

const RenderRoutes = () => {
  if (localStorage.getItem(AUTH_TOKEN)) {
    return (
      <Main>
        <Header />
        <Body>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
          </Switch>
        </Body>
      </Main>
    );
  } else {
    return (
      <Switch>
        <Redirect exact from="/" to="/account/login" />
        <Route path="/account/login" component={Login} />
      </Switch>
    )
  }
};

export default withRouter(RenderRoutes);
