import React from 'react';
import styled from 'styled-components';

import Search from './Search'
import Images from './Images'

const Wrapper = styled.div`
  flex-direction: column;
`;

const SearchImage = () => (
  <React.Fragment>
    <Wrapper>
      <Search />
      <Images />
    </Wrapper>
  </React.Fragment>
)

export default SearchImage;
