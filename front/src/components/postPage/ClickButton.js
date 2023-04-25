import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ClickWrapper = styled.div`
  width: 251px;
  height: 25px;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  margin: 4px;
  color: #6a737c;
  font-size: 13px;
  :hover {
    color: #8c8b8b;
  }
`;
function ClickButton() {
  return (
    <ClickWrapper>
      <Button type="button">Share</Button>
      <Button type="button">Edit</Button>
      <Button type="button">Following</Button>
    </ClickWrapper>
  );
}

export default ClickButton;
