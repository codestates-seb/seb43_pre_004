import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useLocation, useParams } from 'react-router-dom';
import AskedData from './postPage/AskedData';
import ClickButton from './postPage/ClickButton';
import CommentList from './postPage/CommentList';
import VoteScore from './postPage/VoteScore';
// import selectedQuestionState from '../pages/selectedQuestionState';

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
function AnswerContent() {
  const location = useLocation();
  const { comments } = location.state;
  const { questionId } = useParams();
  console.log('comments:', comments);
  console.log('questionId:', questionId);

  const selectedQuestion = comments.find(
    content => content.question.questionId === Number(questionId),
  );

  console.log('selectedQuestion:', selectedQuestion);
  //   console.log('selectedComment:', selectedComment);

  return (
    <PostSection>
      <PostContainer>
        <div>
          <VoteScore />
        </div>
        <PostWrapper>
          <PostText>
            {selectedQuestion ? selectedQuestion.question.content : ''}
          </PostText>
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

export default AnswerContent;
