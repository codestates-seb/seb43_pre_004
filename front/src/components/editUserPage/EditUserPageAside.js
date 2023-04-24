import React from 'react';
import styled from 'styled-components';
import { RiShareBoxFill } from 'react-icons/ri';

const EditUserAsideBox = styled.div`
  margin: 0px 20px 0px 0px;
`;

const EditUserAsideNav = styled.ul`
  padding: 6px 12px;
  .title {
    font-size: 11px;
    font-weight: 700;
    color: #232629;
  }
  > li {
    font-size: 13px;
    font-weight: 400;
    color: #525960;
    padding: 6px 0px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .mt-0 {
    margin-top: 0px;
  }
  .active {
    max-width: 183.52px;
    height: 29px;
    background-color: #f48225;
    border-radius: 30px;
    color: #fff;
    margin-left: -12px;
    > span {
      margin-left: 12px;
    }
  }
`;

function EditUserPageAside() {
  return (
    <EditUserAsideBox>
      <EditUserAsideNav className="mt-0">
        <li className="title">PERSONAL INFORMATION</li>
        <li className="active">
          <span>Edit profile</span>
        </li>
        <li>Delete profile</li>
      </EditUserAsideNav>
      <EditUserAsideNav>
        <li className="title">EMAIL SETTINGS</li>
        <li>Edit email settings</li>
        <li>Tag watching & ignoring</li>
        <li>Community digests</li>
        <li>
          <li>Question subscriptions</li>
          <RiShareBoxFill />
        </li>
      </EditUserAsideNav>
      <EditUserAsideNav>
        <li className="title">SITE SETTINGS</li>
        <li>Preferences</li>
        <li>Flair</li>
        <li>Hide communities</li>
      </EditUserAsideNav>
      <EditUserAsideNav>
        <li className="title">ACCESS</li>
        <li>Your Collectives</li>
        <li>Your logins</li>
      </EditUserAsideNav>
      <EditUserAsideNav>
        <li className="title">API</li>
        <li>Authorized applications</li>
      </EditUserAsideNav>
    </EditUserAsideBox>
  );
}

export default EditUserPageAside;
