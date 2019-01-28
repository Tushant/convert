import React from 'react';
import Avatar from 'react-user-avatar';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

import ProfileMenu from './ProfileMenu';

const
  Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    margin-left: auto;
  `,
  Links = styled.div`
    display: flex;
    align-items: center;
    & > a {
        height: 48px;
        line-height: 48px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 15px;
        font-weight: 600;
        color: #fff;
        transition-property: background-color;
        &:hover {
          background-color: #579ef2;
        }
    }
  `,
  MenuButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 100%;
    cursor: pointer;
    transition-property: background-color;
    & > a {
      display: flex;
      flex: 1;
      height: 100%;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #579ef2;
      }
      & > img {
        width: 15px;
      }
    }
  `,
  UserMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 100%;
    cursor: pointer;
    transition-property: background-color;
    &:hover {
      background-color: #579ef2;
    }
  `,
  UserMenuContainer = styled.div`
    position: relative;
    height: 100%;
    background-color: ${props => props.active && '#579ef2'};
  `;


class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      profileMenuActive: false
    };
    this.profileMenuRef = React.createRef();
  }

  toggleProfileMenu = () => {
    this.setState({ profileMenuActive: !this.state.profileMenuActive });
  };

  render() {
    const { user } = this.props;

    return <React.Fragment>
      <Wrapper>
        <Links>
          <NavLink to="/home" activeClassName="nav-active">Home</NavLink>
          <NavLink to="/network" activeClassName="nav-active">About us</NavLink>
        </Links>
        {user && <UserMenuContainer active={this.state.profileMenuActive}>
          <UserMenu onClick={this.toggleProfileMenu} ref={this.profileMenuRef}>
            <Avatar
              size={28}
              name={user.email}
              color="#e77d00"
              className="small-avatar"
              src={user.image || ''} />
          </UserMenu>
          <ProfileMenu
            user={user}
            onClick={this.toggleProfileMenu}
            menuRef={this.profileMenuRef}
            isMenuActive={this.state.profileMenuActive} />
        </UserMenuContainer>}
      </Wrapper>
    </React.Fragment>;
  }
}


export default withRouter(Menu);
