import React from 'react';
import styled from 'styled-components';
import { RiShareBoxFill } from 'react-icons/ri';

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

function BottomText() {
  return (
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
  );
}

export default BottomText;
