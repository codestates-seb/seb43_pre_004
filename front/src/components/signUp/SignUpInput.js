import React from 'react';
import styled from 'styled-components';

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
  return (
    <div>
      <InputBoxTitle>Display name</InputBoxTitle>
      <InputBox type="text" />
      <InputBoxTitle>Email</InputBoxTitle>
      <InputBox type="email" />
      <InputBoxTitle>Password</InputBoxTitle>
      <InputBox type="password" />
      <PasswordInfo>
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </PasswordInfo>
    </div>
  );
}

export default SignUpInput;
