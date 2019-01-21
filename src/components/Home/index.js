import React from "react";
import styled from "styled-components";

import { Box } from "commons/styled";
import SearchImage from "./SearchImage";
import ImageBoard from "./ImageBoard";

const SBox = styled(Box)`
  padding: 1em;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => (props.width ? `${props.width}%` : "100%")};
`;

const Home = () => (
  <React.Fragment>
    <Wrapper>
      <Column width={20}>
        <SBox>
          <SearchImage />
        </SBox>
      </Column>
      <Column width={80}>
        <ImageBoard />
      </Column>
    </Wrapper>
  </React.Fragment>
);

export default Home;
