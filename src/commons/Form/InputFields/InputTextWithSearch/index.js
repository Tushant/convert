import React from 'react';
// import PropTypes from 'prop-types';
import Select from 'react-select';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'constants/theme';

let SelectStyleSetting = {
  menu: styles => ({
    ...styles,
    marginTop   : 2,
    borderRadius: 0,
  }),
  control: styles => ({
    ...styles,
    boxShadow   : 'none',
    cursor      : 'pointer',
    background  : 'transparent',
    height      : '100%',
    borderRadius: 2,
    paddingRight: 12,
    minHeight   : 34,
    border      : '1px solid #dedede',
  }),
  indicatorSeparator: () => ({ width: 0 }),
  option            : (styles, { isSelected, isFocused }) => ({
    ...styles,
    color          : '#939393',
    fontSize       : 13,
    '&:active'     : { backgroundColor: theme.color.background.hovered },
    backgroundColor: isSelected
      ? theme.color.background.selected
      : isFocused
        ? theme.color.background.hovered
        : '#fff',
  }),
  singleValue: () => ({
    fontSize: 13,
    color   : '#1B1D1F'
  }),
  placeholder: styles => ({
    ...styles,
    color   : '#939393',
    fontSize: 13
  }),
  input: styles => ({
    ...styles,
    padding: '0'
  })
};

const DropdownComponent = () => (
  <FontAwesomeIcon icon={faCaretDown} size={'1x'} color="#666666" />
);

const InputTextWithSearch = ({
  children,
  input,
  options,
  isMulti,
  ...props
}) => {
  return (
    <label className={props.className} style={{ width: '100%' }}>
      {children}
      <Select
        {...props}
        clearable={props.clearable}
        searchable={props.searchable}
        options={options}
        {...input}
        onChange={input.onChange}
        onBlur={() => input.onBlur(input.value)}
        components={{
          DropdownIndicator: props.selectIcon || DropdownComponent
        }}
        styles={SelectStyleSetting}
        isMulti={isMulti}
      />
    </label>
  );
};

// InputTextWithSearch.propTypes = {
//   children   : PropTypes.object,
//   clearable  : PropTypes.boolean,
//   input      : PropTypes.object,
//   isMulti    : PropTypes.boolean,
//   meta       : PropTypes.object,
//   options    : PropTypes.object,
//   placeholder: PropTypes.string,
//   searchable : PropTypes.boolean,
//   selectIcon : PropTypes.function,
// };

InputTextWithSearch.defaultProps = {
  searchable: false,
  clearable : false,
};

export default InputTextWithSearch;
