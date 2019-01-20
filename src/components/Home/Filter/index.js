import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import FilterOptions from './FilterOptions';

const Wrapper = styled.div`
  border: solid 1px #999;
  padding: 0 20px;
`;

const Filter = (props) => {
    return (
      <Wrapper>
        <Text
          addText={props.addText}
          addSubtitle={props.addSubtitle}
        />
        <FilterOptions
          opacityChange={props.opacityChange}
          applyTextFilter={props.applyTextFilter}
          applyColor={props.applyColor}
          applyBlur={props.applyBlur}
        />
      </Wrapper>
    );
}

export default Filter
