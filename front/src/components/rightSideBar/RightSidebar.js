import styled from 'styled-components';
import RightBox from './RightBox';
import RightSideYellow from './RightSideYellow';

const RightBar = styled.nav`
  margin: 24px;
  width: 300px;
`;

function RightSidebar() {
  return (
    <RightBar>
      <RightSideYellow />
      <RightBox title="Custom Filters" content="Create a custom fillter" />
      <RightBox title="Watched Tags" tag="javascript" />
      <RightBox title="Ignored Tags" button="Add an ignored tag" />
    </RightBar>
  );
}

export default RightSidebar;
