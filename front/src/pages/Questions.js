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
    fetch('https://d5c1-39-119-48-216.ngrok-free.app/question/list', {
      headers: {
        'Content-Type': `application/json`,
        'ngrok-skip-browser-warning': '69420',
      },
      // mode: 'cors',
    })
      .then(res => res.json())
      .then(data => {
        setQuestionList(data.data);
      })
      .catch(error => console.log(error));
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
          <div key={post.id} onClick={() => handleClick(post)}>
            <Question data={post} />
          </div>
        ))}
      </div>
      <Pagination />
    </QuestionBody>
  );
}

export default Questions;
