import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  flex: 1;
`;

const ErrorWrapper = styled.div`
  margin-left: 10px;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 2;
`;

const FieldWrapper = styled.div`
  height: 46px;
  border-width: 1px;
  border-color: '#e2e2e2';
  border-radius: 4px;
  flex: 1;
  justify-content: 'center';
  padding-left: 10px;
  margin-top: 5px;
  ${props =>
    props.errorField &&
    `
    margin-top      : 1px;
    margin-bottom   : 1px;
    border-color    : #de0a17;
    background-color: #fdeded
    `}
`;

const StyledTextArea = styled.textarea`
  color: #373737;
  font-size: 16px;
  flex: 1;
  z-index: 1000;
  border: 1px solid #dedede;
  border-radius: 2px;
  width: 100%;
  ::placeholder {
    color: #DEDEDE;
    font-size: 13px;
    padding: 10px;
  }
`;

const InputFieldWrapper = styled.div`
  margin-top: 0;
  position: relative;
  padding-horizontal: 20px;
  padding-bottom: 20px;
  height: ${props => props.height && props.height};
  ${props => props.css && css(...props.css)};
`;

const TextArea = ({
  input: { onChange, onFocus, onBlur, ...restInput },
  meta,
  readonly,
  placeholder,
  rows = 3,
  numberOfLines = 4,
  style
}) => {
  return (
    <Wrapper>
      <InputFieldWrapper height={numberOfLines * 40} style={{ flex: 1 }} css={style}>
        <FieldWrapper errorField={meta && meta.error && meta.touched}>
          <StyledTextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            {...restInput}
            multiline={true}
            numberOfLines={numberOfLines}
            editable={!readonly}
            rows={rows}
            placeholder={placeholder}
          />
        </FieldWrapper>
      </InputFieldWrapper>
      <ErrorWrapper>{meta && meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}</ErrorWrapper>
    </Wrapper>
  );
};

TextArea.propTypes = {
  input        : PropTypes.object,
  meta         : PropTypes.object,
  numberOfLines: PropTypes.number,
  readonly     : PropTypes.bool,
  style        : PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

export default TextArea;
