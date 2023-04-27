import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import logoIcon from '../image/logo-icon.png';
import OauthButton from '../components/login/OauthButton';
import BottomText from '../components/login/BottomText';

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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
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
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: {
        email,
        password,
      },
      withCredentials: true,
    })
      .then(res => {
        if (res.data) {
          alert('로그인 성공');
          navigate('/question/list');
        }
      })
      .catch(err => {
        console.error('POST 요청 실패: ', err);
        setEmail('');
        setPassword('');
        alert('등록되지 않은 회원입니다.');
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
