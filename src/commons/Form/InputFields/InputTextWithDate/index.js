import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-dates/lib/css/_datepicker.css';

import { ICON_AFTER_POSITION } from './constants';

const DatePickerWrapper = styled.div`
  div {
    /* width: 100%; */
    input {
      ::placeholder {
        line-height: 11px;
        font-size: 13px;
        color: #b5b5b5;
        padding: 10px;
      }
    }
  }
`;

const StyledDateInput = styled(SingleDatePicker)`
  & {
    .SingleDatePicker {
      display: block;
    }
    .DateInput {
      width: 100%;
      display: block;
    }
    .SingleDatePickerInput_calendarIcon {
      position: absolute;
      right: 0;
      top: 5px;
    }
  }
`;

class InputTextWithDate extends React.PureComponent {
  state = {
    focused: false
  };

  onFocusChange = value => {
    this.setState({ focused: !this.state.focused });
    const { input } = this.props;
    input.onFocus(value);
  };

  render() {
    const {
      input,
      meta: { touched, error },
      placeholder,
      disabled
    } = this.props;
    const { focused } = this.state;
    return (
      <React.Fragment>
        <DatePickerWrapper>
          <StyledDateInput
            showClearDate={true}
            showDefaultInputIcon={true}
            displayFormat="YYYY-MM-DD"
            numberOfMonths={1}
            disabled={disabled}
            id={input.name}
            date={input.value}
            placeholder={placeholder}
            onDateChange={input.onChange}
            focused={focused}
            onFocusChange={this.onFocusChange}
            inputIconPosition={
              this.props.inputIconPosition || ICON_AFTER_POSITION
            }
            {...this.props}
          />
          {error && touched && <span>{error}</span>}
        </DatePickerWrapper>
      </React.Fragment>
    );
  }
}

InputTextWithDate.propTypes = {
  active     : PropTypes.boolean,
  disabled   : PropTypes.boolean,
  error      : PropTypes.boolean,
  input      : PropTypes.object,
  meta       : PropTypes.object,
  placeholder: PropTypes.string,
  touched    : PropTypes.boolean
};

export default InputTextWithDate;
