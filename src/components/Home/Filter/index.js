import React from 'react';
import styled from 'styled-components';
import { CirclePicker } from "react-color";

import Accordion from 'commons/Accordion';
import InputText from 'commons/Form/InputFields/InputText';
import Text from './Text';
import FilterOptions from './FilterOptions';

import { colorOptions } from 'commons/settings';

const Wrapper = styled.div`
  padding: 0 20px;
  height: calc(100vh - 180px);
  overflow-y: scroll;
`;

const AccordionTitle = styled.div`

`;

const AccordionContent = styled.div`

`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

const Label = styled.label`
  :after {
    display: block;
    content: "";
    margin: 6px 0;
  }
`;

const SingleWidget = styled.div`
  margin: 20px 0;
`;

const Filter = (props) => {
  const [canvas, setCanvas] = React.useState({ width: '', height: ''});
  const handleCanvasWidth = e => setCanvas({ width: e.target.value })
  const handleCanvasHeight = e => setCanvas({ height: e.target.value })
    return (
      <Wrapper>
        <Accordion allowMultipleOpen>
          <AccordionTitle label="Text">
            <AccordionContent>
              <Text
                addText={props.addText}
                addSubtitle={props.addSubtitle}
                applyFontStyle={props.applyFontStyle}
                applyFontSize={props.applyFontSize}
                applyFontFamily={props.applyFontFamily}
                applyColor={props.applyColor}
              />
            </AccordionContent>
          </AccordionTitle>
          <AccordionTitle label="Image">
            <AccordionContent>
              <FilterOptions
                applyOpacity={props.applyOpacity}
                applyBlur={props.applyBlur}
                applyBrightness={props.applyBrightness}
                applyContrast={props.applyContrast}
                applyGrayScale={props.applyGrayScale}
              />
            </AccordionContent>
          </AccordionTitle>
          <AccordionTitle label="Upload">
            <AccordionContent>
              Upload Here
            </AccordionContent>
          </AccordionTitle>
          <AccordionTitle label="Canvas Setting" isOpen>
            <AccordionContent>
              <Row>
                <Column>
                  <Label>Width</Label>
                  <InputText name="width" placeholder="Width" value={canvas.width} onChange={handleCanvasWidth} />
                </Column>
                <Column>
                  <Label>Height</Label>
                  <InputText name="height" placeholder="Height" value={canvas.height} onChange={handleCanvasHeight} />
                </Column>
              </Row>
              <SingleWidget>
                <Label>Background Color</Label>
                <CirclePicker
                  color={colorOptions}
                  onChange={e => props.applyBackgroundColor(e)}
                />
              </SingleWidget>
            </AccordionContent>
          </AccordionTitle>
        </Accordion>
      </Wrapper>
    );
}

export default Filter
