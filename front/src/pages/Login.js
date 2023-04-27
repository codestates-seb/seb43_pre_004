import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import logoIcon from '../image/logo-icon.png';
import OauthButton from '../components/login/OauthButton';
import BottomText from '../components/login/BottomText';

const User = {
  memberId: 1,
  email: 'logintest123@naver.com',
  nickname: 'logintest123',
  blob: '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',
  location: null,
  webLink: null,
  twitterLink: null,
  githubLink: null,
  realName: null,
  createdDate: '2023-04-27T13:14:50.5328607',
  latestLog: '2023-04-27T13:14:50.5328607',
  visited: 0,
};

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;

const OauthButtonBox = styled.div`
  width: 289px;
  height: 38px;
  border: none;
  background-color: #fff;
  border: 1px solid #d5d7da;
  border-radius: 5px;
  margin: 30px 0px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #f8f9f9;
  }
`;

const LogoIcon = styled.img`
  width: 32px;
  height: 37px;
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

const ErrorMessage = styled.div`
  margin-top: 8px;
  color: #cf0000;
  font-size: 10px;
`;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = e => {
    setEmail(e.target.value);
    const regex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = e => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const onClickConfirmButton = () => {
    axios({
      method: 'POST',
      url: '/login/connection',
      headers: {
        // Authorization: `Bearer ${token}`,
      },
      data: {
        email,
        password,
      },
    })
      .then(res => {
        if (res.data.success) {
          alert('로그인 성공');
          navigate('/question/list');
        } else {
          setEmail('');
          setPassword('');
          alert('등록되지 않은 회원입니다.');
        }
      })
      .catch(err => {
        console.error('GET 요청 실패: ', err);
      });
  };
  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  return (
    <LoginPage>
      <a href="https://stackoverflow.com">
        <LogoIcon src={logoIcon} alt="stackoverflow" />
      </a>
      <OauthButtonBox>
        <OauthButton btnName="Log in" />
      </OauthButtonBox>
      <LoginInputBox>
        <span>Email</span>
        <input type="email" value={email} onChange={handleEmail} />
        <ErrorMessage>
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력하세요.</div>
          )}
        </ErrorMessage>
        <PasswordTextBox>
          <span>Password</span>
          <a href="https://stackoverflow.com/users/account-recovery">
            Forgot password?
          </a>
        </PasswordTextBox>
        <input type="password" value={password} onChange={handlePw} />
        <ErrorMessage>
          {!passwordValid && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </ErrorMessage>

        <LoginButton
          type="button"
          disabled={notAllow}
          onClick={onClickConfirmButton}
        >
          Log in
        </LoginButton>
      </LoginInputBox>
      <BottomText />
    </LoginPage>
  );
}

export default Login;
