import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
  font-size: 12px;
`;

const LoginButton = styled.button`
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

const SignUpButton = styled.button`
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

function NonLoginButton() {
  const navigate = useNavigate();
  const loginClick = () => {
    navigate('/login');
  };
  const signupClick = () => {
    navigate('/signup');
  };
  return (
    <ButtonWrapper>
      <LoginButton type="button" onClick={loginClick}>
        Login
      </LoginButton>
      <SignUpButton type="button" onClick={signupClick}>
        Sign up
      </SignUpButton>
    </ButtonWrapper>
  );
}

export default NonLoginButton;
