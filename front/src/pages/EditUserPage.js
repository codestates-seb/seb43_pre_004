import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { userDataState } from '../recoil/UserAtoms';
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
  const navigate = useNavigate();
  const { memberId } = useParams();
  const [idData, setIdData] = useRecoilState(userDataState);
  const [error, setError] = useState();
  const [nickname, setNickname] = useState('');
  const [location, setLocation] = useState('');
  const [webLink, setWebLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [realName, SetRealName] = useState('');
  const handleCancel = () => {
    navigate('/user/profile');
  };
  const handleSubmit = () => {
    const addData = {
      ...idData,
      nickname,
      location,
      webLink,
      twitterLink,
      githubLink,
      realName,
    };
  };

  useEffect(() => {
    setError(undefined);
    fetch('/data/member.json')
      .then(res => res.json())
      .then(data => {
        setIdData(data[0]);
        setNickname(data[0].nickname);
        setLocation(data[0].location);
        setWebLink(data[0].webLink);
        setTwitterLink(data[0].twitterLink);
        setGithubLink(data[0].githubLink);
        SetRealName(data[0].realName);
      })
      .catch(() => setError('error'));
  }, [setIdData]);

  return (
    <EditUserPageBox>
      <UserPageTop />
      <EditUserPageConstruct>
        <EditUserPageAside />
        <div>
          <TitleBox>Edit your profile</TitleBox>
          <div>
            <StyledBoxTitle>Public information</StyledBoxTitle>
            <EditUserInput
              nickname={nickname}
              setNickname={setNickname}
              location={location}
              setLocation={setLocation}
            />
          </div>
          <EditSubInput
            webLink={webLink}
            setWebLink={setWebLink}
            twitterLink={twitterLink}
            setTwitterLink={setTwitterLink}
            githubLink={githubLink}
            setGithubLink={setGithubLink}
            realName={realName}
            SetRealName={SetRealName}
          />
          <EditButtonArea>
            <SaveButton type="submit" onClick={handleSubmit}>
              Save profile
            </SaveButton>
            <CancelButton type="button" onClick={handleCancel}>
              Cancel
            </CancelButton>
          </EditButtonArea>
        </div>
      </EditUserPageConstruct>
    </EditUserPageBox>
  );
}

export default EditUserPage;
