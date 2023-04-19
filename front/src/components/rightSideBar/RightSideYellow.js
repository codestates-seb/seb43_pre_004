import styled from 'styled-components';
import { ReactComponent as IconPencil } from '../../image/iconPencil.svg';
import { ReactComponent as ContentIcon } from '../../image/contentIcon.svg';
import { ReactComponent as StackLogo } from '../../image/stackLogo.svg';

const YellowWrapper = styled.nav`
  width: 300px;
  background-color: #fdf7e2;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
  border-radius: 3px;
  border: 1px solid #f1e5bc;
  margin-bottom: 16px;
  padding-bottom: 12px;
  font-size: 13px;
  color: #3b4045;
`;
const Title = styled.li`
  background-color: #fbf3d5;
  border-bottom: 1px solid #f1e5bc;
  padding: 12px 15px;
  color: #525960;
  font-weight: bold;
  :not(:first-of-type) {
    border-top: 1px solid #f1e5bc;
  }
`;
const Content = styled.li`
  display: flex;
  align-items: flex-start;
  margin: 12px 0px;
  padding: 0px 16px;
  line-height: 17px;
  > div {
    > .icon {
      height: 14px;
      margin-right: 5px;
    }
  }
  > .number {
    margin-right: 5px;
    color: #6a737c;
  }
`;
function RightSideYellow() {
  return (
    <YellowWrapper>
      <ul>
        <Title>The Overflow Blog</Title>
        <Content>
          <div>
            <IconPencil className="icon" />
          </div>
          <a href="https://stackoverflow.blog/2023/04/17/community-is-the-future-of-ai/?cb=1&_ga=2.178463270.382358191.1681343808-1583759018.1681343232">
            Community is the future of AI
          </a>
        </Content>
        <Content>
          <div>
            <IconPencil className="icon" />
          </div>
          <a href="https://stackoverflow.blog/2023/04/18/we-bought-a-university-how-one-coding-school-doubled-down-on-brick-and-mortar-ep-555/?cb=1&_ga=2.255093898.382358191.1681343808-1583759018.1681343232">
            We bought a university: how one coding school doubled down on brick
            and...
          </a>
        </Content>
        <Title>Featured on Meta</Title>
        <Content>
          <div>
            <ContentIcon className="icon" />
          </div>
          <a href="https://meta.stackexchange.com/questions/388030/improving-the-copy-in-the-close-modal-and-post-notices-2023-edition?cb=1">
            Improving the copy in the close modal and post notices - 2023
            edition
          </a>
        </Content>
        <Content>
          <div>
            <ContentIcon className="icon" />
          </div>
          <a href="https://meta.stackexchange.com/questions/388401/new-blog-post-from-our-ceo-prashanth-community-is-the-future-of-ai?cb=1">
            New blog post from our CEO Prashanth: Community is the future of AI
          </a>
        </Content>
        <Content>
          <div>
            <StackLogo className="icon" />
          </div>
          Temporary policy: ChatGPT is banned
        </Content>
        <Content>
          <div>
            <StackLogo className="icon" />
          </div>
          Content Discovery initiative 4/13 update: Related questions using a
          Machine...
        </Content>
        <Content>
          <div>
            <StackLogo className="icon" />
          </div>
          The [protection] tag is being burninated
        </Content>
        <Title>Hot Meta Posts</Title>
        <Content>
          <div className="number">14</div>
          Inviting New Recognized Members to the R Language Collective
        </Content>
      </ul>
    </YellowWrapper>
  );
}

export default RightSideYellow;
