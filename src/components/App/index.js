import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";

import store from "store";

import "react-input-range/lib/css/index.css";
import client from "../../client";
import RenderRoutes from './RenderRoutes';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <RenderRoutes />
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
