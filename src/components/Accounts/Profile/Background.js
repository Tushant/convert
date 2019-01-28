import React from 'react';

import Grid from 'Components/Generics/Grid';
import Modal from 'Components/Generics/Modal';
import Accordion from 'Components/Generics/Accordion';
import AccordionItem from 'Components/Generics/Accordion/AccordionItem';
import AddIconOutline from 'Components/Generics/Icons/svg-icons/add-icon-outline';
import Experiences from './Experiences';
import * as styled from './styled';

const initialValues = {
  title: '',
  company: '',
  location: '',
  from: '',
  to: '',
  isActive: '',
  headline: '',
  description: '',
};

class Background extends React.PureComponent {
  state = {
    experiences: initialValues,
    show: false,
  };

  toggleTab = id => {
    this.setState(state => ({
      [id]: !state[id],
    }));
  };

  toggleShow = () =>
    this.setState(state => ({
      show: !state.show,
    }));

  handleChange = ({ target: { name, value } }) => {
    console.log('e', name, value);
    this.setState(prevState => ({
      experiences: { ...prevState.experiences, [name]: value },
    }));
  };

  handleAutocompleteChange = (e, value) =>
    this.setState(prevState => ({ experiences: { ...prevState.experiences, title: value } }));

  handleSelect = value => this.setState(prevState => ({ experiences: { ...prevState.experiences, title: value } }));

  render() {
    const { experiences, show } = this.state;
    console.log('experience', this.state);
    return (
      <React.Fragment>
        {/* <styled.ProfileWrapper> */}
        <Grid columns={1}>
          <h2>Experiences</h2>
          <Accordion>
            <AccordionItem
              onToggle={this.toggleTab}
              name="experience"
              expanded={this.state.experience}
              caption="Experience"
            >
              <AddIconOutline onClick={() => this.toggleShow(true)} color="#009688" size={40} />
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem onToggle={this.toggleTab} name="skills" expanded={this.state.skills} caption="Skills">
              <AddIconOutline onClick={() => this.toggleShow(true)} color="#009688" size={40} />
            </AccordionItem>
          </Accordion>
          <styled.Form action="" method="post" column>
            <Modal
              position="centerCenter"
              open={show}
              closeBtn
              closeOnEsc
              onClose={() => this.toggleShow(false)}
              overlayStyle="background-color: transparent"
              // contentStyle="flex-direction: column"
              closeOnOverlay
            >
              <Experiences
                experiences={experiences}
                handleChange={this.handleChange}
                handleAutocompleteChange={this.handleAutocompleteChange}
                handleSelect={this.handleSelect}
              />
            </Modal>
          </styled.Form>
        </Grid>
        {/* </styled.ProfileWrapper> */}
      </React.Fragment>
    );
  }
}

export default Background;
