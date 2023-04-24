import styled from 'styled-components';
import UserPageTop from '../components/editUserPage/UserPageTop';
import UserPageNav from '../components/userPage/UserPageNav';
import UserPageSummary from '../components/userPage/UserPageSummary';

const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1062px;
  padding: 24px;
  font-size: 13px;
  color: #6a737c;
`;

const UserContent = styled.div`
  display: flex;
`;
function UserPage() {
  return (
    <UserPageContainer>
      <UserPageTop />
      <UserContent>
        <UserPageNav />
        <UserPageSummary />
      </UserContent>
    </UserPageContainer>
  );
}

export default UserPage;
