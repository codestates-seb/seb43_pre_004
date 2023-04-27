import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Redirect } from 'react-router-dom';
import Captcha from './Captcha';

const InputBox = styled.input`
  margin: 6px 0px 12px;
  padding: 7.8px 9.1px;
  width: 268px;
  height: 32.59px;
  border: 1px solid #d5d7d4;
  border-radius: 3px;
  :focus {
    border: 1px solid #b3d3ea;
    outline: 2px solid #d0e3f1;
  }
`;

const InputBoxTitle = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #0c0d0e;
  margin: 2px 0px;
  padding: 0px 2px;
`;

const PasswordInfo = styled.p`
  font-size: 12px;
  color: #6a737c;
  margin-bottom: 4px;
`;

const SingUpButton = styled.button`
  width: 268px;
  height: 37.8px;
  background-color: #0a95ff;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin: 2px 4px;
  padding: 10.4px;
  :hover {
    background-color: #3172c6;
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 12px 0px;
`;
const CheckboxInput = styled.input`
  margin-right: 4px;
`;
const CheckBoxText = styled.div`
  font-size: 12px;
  color: #0c0d0e;
`;

const MoreSmallText = styled.div`
  font-size: 12px;
  margin-top: 32px;
  color: #6a737c;
  > a {
    color: #0074cc;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  color: #cf0000;
  font-size: 10px;
`;

function SignUpInput() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
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

  const handleSubmit = e => {
    e.preventDefault(); // 폼 기본 제출 방지

    // 서버로 보낼 데이터 생성

    // POST 요청 보내기
    axios({
      method: 'POST',
      url: '/signup',
      data: {
        nickname,
        email,
        password,
      },
      // withCredentials: true,
    })
      .then(res => {
        if (res.data) {
          console.log('POST 요청 성공: ', res.data);
          alert('회원가입 성공');
          navigate('/login');
        }
      })
      .catch(err => {
        console.error('POST 요청 실패: ', err);
        alert('회원가입 조건에 맞지 않은 회원입니다.');
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
    <div onSubmit={handleSubmit}>
      <InputBoxTitle>Display name</InputBoxTitle>
      <InputBox
        type="text"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />
      <InputBoxTitle>Email</InputBoxTitle>
      <InputBox type="email" value={email} onChange={handleEmail} />
      <ErrorMessage>
        {!emailValid && email.length > 0 && (
          <div>올바른 이메일을 입력하세요.</div>
        )}
      </ErrorMessage>
      <InputBoxTitle>Password</InputBoxTitle>
      <InputBox type="password" value={password} onChange={handlePw} />
      <ErrorMessage>
        {!passwordValid && password.length > 0 && (
          <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
        )}
      </ErrorMessage>
      <PasswordInfo>
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </PasswordInfo>
      <Captcha />
      <Checkbox>
        <CheckboxInput type="checkbox" />
        <CheckBoxText>
          Opt-in to receive occasional product updates, user research
          invitations, company announcements, and digests.
        </CheckBoxText>
      </Checkbox>

      <SingUpButton type="button" onClick={handleSubmit} disabled={notAllow}>
        Sign up
      </SingUpButton>

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
    </div>
  );
}

export default SignUpInput;
