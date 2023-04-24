import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil'; // value만 필요한 컴포넌트 = useRecoilValue() , state를 변경하기만 하는 컴포넌트 = useSetRecoilState()
import BlueButton from './BlueButton';
import selectedQuestionState from '../../pages/selectedQuestionState';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  > h1 {
    margin-bottom: 8px;
    color: #3b4045;
    font-size: 27px;
  }
`;
const PostData = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(215 215 215);
  > .data {
    margin: 0px 16px 8px 0px;
    > span {
      margin-right: 2px;
      color: #6a737c;
    }
  }
`;

function PostTitle() {
  const selectedQuestion = useRecoilValue(selectedQuestionState);
  const { title } = selectedQuestion || {}; // selectedQuestion이 null이거나 undefined일 경우, title변수가 undefined가 되는 것을 방지

  return (
    <div>
      <Title>
        <h1>{title}</h1>
        <BlueButton text="Ask Question" size="103px" />
      </Title>
      <PostData>
        <div className="data">
          <span>Asked</span> today
        </div>
        <div className="data">
          <span>Modified</span> today
        </div>
        <div className="data">
          <span>Viewed</span> 84times
        </div>
      </PostData>
    </div>
  );
}

export default PostTitle;
