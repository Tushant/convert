import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

import Home from "components/Home";
import Header from "components/App/Header";
import store from "store";

import "react-input-range/lib/css/index.css";


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

const App = () => (
  <Provider store={store}>
    <Main>
      <Header />
      <Body>
        {/* <x-section>
          <Home />
        </x-section> */}
        <Home />
      </Body>
    </Main>
  </Provider>
);

export default App;
