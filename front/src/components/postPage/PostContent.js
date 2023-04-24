import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import AskedData from './AskedData';
import ClickButton from './ClickButton';
import CommentList from './CommentList';
import VoteScore from './VoteScore';
import selectedQuestionState from '../../pages/selectedQuestionState';

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;
const PostContainer = styled.div`
  display: flex;
  width: 727px;
  padding: 16px 0px;
  > div {
    padding-right: 16px;
  }
`;
const PostWrapper = styled.div`
  width: 659px;
`;
const PostText = styled.div`
  font-size: 15px;
  line-height: 22.5px;
  margin-bottom: 36px;
`;
const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0px 28px 0px;
  padding-top: 4px;
`;
function PostContent() {
  const selectedQuestion = useRecoilValue(selectedQuestionState);
  const { content } = selectedQuestion || {};
  return (
    <PostSection>
      <PostContainer>
        <div>
          <VoteScore />
        </div>
        <PostWrapper>
          <PostText>{content}</PostText>
          <PostData>
            <ClickButton />
            <AskedData />
          </PostData>
          <CommentList />
        </PostWrapper>
      </PostContainer>
    </PostSection>
  );
}

export default PostContent;
