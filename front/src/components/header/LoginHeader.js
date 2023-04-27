import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import NonLoginButton from './NonLoginButton';
import LoginButton from './LoginButton';
import logo from '../../image/logo.png';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 47px;
  z-index: 10;
  border-top: 3px solid #f48225;
  background-color: #f8f9f9;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
`;

const NavContent = styled.ul`
  max-width: 1264px;
  font-size: 13px;
  color: #232629;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  max-width: 154px;
  height: 100%;
  padding: 8px;
  margin-right: 20px;
`;

const NavTextBox = styled.ol`
  display: flex;
  margin-right: 20px;
`;

const NavText = styled.li`
  text-align: center;
  height: 30px;
  width: auto;
  padding: 0px 8px;
  margin-right: 4px;
  line-height: 30px;
  gap: 10px;
  cursor: pointer;
  :hover {
    background-color: #e4e5e7;
    border-radius: 20px;
  }
  @media screen and (max-width: 1210px) {
    width: auto;
    padding: 0px;
    #hidden {
      display: none;
    }
  }
  @media screen and (max-width: 455px) {
  }
`;

function Header() {
  return (
    <StyledHeader>
      <NavContent>
        <Link to="/">
          <LogoImg src={logo} alt="stackOverflow" />
        </Link>
        <NavTextBox>
          <NavText>
            <a href="https://stackoverflow.co/" id="hidden">
              About
            </a>
          </NavText>
          <NavText>
            <a href="https://stackoverflow.co/">Products</a>
          </NavText>
          <NavText>
            <a href="https://stackoverflow.co/teams/" id="hidden">
              For Teams
            </a>
          </NavText>
        </NavTextBox>
        <Search />
        {/* <NonLoginButton /> */}
        <LoginButton />
      </NavContent>
    </StyledHeader>
  );
}

export default Header;
