import React from 'react';
import styled from 'styled-components';
import TextEditor from '../TextEditor';

const EditInputBox = styled.div`
  width: 835.45px;
  height: 738.83px;
  border-radius: 3px;
  border: 1px solid #bbbfc3;
  padding: 24px;
  margin: 0px 0px 48px;
`;

const InputTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #0c0d0e;
  padding: 0px 2px;
  margin-bottom: 4px;
`;

const UserInput = styled.input`
  width: 421.33px;
  height: 32.59px;
  padding: 7.8px 9.1px;
  border: 1px solid #bbbfc3;
  border-radius: 3px;
  margin-bottom: 8px;
`;

const ImageBox = styled.div`
  margin-bottom: 10px;
`;

const InputImageBox = styled.img`
  width: 10.25rem;
  height: 10.25rem;
  border-radius: 3px;
`;

const ImgChangeButton = styled.p`
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
`;

function EditUserInput() {
  return (
    <div>
      <EditInputBox>
        <InputTitle>Profile image</InputTitle>
        <ImageBox>
          <InputImageBox
            src="https://lh3.googleusercontent.com/a/AGNmyxbDWZTRA18Nxi2ZXXDMgNucovxTvk_tZZxjLv5j=k-s256"
            alt="user-img"
          />
          <ImgChangeButton>Change picture</ImgChangeButton>
        </ImageBox>
        <InputTitle>Display name</InputTitle>
        <UserInput type="text" />
        <InputTitle>Location</InputTitle>
        <UserInput type="text" />
        <InputTitle>Title</InputTitle>
        <UserInput type="text" placeholder="No title has been set" />
        <InputTitle>About me</InputTitle>
        <TextEditor />
      </EditInputBox>
    </div>
  );
}

export default EditUserInput;
