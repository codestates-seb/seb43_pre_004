import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Questions() {
  const [questionList, setQuestionList] = useRecoilState(QuestionList);
  const navigate = useNavigate();

  const handleClick = post => {
    // navigate( '/이동경로', { state: { 키: 값, 키: 값, ... } } )
    navigate(`/question/${post.id}`, { state: post });
  };

  useEffect(() => {
    fetch('https://9280-115-140-189-21.jp.ngrok.io/question/list')
      .then(res => res.json())
      .then(data => {
        setQuestionList(data.data);
      });
  }, [setQuestionList]);

  return (
    <QuestionBody>
      <QTopFirst>
        <h1>All Questions</h1>
        <BlueButton text="Ask Question" size="103px" link="/question/ask" />
      </QTopFirst>
      <QuestionsTab />
<<<<<<< HEAD
      <QuestionContainer>
        <div className="container">
          {questionList?.map(post => (
            <Question key={post.questionId} data={post} />
          ))}
        </div>
        <Pagination />
      </QuestionContainer>
=======
      <div className="container">
        {questionList?.map(post => (
          <div key={post.id} onClick={() => handleClick(post)}>
            <Question data={post} />
          </div>
        ))}
      </div>
      <Pagination />
>>>>>>> 9dca88921cae52d3ce7c1bc62ad5b84aeed9c5f1
    </QuestionBody>
  );
}

export default Questions;
