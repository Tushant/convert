import React from 'react';

import { Label, Checkbox, Slider } from './styled';

class Toggle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Label>
          <Checkbox type="Checkbox" />
          <Slider round />
        </Label>
      </React.Fragment>
    );
  }
}

export default Toggle;
