import React from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { RiShareBoxFill } from 'react-icons/ri';
import logoIcon from '../image/logo-icon.png';

const LoginPage = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;

const LogoIcon = styled.img`
  width: 32px;
  height: 37px;
`;

const GoogleOauthButton = styled.button`
  width: 289px;
  height: 38px;
  border: 1px solid #d5d7da;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 24px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3b4045;
  font-size: 13px;
  :hover {
    background-color: #f8f9f9;
  }
`;

const LoginInputBox = styled.form`
  padding: 24px;
  width: 288.45px;
  height: 234.2px;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.1) 0px 2px 15px -10px;
  > input {
    width: 240.45px;
    height: 32.59px;
    border: 1px solid #d5d7d4;
    border-radius: 3px;
    :focus {
      border: 1px solid #b3d3ea;
      outline: 2px solid #d0e3f1;
    }
  }
  > span {
    font-size: 15px;
    font-weight: 500;
  }
`;

const PasswordTextBox = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  > span {
    font-size: 15px;
    font-weight: 500;
  }
  > a {
    font-size: 12px;
    color: #0074cc;
  }
`;

const LoginButton = styled.button`
  width: 240.45px;
  height: 37.8px;
  background-color: #0a95ff;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  :hover {
    background-color: #3172c6;
  }
`;

const BottomTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  padding: 16px;
  font-size: 13px;
  text-align: center;
  > .mt-12 {
    margin-top: 12px;
  }
`;

const SmallText = styled.div`
  color: #232629;
  > a {
    color: #0074cc;
  }
`;

function Login() {
  return (
    <LoginPage>
      <a href="https://stackoverflow.com">
        <LogoIcon src={logoIcon} alt="stackoverflow" />
      </a>
      <GoogleOauthButton type="button">
        <FcGoogle />
        &nbsp;Log in with Google
      </GoogleOauthButton>
      <LoginInputBox>
        <span>Email</span>
        <input type="email" />
        <PasswordTextBox>
          <span>Password</span>
          <a href="https://stackoverflow.com/users/account-recovery">
            Forgot password?
          </a>
        </PasswordTextBox>
        <input type="password" />
        <LoginButton type="button">Log in</LoginButton>
      </LoginInputBox>
      <BottomTextBox>
        <SmallText>
          <span> Don&apos;t have an account? </span>
          <a href="https://stackoverflow.com/users/signup?ssrc=head">Sign up</a>
        </SmallText>
        <SmallText className="mt-12">
          <span>Are you an employer? </span>
          <a href="https://talent.stackoverflow.com/users/login">
            Sign up on Talent <RiShareBoxFill />
          </a>
        </SmallText>
      </BottomTextBox>
    </LoginPage>
  );
}

export default Login;
