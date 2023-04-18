import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  border: 1px solid #6a737c;
  color: #6a737c;
  padding: 6px;
  height: 27px;
  color: #6a737c;
  font-size: 11px;
  &:hover {
    background-color: #f9fafa;
  }
  &:active {
    box-shadow: 0px 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const LeftButton = styled(Button)`
  color: #3b4045;
  background: #e3e6e8;
  border-right: none;
  border-radius: 3px 0px 0px 3px;
`;
const MiddleButton = styled(Button)`
  border-left: none;
  border-right: none;
`;
const RightButton = styled(Button)`
  border-radius: 0px 3px 3px 0px;
`;
function UserPageButton() {
  return (
    <div>
      <LeftButton type="button">Score</LeftButton>
      <Button type="button">Activity</Button>
      <MiddleButton type="button">Newest</MiddleButton>
      <RightButton type="button">Views</RightButton>
    </div>
  );
}

export default UserPageButton;
