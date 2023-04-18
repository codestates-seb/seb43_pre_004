import React from 'react';
import styled from 'styled-components';
import { RiLinksFill } from 'react-icons/ri';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import TextEditor from '../components/TextEditor';
import UserPageTop from '../components/editUserPage/UserPageTop';
import EditUserPageAside from '../components/editUserPage/EditUserPageAside';

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
  > span {
    color: #6a737c;
    font-size: 13px;
    margin: 0px 0px 0px 12px;
  }
`;

const EditInputBox = styled.div`
  width: 835.45px;
  height: 738.83px;
  border-radius: 3px;
  border: 1px solid #bbbfc3;
  padding: 24px;
  margin: 0px 0px 48px;
  > p {
    font-size: 15px;
    font-weight: 600;
    color: #0c0d0e;
    padding: 0px 2px;
    margin-bottom: 4px;
  }
  > input {
    width: 421.33px;
    height: 32.59px;
    padding: 7.8px 9.1px;
    border: 1px solid #bbbfc3;
    border-radius: 3px;
    margin-bottom: 8px;
  }
`;

const LinksIcon = styled.div`
  position: absolute;
  opacity: 50%;
  margin-left: 10px;
  margin-top: 7.5px;
`;

const ImageBox = styled.div`
  margin-bottom: 10px;
  > img {
    width: 10.25rem;
    height: 10.25rem;
    border-radius: 3px;
  }
  > p {
    width: 10.25rem;
    height: 2.0625rem;
    background-color: #525659;
    color: #fff;
    border-radius: 0px 0px 3px 3px;
    margin-top: -33px;
    position: absolute;
    z-index: 5;
    padding: 8px 0px;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
  }
`;
const SubInputBox = styled.div`
  > p {
    font-size: 15px;
    font-weight: 500;
    color: #0c0d0e;
    padding: 0px 2px;
    margin-bottom: 4px;
  }

  > .linksTitle {
    width: 251.16px;
    height: 33.59px;
    padding: 7.8px 9.1px 7.8px 32px;
    border-radius: 3px;
    border: 1px solid #bbbfc3;
    :focus {
      border: 1px solid #b3d3ea;
      outline: 2px solid #d0e3f1;
    }
  }

  .privateInfoInput {
    width: 421.33px;
    height: 33.59px;
    padding: 7.8px 9.1px;
    border-radius: 3px;
    border: 1px solid #bbbfc3;
    :focus {
      border: 1px solid #b3d3ea;
      outline: 2px solid #d0e3f1;
    }
  }
`;

const ExtraEditBox = styled.div`
  max-width: 835.45px;
  height: 106.2px;
  padding: 1.5rem;
  margin-bottom: 48px;
  border: 1px solid #bbbfc3;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const EditButtonArea = styled.div`
  padding: 10px 0px 15px;
  .saveButton {
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
  }
  .cancelButton {
    width: 64.39px;
    height: 37.78px;
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
            <EditInputBox>
              <p>Profile image</p>
              <ImageBox>
                <img
                  src="https://lh3.googleusercontent.com/a/AGNmyxbDWZTRA18Nxi2ZXXDMgNucovxTvk_tZZxjLv5j=k-s256"
                  alt="user-img"
                />
                <p>Change picture</p>
              </ImageBox>
              <p>Display name</p>
              <input type="text" />
              <p>Location</p>
              <input type="text" />
              <p>Title</p>
              <input type="text" placeholder="No title has been set" />
              <p>About me</p>
              <TextEditor />
            </EditInputBox>
          </div>
          <StyledBoxTitle>Links</StyledBoxTitle>
          <ExtraEditBox>
            <SubInputBox>
              <p>Website link</p>
              <LinksIcon>
                <RiLinksFill />
              </LinksIcon>
              <input className="linksTitle" type="text" />
            </SubInputBox>
            <SubInputBox>
              <p>Twitter link or username</p>
              <LinksIcon>
                <BsTwitter />
              </LinksIcon>
              <input className="linksTitle" type="text" />
            </SubInputBox>
            <SubInputBox>
              <p>GitHub link or username</p>
              <LinksIcon>
                <BsGithub />
              </LinksIcon>
              <input className="linksTitle" type="text" />
            </SubInputBox>
          </ExtraEditBox>
          <StyledBoxTitle>
            Private information
            <span>Not shown publicly</span>
          </StyledBoxTitle>
          <ExtraEditBox>
            <SubInputBox>
              <p>Full name</p>
              <input className="privateInfoInput" type="text" />
            </SubInputBox>
          </ExtraEditBox>
          <EditButtonArea>
            <button type="button" className="saveButton">
              Save profile
            </button>
            <button type="button" className="cancelButton">
              Cancel
            </button>
          </EditButtonArea>
        </div>
      </EditUserPageConstruct>
    </EditUserPageBox>
  );
}

export default EditUserPage;
