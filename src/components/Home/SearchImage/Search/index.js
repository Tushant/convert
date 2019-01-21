import React from "react";
import styled from "styled-components";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchWrapper = styled.div`
  flex: 1;
  position: relative;
  & > svg {
    position: absolute;
    bottom: 10px;
    right: 8px;
    color: #777;
    width: 10px;
    height: 8px;
  }
`;

const Input = styled.input`
  color: #373737;
  font-size: 13px;
  flex: 1;
  z-index: 1000;
  border: 1px solid #dedede;
  border-radius: 2px;
  padding: 6px 0;
  width: 100%;
  box-sizing: border-box;
  ${props => props.disabled && "background: #dedede"}
  ::placeholder {
    line-height: 14px;
    font-size: 12px;
    color: #b5b5b5;
  }
`;

const Search = () => (
  <SearchWrapper>
    <Input type="text" placeholder="Search From Category" />
    <FontAwesomeIcon icon={faSearch} />
  </SearchWrapper>
);

export default Search;
