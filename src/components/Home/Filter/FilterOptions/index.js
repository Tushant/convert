import React from "react";
import { Field, reduxForm } from "redux-form";
import { CirclePicker } from "react-color";

import { Options, WidgetWrapper, Button } from "../styled";
import InputTextWithSearch from "commons/Form/InputFields/InputTextWithSearch";
import Checkbox from "commons/Form/Checkbox";

const options = [
  { text: "Bold", value: "bold" },
  { text: "Italic", value: "italic" },
  { text: "Normal", value: "normal" },
  { text: "Underline", value: "underline" },
  { text: "Linethrough", value: "linethrough" },
  { text: "Overline", value: "overline" }
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
        <Field
          name="opacity_change"
          component={Checkbox}
          type="radio"
          onChange={(e, val) => this.props.opacityChange(val)}
          label="Opacity"
        />
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
