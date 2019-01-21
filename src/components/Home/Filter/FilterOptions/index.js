import React from "react";
import styled from "styled-components";
import InputRange from 'react-input-range';

import Checkbox from "commons/Form/Checkbox";

const SingleWidget = styled.div`
  margin: 20px 0;
`;

const RangeWrapper = styled.div`
  margin: 35px 16px;
`;


class Filtering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacityValue: 0,
      blurValue: 0,
      brightnessValue: 0,
      contrastValue: 0
    };
  }
  handleCheckboxChange = event => {
   this.setState({ checked: event.target.checked }, () => {
     this.props.applyGrayScale(this.state.checked)
   })
 }
  render() {
    return (
      <React.Fragment>
        <SingleWidget>
          <label>
            <Checkbox checked={this.state.checked} onChange={this.handleCheckboxChange} />
            <span style={{ marginLeft: 8 }}>GrayScale?</span>
          </label>
        </SingleWidget>
        <SingleWidget>
          <label>Opacity</label>
          <RangeWrapper>
            <InputRange
            maxValue={10}
            minValue={0}
            value={this.state.opacityValue}
            onChange={value => this.setState({ opacityValue: value }, () => this.props.applyOpacity(this.state.opacityValue))} />
          </RangeWrapper>
        </SingleWidget>
        <SingleWidget>
          <label>Blur</label>
          <RangeWrapper>
            <InputRange
            maxValue={5}
            minValue={0}
            value={this.state.blurValue}
            onChange={value => this.setState({ blurValue: value }, () => this.props.applyBlur(this.state.blurValue))} />
          </RangeWrapper>
        </SingleWidget>
        <SingleWidget>
          <label>Brightness</label>
          <RangeWrapper>
            <InputRange
            maxValue={5}
            minValue={0}
            value={this.state.brightnessValue}
            onChange={value => this.setState({ brightnessValue: value }, () => this.props.applyBrightness(this.state.brightnessValue))} />
          </RangeWrapper>
        </SingleWidget>
        <SingleWidget>
          <label>Contrast</label>
          <RangeWrapper>
            <InputRange
            maxValue={5}
            minValue={0}
            value={this.state.contrastValue}
            onChange={value => this.setState({ contrastValue: value }, () => this.props.applyContrast(this.state.contrastValue))} />
          </RangeWrapper>
        </SingleWidget>
      </React.Fragment>
    );
  }
}

export default Filtering;
