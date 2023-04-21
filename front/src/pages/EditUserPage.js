import React from 'react';
import styled from 'styled-components';
import UserPageTop from '../components/editUserPage/UserPageTop';
import EditUserPageAside from '../components/editUserPage/EditUserPageAside';
import EditSubInput from '../components/editUserPage/EditSubInput';
import EditUserInput from '../components/editUserPage/EditUserInput';

const EditUserPageBox = styled.div`
  height: 101.3787rem;
  width: auto;
  padding: 24px;
`;
const EditUserPageConstruct = styled.div`
  display: flex;
`;

const TitleBox = styled.p`
  border-bottom: 1px solid #bbbfc3;
  color: #0c0d0e;
  font-size: 27px;
  padding-bottom: 16px;
  margin-bottom: 24px;
`;

const StyledBoxTitle = styled.p`
  font-size: 21px;
  color: #232629;
  margin: 0px 0px 8px;
`;

const EditButtonArea = styled.div`
  padding: 10px 0px 15px;
`;

const SaveButton = styled.button`
  width: 93.97px;
  height: 37.8px;
  background-color: #0a95ff;
  color: #fff;
  margin: 4px;
  padding: 10.4px;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  :hover {
    background-color: #3172c6;
  }
`;

const CancelButton = styled.button`
  width: 64.39px;
  height: 37.8px;
  margin: 4px 4px 4px 6px;
  padding: 10.4px;
  color: #0074cc;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  :hover {
    background-color: #f1f8f3;
  }
`;

function EditUserPage() {
  return (
    <EditUserPageBox>
      <UserPageTop />
      <EditUserPageConstruct>
        <EditUserPageAside />
        <div>
          <TitleBox>Edit your profile</TitleBox>
          <div>
            <StyledBoxTitle>Public information</StyledBoxTitle>
            <EditUserInput />
          </div>
          <EditSubInput />
          <EditButtonArea>
            <SaveButton>Save profile</SaveButton>
            <CancelButton>Cancel</CancelButton>
          </EditButtonArea>
        </div>
      </EditUserPageConstruct>
    </EditUserPageBox>
  );
}

export default EditUserPage;
