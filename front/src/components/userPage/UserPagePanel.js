import styled from 'styled-components';
import UserPageButton from './UserPageButton';

const PanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Panel = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  border-radius: 3px;
  border: 1px solid rgb(215 215 215);
`;
const H3 = styled.h3`
  margin: 20px 0px 8px 0px;
  font-size: 21px;
  font-weight: 400;
  color: #232629;
`;
const P = styled.p`
  margin: 0px;
  > span {
    color: #0074cc;
  }
`;

function UserPagePanel({ button, title, text, spanText, subtext }) {
  return (
    <div>
      <PanelWrapper>
        <H3>{title}</H3>
        {button && <UserPageButton />}
      </PanelWrapper>
      <Panel>
        <P>
          {text} <span>{spanText}</span> {subtext}
        </P>
      </Panel>
    </div>
  );
}

export default UserPagePanel;
