import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Checkbox from 'commons/Form/Checkbox';

class Text extends React.Component {
  render() {
    return (
      <div className="text-options">
        <div>
          <Field name="add_text" component={Checkbox} label="Show Title" onChange={(e, val) => this.props.addText(val)} />
        </div>
        <div>
          <Field name="add_subtitle" component={Checkbox} label="Show Subtitle" onChange={(e, val) => this.props.addText(val)} />
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'text',
})(Text);
