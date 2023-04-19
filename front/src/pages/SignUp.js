import React from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { RiShareBoxFill } from 'react-icons/ri';
import Header from '../components/header/Header';
import Captcha from '../components/Captcha';
import Footer from '../components/Footer';

import logoIcon from '../image/logo-icon.png';
import SignupLeft from '../components/signUp/SignupLeft';

const SignPage = styled.div`
  height: 95vh;
  padding: 24px;
  background-color: #f1f2f3;
  display: flex;

  justify-content: center;
`;

const SignInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const SigninputBox = styled.form`
  padding: 24px;
  width: 288.45px;
  height: 596.203px;
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
const Checkbox = styled.div`
  display: flex;
  align-items: flex-start;
`;
const CheckboxInput = styled.input`
  margin-right: 4px;
`;
const Checkboxtext = styled.div`
  font-size: 12px;
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

const MoreSmallText = styled.div`
  font-size: 12px;
  margin-top: 32px;
  > a {
    color: #0074cc;
  }
`;

const SmallText = styled.div`
  font-size: 13px;
  color: #232629;
  > a {
    color: #0074cc;
  }
`;

function SignUp() {
  return (
    <div>
      <Header />
      <SignPage>
        <SignupLeft />

        <SignInput>
          <a href="https://stackoverflow.com">
            <LogoIcon src={logoIcon} alt="stackoverflow" />
          </a>
          <GoogleOauthButton type="button">
            <FcGoogle />
            &nbsp;Log in with Google
          </GoogleOauthButton>
          <SigninputBox>
            <span>Display name</span>
            <input type="text" />
            <span>Email</span>
            <input type="email" />
            <PasswordTextBox>
              <span>Password</span>
            </PasswordTextBox>
            <input type="password" />
            <Captcha />

            <Checkbox>
              <CheckboxInput type="checkbox" />
              <Checkboxtext>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </Checkboxtext>
            </Checkbox>
            <LoginButton type="button">Sign up</LoginButton>
            <MoreSmallText>
              By clicking “Sign up”, you agree to our{' '}
              <a href="https://stackoverflow.com/legal/terms-of-service/public">
                terms of service
              </a>
              ,{' '}
              <a href="https://stackoverflow.com/legal/privacy-policy">
                privacy policy
              </a>{' '}
              and{' '}
              <a href="https://stackoverflow.com/legal/cookie-policy">
                cookie policy
              </a>
            </MoreSmallText>
          </SigninputBox>
          <BottomTextBox>
            <SmallText>
              <span> Already have an account? </span>
              <a href="../pages/Login.js">Log in</a>
            </SmallText>
            <SmallText className="mt-12">
              <span>Are you an employer? </span>
              <a href="https://talent.stackoverflow.com/users/login">
                Sign up on Talent <RiShareBoxFill />
              </a>
            </SmallText>
          </BottomTextBox>
        </SignInput>
      </SignPage>
      <Footer />
    </div>
  );
}

export default SignUp;
