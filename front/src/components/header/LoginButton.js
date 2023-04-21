import React from 'react';
import styled from 'styled-components';
import { HiInbox } from 'react-icons/hi';
import { AiFillTrophy, AiFillQuestionCircle } from 'react-icons/ai';

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 230.14px;
`;

const HeaderProfile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  margin: 0px 15px;
`;

const IconBox = styled.div`
  width: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 12px;
  .size {
    width: 20px;
    height: 20px;
  }
`;

const LogOutButton = styled.a`
  width: 65px;
  height: 33px;
  margin: 0px 4px;
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

function LoginButton() {
  return (
    <ButtonBox>
      <a href="*">
        <HeaderProfile
          src="https://lh3.googleusercontent.com/a/AGNmyxbDWZTRA18Nxi2ZXXDMgNucovxTvk_tZZxjLv5j=k-s256"
          alt="user-img"
        />
      </a>
      <IconBox>
        <HiInbox className="size" />
        <AiFillTrophy className="size" />
        <AiFillQuestionCircle className="size" />
      </IconBox>
      <LogOutButton>Log out</LogOutButton>
    </ButtonBox>
  );
}

export default LoginButton;
