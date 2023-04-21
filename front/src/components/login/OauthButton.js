import React from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

const GoogleOauthButton = styled.button`
  width: 289px;
  height: 38px;
  border: none;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3b4045;
  font-size: 13px;
  :hover {
    background-color: #f8f9f9;
  }
  .googleLogo {
    width: 18px;
    height: 18px;
  }
`;

function OauthButton({ btnName }) {
  return (
    <GoogleOauthButton type="button">
      <FcGoogle className="googleLogo" />
      &nbsp;{btnName} with Google
    </GoogleOauthButton>
  );
}

export default OauthButton;
