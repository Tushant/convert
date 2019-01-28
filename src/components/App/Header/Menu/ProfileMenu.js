import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Text } from "commons/styled";
import theme from "constants/theme";
import menu from "./menu";
import clickDetector from "commons/hoc/clickdetector";

const Item = `
    height: 36px;
    color: #666666;
    cursor: pointer;
    vertical-align: center;
    display: block;
    font-size: 13px;
    display: flex;
    margin: 0 -25px;
    padding: 0 25px;
    align-items: center;

    &:hover {
      background-color: #f8f8f8;
    }
  `;

const MenuWrapper = styled.div`
    position: absolute;
    width: 300px;
    background-color: #fff;
    top: 47px;
    right: 0;
    width: 288px;
    padding: 25px 25px 10px;
    border: 1px solid #dddddd;
    box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.0832201);
    border-radius: 2px;
    opacity: 0;
    transition-property: opacity;
    visibility: hidden;
    &.active {
      visibility: visible;
      opacity: 1;
    }
  `,
  Info = styled.div`
    display: flex;
    align-items: center;
  `,
  ProfileLink = styled(NavLink)`
    margin: 15px 0 0;
    color: ${theme.color.text.link};
    font-size: 13px;
    font-weight: 600;
    display: block;
  `,
  Name = styled(Text)`
    font-weight: 600;
    margin-bottom: 4px;
  `,
  MenuItem = styled(NavLink)`
    ${Item}
  `,
  Header = styled(Text)`
    font-weight: 600;
    letter-spacing: 0.5;
    margin-top: 20px;
    font-size: 11px;
    border-top: 1px solid #dedede;
    height: 36px;
    vertical-align: center;
    display: flex;
    align-items: center;
  `,
  LogOutBtnWrapper = styled.div`
    border-top: 1px solid #dedede;
    margin-top: 20px;
    padding-top: 10px;
  `,
  LogOutButton = styled(Text)`
    ${Item}
    padding: 0px 25px;
  `,
  Details = styled.div`
    flex: 1;
  `;

const ProfileMenu = ({ user, isMenuActive, onClick }) => {
  return (
    <MenuWrapper className={isMenuActive && "active"}>
      <div>
        <Info>
          <Details>
            <Name type="medium">{user.email}</Name>
          </Details>
        </Info>
        <ProfileLink to={`/profile/${user._id}`} onClick={onClick}>
          My Account
        </ProfileLink>
      </div>
      {menu.map((item, index) => (
        <React.Fragment key={index}>
          <Header>{item.name.toUpperCase()}</Header>
          {item.subMenu.map((subMenuItem, subIndex) => {
            if (!user.is_staff) return null;

            return (
              <MenuItem to={subMenuItem.link} key={subIndex}>
                {subMenuItem.name}
              </MenuItem>
            );
          })}
        </React.Fragment>
      ))}
      <LogOutBtnWrapper>
        <LogOutButton>Log Out</LogOutButton>
      </LogOutBtnWrapper>
    </MenuWrapper>
  );
};

export default clickDetector(ProfileMenu);
