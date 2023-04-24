import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  background-color: #0a95ff;
  border-radius: 3px;
  padding: 8px;
  color: #fff;
  :hover {
    background-color: #3172c6;
  }
`;

function LoginButton() {
  const navigate = useNavigate();
  const userClick = () => {
    navigate('/user/profile');
  };
  const logoutClick = () => {
    navigate('/');
  };
  return (
    <ButtonBox>
      <HeaderProfile
        onClick={userClick}
        src="https://lh3.googleusercontent.com/a/AGNmyxbDWZTRA18Nxi2ZXXDMgNucovxTvk_tZZxjLv5j=k-s256"
        alt="user-img"
      />
      <IconBox>
        <HiInbox className="size" />
        <AiFillTrophy className="size" />
        <AiFillQuestionCircle className="size" />
      </IconBox>
      <LogOutButton onClick={logoutClick}>Log out</LogOutButton>
    </ButtonBox>
  );
}

export default LoginButton;
