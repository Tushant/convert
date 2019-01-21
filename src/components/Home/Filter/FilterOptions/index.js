import React from "react";
import { Field, reduxForm } from "redux-form";
import { CirclePicker } from "react-color";

import { Options, WidgetWrapper, Button } from "../styled";
import InputTextWithSearch from "commons/Form/InputFields/InputTextWithSearch";
import Checkbox from "commons/Form/Checkbox";

const options = [
  { label: "Bold", value: "bold" },
  { label: "Italic", value: "italic" },
  { label: "Normal", value: "normal" },
  { label: "Underline", value: "underline" },
  { label: "Linethrough", value: "linethrough" },
  { label: "Overline", value: "overline" }
];

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
  "#1ab394"
];

class Filtering extends React.Component {
  render() {
    return (
      <Options>
        <label>Opacity</label>
        <input type="radio" name="opacity_change" onChange={(e, val) => this.props.opacityChange(val)} />
        <WidgetWrapper>
          <Field
            name="text_filter"
            component={InputTextWithSearch}
            multiple
            options={options}
            onChange={(e, val) => this.props.applyTextFilter(val)}
          />
        </WidgetWrapper>
        <WidgetWrapper>
          <CirclePicker
            color={colors}
            onChange={e => this.props.applyColor(e)}
          />
        </WidgetWrapper>
        <Button onClick={e => this.props.applyBlur(e)}>Gaussian Blur</Button>
        <Button>GrayScale</Button>
      </Options>
    );
  }
}

export default reduxForm({ form: "filter" })(Filtering);
