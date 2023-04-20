import styled from 'styled-components';
import BlueButton from './BlueButton';
import TextEditor from '../TextEditor';

const AnwerContainer = styled.div`
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
    <AnwerContainer>
      <h2>Your Answer</h2>
      <div>
        <TextEditor />
      </div>
      <ButtonWrapper>
        <BlueButton text="Post Your Answer" size="126px" />
      </ButtonWrapper>
    </AnwerContainer>
  );
}

export default Answer;
