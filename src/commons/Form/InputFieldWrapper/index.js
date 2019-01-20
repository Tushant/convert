import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const readOnlyWrapper = css`
  border-bottom-color: '#e2e2e2',
  border-bottom-width: 1,
  flex             : 1
`;

const OuterWrapper = styled.div`
  ${props => (props.readOnly ? readOnlyWrapper : 'flex: 1')};
  z-index: ${props => props.zIndex && props.zIndex};
`;

const Container = styled.div`
  flex: 1;
  padding: 0 15px;
  margin: 20px 0 0;
  ${props => props.styling && css(...props.styling)};
`;

const Label = styled.label`
  color: #939393;
  font-size: 12px;
  margin-bottom: 5px;
  display: block;
  ${props => props.textStyle && css(...props.textStyle)};
`;

const InputFieldWrapper = props => {
  const { props: childrenProps } = props.children;
  return (
    <OuterWrapper readOnly={childrenProps && childrenProps.readonly}>
      <Container styling={props.styling}>
        <Label>{props.label}</Label>
        <React.Fragment>{props.children}</React.Fragment>
      </Container>
    </OuterWrapper>
  );
};

InputFieldWrapper.propTypes = {
  children : PropTypes.node,
  label    : PropTypes.string,
  styling  : PropTypes.string,
  textStyle: PropTypes.object,
  zIndex   : PropTypes.number
};

export default InputFieldWrapper;
