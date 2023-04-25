import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
import AnswerInput from '../components/postPage/AnswerInput';
import AnswerList from '../components/postPage/AnswerList';
import PostContent from '../components/postPage/PostContent';
import PostTitle from '../components/postPage/PostTitle';
import RightSideYellow from '../components/rightSideBar/RightSideYellow';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 1100px;
  padding: 24px;
  color: #232629;
  font-size: 13px;
`;
const PostWrapper = styled.div`
  display: flex;
`;

function PostPage() {
  // const location = useLocation();
  // const { title } = location.state;
  return (
    <Section>
      <PostTitle />
      <PostWrapper>
        <div>
          <PostContent />
          <AnswerList />
          <AnswerInput />
        </div>
        <div>
          <RightSideYellow />
        </div>
      </PostWrapper>
    </Section>
  );
}
export default PostPage;
