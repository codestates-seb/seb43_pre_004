import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RiPencilFill } from 'react-icons/ri';

const UserButton = styled.div`
  display: flex;
  height: 144px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #6a737c;
  margin: 3px;
  height: 35px;
  font-size: 12px;
  color: #6a737c;
  width: 75px;
  &:hover {
    background-color: #f9fafa;
  }
  &:active {
    box-shadow: 0px 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const EditButton = styled(Button)`
  width: 100px;
  > .pencil-img {
    width: 17px;
    height: 17px;
    margin-right: 2px;
  }
`;

function EditUserButton() {
  const navigate = useNavigate();
  const userEditClick = () => {
    navigate('/user/profile/edit');
  };
  return (
    <UserButton>
      <EditButton type="button" onClick={userEditClick}>
        <RiPencilFill className="pencil-img" />
        Edit profile
      </EditButton>
      <Button className="profiles-button" type="button">
        Profiles
      </Button>
    </UserButton>
  );
}

export default EditUserButton;
