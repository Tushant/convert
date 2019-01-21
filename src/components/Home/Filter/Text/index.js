import React from "react";
import styled from "styled-components";
import { CirclePicker } from "react-color";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputTextWithSearch from "commons/Form/InputFields/InputTextWithSearch";

import { fontOptions, colorOptions, fontSize, fontFamilyOptions } from "commons/settings";

const StyledText = styled.span`
  font-size: 1.1em;
  margin-left: 10px;
`;

const TextWrapper = styled.div`
  margin-bottom: 20px;
`;

const SubtitleIcon = styled(FontAwesomeIcon)`
  font-size: 10px;
`;

const WidgetWrapper = styled.div`
  margin: 10px 0;
`;

const SingleWidget = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  margin-bottom: 10px;
  :after {
    display: block;
    content: "";
    margin: 6px 0;
  }
`;

class Text extends React.Component {
  state = {
    fontStyle: [],
    fontSize: '',
    fontFamily: ''
  }

  handleFontStyleChange = (selectedOption) => {
    console.log('option Selected', selectedOption);
    this.setState({ fontStyle:selectedOption }, () => this.props.applyFontStyle(this.state.fontStyle));
  }

  handleFontSizeChange = (selectedOption) => {
    console.log('option Selected', selectedOption);
    this.setState({ fontSize: selectedOption }, () => this.props.applyFontSize(this.state.fontSize));
  }

  handleFontFamilyChange = (selectedOption) => {
    console.log('option Selected', selectedOption);
    this.setState({ fontFamily: selectedOption }, () => this.props.applyFontFamily(this.state.fontFamily));
  }

  render() {
    return (
      <React.Fragment>
        <TextWrapper>
          <span onClick={() => this.props.addText(true)}>
            <FontAwesomeIcon icon={faFont} />
            <StyledText>Add Title</StyledText>
          </span>
        </TextWrapper>
        <TextWrapper>
          <span onClick={(e, val) => this.props.addSubtitle(true)}>
            <FontAwesomeIcon icon={faFont} />
            <SubtitleIcon icon={faFont} size={"1x"} />
            <StyledText>Add Subtitle</StyledText>
          </span>
        </TextWrapper>
        <WidgetWrapper>
          <Label>Font Style</Label>
          <InputTextWithSearch
            options={fontOptions}
            isMulti
            placeholder="Select Font Style"
            onChange={this.handleFontStyleChange}
          />
          <SingleWidget>
            <Label>Font Family</Label>
            <InputTextWithSearch
              options={fontFamilyOptions}
              placeholder="Select Font Family"
              onChange={this.handleFontFamilyChange}
            />
          </SingleWidget>
          <SingleWidget>
            <Label>Font Size</Label>
            <InputTextWithSearch
              options={fontSize}
              placeholder="Select Font Size"
              onChange={this.handleFontSizeChange}
            />
          </SingleWidget>
          <SingleWidget>
            <Label>Font Color</Label>
            <CirclePicker
              color={colorOptions}
              onChange={e => this.props.applyColor(e)}
            />
          </SingleWidget>
        </WidgetWrapper>
      </React.Fragment>
    );
  }
}

export default Text;
