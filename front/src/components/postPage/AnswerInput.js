import styled from 'styled-components';
import BlueButton from './BlueButton';
import TextEditor from '../TextEditor';

const AnswerContainer = styled.div`
  width: 727px;
  margin-bottom: 70px;
  > h2 {
    padding-top: 20px;
    margin-bottom: 19px;
    color: #232628;
    font-size: 19px;
  }
  > div {
    margin-bottom: 16px;
  }
`;
const ButtonWrapper = styled.div`
  padding: 10px 0px 15px 0px;
`;

function Answer() {
  return (
    <AnswerContainer>
      <h2>Your Answer</h2>
      <div>
        <TextEditor />
      </div>
      <ButtonWrapper>
        <BlueButton text="Post Your Answer" size="128.91px" />
      </ButtonWrapper>
    </AnswerContainer>
  );
}

export default Answer;
