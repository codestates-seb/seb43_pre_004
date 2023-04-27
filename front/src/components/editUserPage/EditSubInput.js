import React from 'react';
import styled from 'styled-components';
import { RiLinksFill } from 'react-icons/ri';
import { BsTwitter, BsGithub } from 'react-icons/bs';

const SubEditBox = styled.div`
  max-width: 835.45px;
  height: 106.2px;
  padding: 1.5rem;
  margin-bottom: 48px;
  border: 1px solid #bbbfc3;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const StyledBoxTitle = styled.p`
  font-size: 21px;
  color: #232629;
  margin: 0px 0px 8px;
  > span {
    color: #6a737c;
    font-size: 13px;
    margin: 0px 0px 0px 12px;
  }
`;

const SubInputTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #0c0d0e;
  padding: 0px 2px;
  margin-bottom: 4px;
`;

const SubInputBox = styled.input`
  width: 251.16px;
  height: 33.59px;
  padding: 7.8px 9.1px 7.8px 32px;
  border-radius: 3px;
  border: 1px solid #bbbfc3;
  :focus {
    border: 1px solid #b3d3ea;
    outline: 2px solid #d0e3f1;
  }
`;

const PrivateInput = styled.input`
  width: 421.33px;
  height: 33.59px;
  padding: 7.8px 9.1px;
  border-radius: 3px;
  border: 1px solid #bbbfc3;
  :focus {
    border: 1px solid #b3d3ea;
    outline: 2px solid #d0e3f1;
  }
`;

const LinksIcon = styled.div`
  position: absolute;
  opacity: 50%;
  margin-left: 10px;
  margin-top: 7.5px;
`;

function EditSubInput({
  webLink,
  setWebLink,
  twitterLink,
  setTwitterLink,
  githubLink,
  setGithubLink,
  realName,
  SetRealName,
}) {
  const handleWebLinkChange = e => {
    setWebLink(e.target.value);
  };
  const handleTwitterLinkChange = e => {
    setTwitterLink(e.target.value);
  };
  const handleGithubLinkChange = e => {
    setGithubLink(e.target.value);
  };
  const handleRealNameChange = e => {
    SetRealName(e.target.value);
  };
  return (
    <div>
      <StyledBoxTitle>Links</StyledBoxTitle>
      <SubEditBox>
        <div>
          <SubInputTitle>Website link</SubInputTitle>
          <LinksIcon>
            <RiLinksFill />
          </LinksIcon>
          <SubInputBox
            type="text"
            value={webLink ?? ''}
            onChange={handleWebLinkChange}
          />
        </div>
        <div>
          <SubInputTitle>Twitter link or username</SubInputTitle>
          <LinksIcon>
            <BsTwitter />
          </LinksIcon>
          <SubInputBox
            type="text"
            value={twitterLink ?? ''}
            onChange={handleTwitterLinkChange}
          />
        </div>
        <div>
          <SubInputTitle>GitHub link or username</SubInputTitle>
          <LinksIcon>
            <BsGithub />
          </LinksIcon>
          <SubInputBox
            type="text"
            value={githubLink ?? ''}
            onChange={handleGithubLinkChange}
          />
        </div>
      </SubEditBox>
      <StyledBoxTitle>
        Private information
        <span>Not shown publicly</span>
      </StyledBoxTitle>
      <SubEditBox>
        <div>
          <SubInputTitle>Full name</SubInputTitle>
          <PrivateInput
            type="text"
            value={realName ?? ''}
            onChange={handleRealNameChange}
          />
        </div>
      </SubEditBox>
    </div>
  );
}

export default EditSubInput;
