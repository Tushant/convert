import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { compose, withProps, withState } from 'recompose';

import clickDetector from 'commons/hoc/clickdetector';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import MenuList from './MenuList';
import { connectMenu, appsMenu, demoMenu } from './data';
import DashboardIcon from 'assets/icons/dashboardIcon-active.svg';

const
  Wrapper = styled.div`
    position: absolute;
    opacity: 0;
    top: 0; right: 0;
    width: 300px;
    height: 100vh;
    z-index: 2;
    background: #fff;
    box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.07);
    transition-property: opacity;
    visibility: hidden;
    &.active {
      visibility: visible;
      opacity: 1;
    }
  `,
  DashboardSection = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    &.demoSection {
      z-index: 1;
      visibility: hidden;
      opacity: 0;
      transition-property: opacity;
      &.active {
        visibility: visible;
        opacity: 1;
      }
    }
  `,
  DashboardSectionContent = styled.div`
    padding: 30px 35px 35px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 90%;
    & > button {
      color: #2186DE;
      font-size: 15px;
      text-align: left;
    }
  `,
  DashboardSectionHeader = styled.div`
    height: 48px;
    width: 100%;
    background: #fff;
    padding-top: 17px;
    & > a, button {
      color: #2186DE;
      font-size: 15px;
      margin-left: 45px;
      padding: 0;
    }
  `,
  DashboardBtn = styled.button`
    width: 48px;
    height: 48px;
    position: absolute;
    top: 0; right: 0;
    z-index: 2;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

class Dashboard extends React.Component {
  toggleMenuSection = toggleValue => {
    this.props.updateActive(toggleValue === false ? toggleValue : !this.props.active);
  };

  closeMenu = () => {
    this.props.updateActive(false);
    this.props.onToggle();
  };

  render() {
    let { isMenuActive } = this.props;
    return <Wrapper className={isMenuActive && 'active'}>
      <DashboardBtn onClick={this.closeMenu}>
        <img src={DashboardIcon} alt="" />
      </DashboardBtn>
      <DashboardSection>
        <DashboardSectionHeader>
          <NavLink to="/">Avenue</NavLink>
        </DashboardSectionHeader>
        <DashboardSectionContent>
          <MenuList items={connectMenu} title="Connect" />
          <MenuList items={appsMenu} title="Apps" />
          <button onClick={this.toggleMenuSection}>
            More <FontAwesomeIcon icon={faChevronRight} size={8} color="#2186DE" style={{ position: 'relative', top: 1 }} />
          </button>
        </DashboardSectionContent>
      </DashboardSection>
      <DashboardSection className={this.props.active ? 'demoSection active' : 'demoSection'}>
        <DashboardSectionHeader>
          <button onClick={this.toggleMenuSection}>
            <FontAwesomeIcon icon={faChevronLeft} size={8} color="#2186DE" /> Back to Modules
          </button>
        </DashboardSectionHeader>
        <DashboardSectionContent>
          <MenuList items={demoMenu} title="Demo" viewStyleClass="listing" />
        </DashboardSectionContent>
      </DashboardSection>
    </Wrapper>;
  }
}

Dashboard.propTypes = {
  active      : PropTypes.bool,
  isMenuActive: PropTypes.bool,
  onToggle    : PropTypes.func,
  updateActive: PropTypes.func
};

export default compose(
  withState('active', 'updateActive', false),
  withProps(props => ({
    onClick: () => {
      props.updateActive(false);
      props.onToggle();
    }
  })),
  clickDetector
)(Dashboard);
