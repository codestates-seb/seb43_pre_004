import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

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

function SignUpInput() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const token = localStorage.getItem('access_token');

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
        console.log('POST 요청 성공: ', res.data);
      })
      .catch(err => {
        console.error('POST 요청 실패: ', err);
      });

    // fetch('https://2c58-115-140-189-21.jp.ngrok.io/signup', {
    //   method: 'POST',
    //   mode: 'no-cors', // no-cors, *cors, same-origin
    //   cache: 'no-store', // *default, no-cache, reload, force-cache, only-if-cached
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     // 'ngrok-skip-browser-warning': '69420',
    //   },
    //   body: JSON.stringify({
    //     nickname,
    //     email,
    //     password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log('결과: ', result))
    //   .catch(error => console.log(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputBoxTitle>Display name</InputBoxTitle>
        <InputBox
          type="text"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
        <InputBoxTitle>Email</InputBoxTitle>
        <InputBox
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputBoxTitle>Password</InputBoxTitle>
        <InputBox
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <PasswordInfo>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </PasswordInfo>
        <button type="button" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUpInput;
