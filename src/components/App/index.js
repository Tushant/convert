import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

import Home from "components/Home";
import store from "store";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
  Body = styled.div`
    padding-top: 48px;
    position: relative;
  `;

const App = () => (
  <Provider store={store}>
    <Main>
      <Body>
        <x-section>
          <Home />
        </x-section>
      </Body>
    </Main>
  </Provider>
);

export default App;
