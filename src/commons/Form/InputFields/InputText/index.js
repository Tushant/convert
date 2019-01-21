import React from "react";
import styled, { css } from "styled-components";

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
  ${props => props.disabled && "background: #dedede"}
  ${props => props.inputStyle && css(...props.inputStyle)};
  ::placeholder {
    line-height: 11px;
    font-size: 13px;
    color: #b5b5b5;
    padding: 10px;
  }
`;

const InputText = ({
  readonly,
  additionalElement,
  placeholder,
  additionalText,
  inputStyle,
  isNumber,
  onChange,
  ...props
}) => {
  // let wrapper = readonly ? styles.readonlyField : styles.field;
  // let errorField = meta && meta.error && meta.touched ? styles.errorField : '';
  return (
    <React.Fragment>
      <StyledTextInput
        inputStyle={inputStyle}
        onChange={value => {
          onChange(isNumber ? parseFloat(value) : value);
        }}
        editable={!readonly}
        disabled={props.disabled}
        placeholder={placeholder}
      />
      {props.icon && props.icon}
    </React.Fragment>
  );
};

InputText.defaultProps = {
  readonly: false
};

export default InputText;
