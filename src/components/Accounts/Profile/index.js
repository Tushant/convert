import React from 'react';

import { withApollo } from 'react-apollo';

import Stepper from 'Components/Generics/Stepper';
import Navbar from 'Components/Generics/Navbar';
import Grid from 'Components/Generics/Grid';
import { PROFILE_STEP } from 'Utils/constants';
import Personal from './Personal';
import Background from './Background';
import Achievement from './Achievement';

// query {
//  profile {
//   id
//   experience {
//     edges {
//       node {
//         id
//       }
//     }
//   }
//   age
// }
// }
//

class Profile extends React.Component {
  state = {
    step: 1,
  };

  handleNext = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handlePrevious = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  renderComponents() {
    const { step } = this.state;
    const stepFromLocalstorage = localStorage.getItem(PROFILE_STEP);
    switch (Number(stepFromLocalstorage) || step) {
      case 1:
        return <Personal handleNext={this.handleNext} step={step} />;
      case 2:
        return <Background handleNext={this.handleNext} handlePrevious={this.handlePrevious} step={step} />;
      case 3:
        return <Achievement handleNext={this.handleNext} handlePrevious={this.handlePrevious} step={step} />;
      default:
        return <Personal handleNext={this.handleNext} step={step} />;
    }
  }

  render() {
    const { step } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <Stepper
          steps={[{ name: 'Personal', id: 1 }, { name: 'Background', id: 2 }, { name: 'Achievement', id: 3 }]}
          activeStep={step}
        />
        <Grid columns={1}>{this.renderComponents()}</Grid>
      </React.Fragment>
    );
  }
}

export default withApollo(Profile);
