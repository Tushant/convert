import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  flex: 1;
`;

const Input = styled.input`

`;

const Search = () => (
  <SearchWrapper>
    <Input type="text" placeholder="Search From Category" />
  </SearchWrapper>
);

export default Search;
