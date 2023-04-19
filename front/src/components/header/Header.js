import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import logo from '../image/logo.png';

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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
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
    #hiden {
      display: none;
    }
  }
  @media screen and (max-width: 455px) {
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
  font-size: 12px;
`;

const LoginButton = styled.a`
  width: 59.45px;
  height: 33px;
  margin-right: 4px;
  text-align: center;
  background-color: #e1ecf4;
  border: 1px solid #39739d;
  border-radius: 3px;
  padding: 8px;
  color: #39739d;
  :hover {
    background-color: #b3d3ea;
  }
`;

const SignUpButton = styled.a`
  width: 68.45px;
  height: 33px;
  border-radius: 3px;
  text-align: center;
  padding: 8px;
  color: #ffffff;
  background-color: #0a95ff;
  :hover {
    background-color: #0074cc;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <NavContent>
        <a href="https://stackoverflow.com">
          <LogoImg src={logo} alt="stackoverflow" />
        </a>
        <NavTextBox>
          <NavText>
            <a href="https://stackoverflow.co/" id="hiden">
              About
            </a>
          </NavText>
          <NavText>
            <a href="https://stackoverflow.co/">Products</a>
          </NavText>
          <NavText>
            <a href="https://stackoverflow.co/teams/" id="hiden">
              For Teams
            </a>
          </NavText>
        </NavTextBox>
        <Search />
        <ButtonWrapper>
          <LoginButton href="https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f">
            Login
          </LoginButton>
          <SignUpButton href="https://stackoverflow.com/users/signup?ssrc=head">
            Sign up
          </SignUpButton>
        </ButtonWrapper>
      </NavContent>
    </StyledHeader>
  );
}

export default Header;
