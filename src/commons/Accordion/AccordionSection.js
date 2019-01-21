import React, { Component } from "react";
import styled from 'styled-components';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordionWrapper = styled.div`
  background: #fff;
  padding: 10px;
  margin: 20px 0;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  padding: 5px 15px;
`;

const Span = styled.span`
  color: #645d64;
`;

class AccordionSection extends Component {

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <React.Fragment>
        <AccordionWrapper onClick={onClick}>
          <Span>{label}</Span>
          <div style={{ float: "right" }}>
            {!isOpen && <span><FontAwesomeIcon icon={faAngleUp} /></span>}
            {isOpen && <span><FontAwesomeIcon icon={faAngleDown} /></span>}
          </div>
        </AccordionWrapper>
        {isOpen && (
          <ContentWrapper>
            {this.props.children}
          </ContentWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default AccordionSection;
