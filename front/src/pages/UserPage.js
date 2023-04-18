import styled from 'styled-components';
import { RiPencilFill } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import UserPageNav from '../components/UserPageNav';
import UserPageSummary from '../components/UserPageSummary';

const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1062px;
  padding: 24px;
  font-size: 13px;
  color: #6a737c;
`;
const UserWrapper = styled.div`
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
    > li {
      display: flex;
      align-items: center;
      margin-right: 6px;
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
  > div {
    padding: 6px 12px;
  }
  > .activity {
    background-color: #f48225;
    color: white;
    border-radius: 20px;
  }
`;
const UserContent = styled.div`
  display: flex;
`;
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

function UserPage() {
  return (
    <UserPageContainer>
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
        <UserButton>
          <EditButton className="edit-button" type="button">
            <RiPencilFill className="pencil-img" />
            Edit profile
          </EditButton>
          <Button className="profiles-button" type="button">
            Profiles
          </Button>
        </UserButton>
      </UserWrapper>
      <UserNav>
        <div>Profile</div>
        <div className="activity">Activity</div>
        <div>Saves</div>
        <div>Settings</div>
      </UserNav>
      <UserContent>
        <UserPageNav />
        <UserPageSummary />
      </UserContent>
    </UserPageContainer>
  );
}

export default UserPage;
