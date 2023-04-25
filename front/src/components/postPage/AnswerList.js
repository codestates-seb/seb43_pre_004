import styled from 'styled-components';
import PostContent from './PostContent';
import AnswerContent from '../AnswerContent';

const AnswerContainer = styled.div`
  padding-top: 10px;
`;
const Title = styled.div`
  height: 32.5px;
  margin-bottom: 8px;
  > h2 {
    font-size: 19px;
  }
`;
const Content = styled.ul`
  padding: 16px 0px opx opx;
  border-bottom: 1px solid rgb(215 215 215);
`;
function AnswerList() {
  return (
    <AnswerContainer>
      <Title>
        <h2>2 Answers</h2>
      </Title>
      <Content>
        <AnswerContent />
      </Content>
    </AnswerContainer>
  );
}

export default AnswerList;
