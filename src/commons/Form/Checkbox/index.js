import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: solid 1px #dedede;
  background: ${props => (props.checked ? '#2184DC' : 'transparent')}
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #2184DC;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;

const Span = styled.span`
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
  padding: 8px;
`;

const Checkbox = ({ input, label, meta: { touched, error } }) => {
  // console.log('input', input);

  // return (
  //   <CheckboxContainer>
  //     <HiddenCheckbox {...input} type="checkbox" checked={checked} />
  //     <StyledCheckbox {...input} type="checkbox" checked={checked}>
  //       <Icon viewBox="0 0 24 24">
  //         <polyline points="20 6 9 17 4 12" />
  //       </Icon>
  //       <Span>{label}</Span>
  //     </StyledCheckbox>
  //     {touched && error && <span>{error}</span>}
  //   </CheckboxContainer>
  // );
  return (
    <React.Fragment>
      <input type="checkbox" {...input} />
      <span style={{ lineHeight: '38px' }}>{label}</span>
      {touched && error && <span>{error}</span>}
    </React.Fragment>
  );
};

// Checkbox.propTypes = {
//   input: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   meta : PropTypes.object
// };

export default Checkbox;
