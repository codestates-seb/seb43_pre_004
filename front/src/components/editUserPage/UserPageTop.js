import React from 'react';
import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import EditUserButton from './EditUserButton';

const UserWrapper = styled.div`
  width: 1050px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 144px;
  margin-bottom: 16px;
`;

const UserInf = styled.div`
  display: flex;
  align-items: center;
  > .user-img {
    margin: 8px;
    > img {
      width: 128px;
      height: 128px;
      border-radius: 5px;
    }
  }
`;

const UserData = styled.div`
  > .user-name {
    margin: 4px 4px 12px 4px;
    color: #232629;
    font-size: 34px;
  }
  > .user-time {
    display: flex;
    height: 26px;
    padding: 0;
    font-size: 13px;
    > li {
      display: flex;
      align-items: center;
      margin-right: 6px;
      color: #6a737c;
      > .li-img {
        margin-right: 4px;
        width: 17px;
        height: 17px;
      }
    }
  }
`;
const UserNav = styled.div`
  display: flex;
  align-items: center;
  height: 33px;
  margin-bottom: 16px;
  padding: 2px 0px;
  color: #525960;
  font-size: 13px;
  > div {
    padding: 6px 12px;
    cursor: pointer;
  }
  > .activity {
    background-color: #f48225;
    color: white;
    border-radius: 20px;
  }
`;
// const UserContent = styled.div`
//   display: flex;
// `;

function UserPageTop() {
  return (
    <div>
      <UserWrapper>
        <UserInf>
          <div className="user-img">
            <img
              src="https://lh3.googleusercontent.com/a/AGNmyxbDWZTRA18Nxi2ZXXDMgNucovxTvk_tZZxjLv5j=k-s256"
              alt="user-img"
            />
          </div>
          <UserData>
            <div className="user-name">User Name</div>
            <ul className="user-time">
              <li>
                <AiOutlineClockCircle className="li-img" />
                Last seen this week
              </li>
              <li>
                <FaRegCalendarAlt className="li-img" />
                Visited 4 days, 4 consecutive
              </li>
            </ul>
          </UserData>
        </UserInf>
        <EditUserButton />
      </UserWrapper>
      <UserNav>
        <div>Profile</div>
        <div>Activity</div>
        <div>Saves</div>
        <div className="activity">Settings</div>
      </UserNav>
    </div>
  );
}

export default UserPageTop;
