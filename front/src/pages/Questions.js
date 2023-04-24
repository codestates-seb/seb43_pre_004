import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Question from '../components/questions/Question';
import Pagination from '../components/questions/Pagination';
import BlueButton from '../components/postPage/BlueButton';
import QuestionsTab from '../components/questions/QuestionsTab';
import QuestionList from '../recoil/Atom';

const QuestionBody = styled.div`
  width: 802px;
  height: 2736.23px;
  padding: 24px;
  color: #232629;
`;

const QTopFirst = styled.div`
  display: flex;
  justify-content: space-between;
  > h1 {
    width: 611.95px;
    height: 37.8px;
    font-size: 27px;
    margin: 0px 12px 12px 0px;
  }
`;

function Questions() {
  const [questionList, setQuestionList] = useRecoilState(QuestionList);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(res => res.json())
      .then(data => {
        setQuestionList(data);
      });
  }, [setQuestionList]);

  return (
    <QuestionBody>
      <QTopFirst>
        <h1>All Questions</h1>
        <BlueButton text="Ask Question" size="103px" link="/question/ask" />
      </QTopFirst>
      <QuestionsTab />
      <div className="container">
        {questionList?.map(post => (
          <Question data={post} />
        ))}
      </div>
      <Pagination />
    </QuestionBody>
  );
}

export default Questions;
