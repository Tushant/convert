import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const InputFieldWrapper = styled.div`
  margin-top: 0;
  position: relative;
`;

const Wrapper = styled.div`
  ${props =>
    props.readOnly
      ? `
    flex          : 1;
    height        : 40;
    justify-content: 'flex-start'
    `
      : `
    border-width   : 1px;
    border-color   : '#e2e2e2';
    border-radius  : 4px;
    flex          : 1;
    justify-content: 'center';
    `}
  ${props =>
    props.errorField &&
    `margin-top      : 1;
  margin-bottom   : 1;
  border-color    : #de0a17;
  background-color: #fdeded`}
  & > svg {
    position: absolute;
    bottom: 14px;
    right: 8px;
    color: #1b1d1f;
    width: 10px;
    height: 8px;
  }
`;

const Text = styled.p`
  width: 20;
  align-items: center;
  justify-content: center;
  line-height: 38;
  height: 100%;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 2;
`;

const StyledTextInput = styled.input`
  color: #373737;
  font-size: 13px;
  flex: 1;
  z-index: 1000;
  border: 1px solid #dedede;
  border-radius: 2px;
  padding: 6px 10px;
  width: 100%;
  box-sizing: border-box;
  ${props => props.disabled && 'background: #dedede'}
  ${props => props.inputStyle && css(...props.inputStyle)};
  ::placeholder {
    line-height: 11px;
    font-size: 13px;
    color: #b5b5b5;
    padding: 10px;
  }
`;

const InputText = ({
  input: { onChange, onFocus, onBlur, ...restInput },
  meta,
  readonly,
  additionalElement,
  placeholder,
  additionalText,
  inputStyle,
  isNumber,
  ...props
}) => {
  // let wrapper = readonly ? styles.readonlyField : styles.field;
  // let errorField = meta && meta.error && meta.touched ? styles.errorField : '';
  restInput.value = (restInput.value || '').toString();
  return (
    <React.Fragment>
      <InputFieldWrapper>
        <Wrapper
          readOnly={readonly}
          errorField={meta && meta.error && meta.touched}
        >
          {additionalElement}
          {additionalText && <Text>{additionalText}</Text>}
          <StyledTextInput
            inputStyle={inputStyle}
            onChange={value => {
              onChange(isNumber ? parseFloat(value) : value);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            {...restInput}
            editable={!readonly}
            disabled={props.disabled}
            placeholder={placeholder}
          />
          {props.icon && props.icon}
        </Wrapper>
      </InputFieldWrapper>
      <React.Fragment>
        {meta && meta.touched && meta.error && (
          <ErrorText>{meta.error}</ErrorText>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

InputText.propTypes = {
  additionalElement: PropTypes.object,
  additionalText   : PropTypes.string,
  input            : PropTypes.object,
  inputStyle       : PropTypes.string,
  isNumber         : PropTypes.bool,
  meta             : PropTypes.object,
  placeholder      : PropTypes.string,
  readonly         : PropTypes.bool
};

InputText.defaultProps = {
  readonly: false
};

export default InputText;
