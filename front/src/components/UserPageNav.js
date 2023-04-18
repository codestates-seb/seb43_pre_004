import styled from 'styled-components';

const UserSideNav = styled.div`
  width: 125px;
  margin-right: 32px;
`;
const Ul = styled.ul`
  font-size: 13px;
  color: #525960;
  margin: 0;
  padding: 0px;
  > li {
    margin-bottom: 3px;
    padding: 6px 48px 6px 12px;
  }
  > .summary {
    background-color: #f1f2f3;
    border-radius: 20px;
    color: #232629;
  }
`;

function UserPageNav() {
  return (
    <UserSideNav>
      <Ul>
        <li className="summary">Summary</li>
        <li>Answers</li>
        <li>Questions</li>
        <li>Tags</li>
        <li>Articles</li>
        <li>Badges</li>
        <li>Following</li>
        <li>Bounties</li>
        <li>Requtation</li>
        <li>All actions</li>
        <li>Responses</li>
        <li>Votes</li>
      </Ul>
    </UserSideNav>
  );
}

export default UserPageNav;
