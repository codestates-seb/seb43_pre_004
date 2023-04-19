import React from 'react';
import styled from 'styled-components';
import { RxTriangleDown } from 'react-icons/rx';
import { IoFilter } from 'react-icons/io5';
import Question from '../components/Question';

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
  > button {
    width: 103.02px;
    height: 37.78px;
    font-size: 13px;
    color: #fff;
    padding: 10.4px;
    background-color: #0a95ff;
    border: none;
    border-radius: 3px;
    :hover {
      background-color: #3172c6;
    }
  }
`;

const QTopSecond = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56.45px;
  border-bottom: 1px solid #9199a1;
  > p {
    font-size: 17px;
    margin: 0px 12px 0px 0px;
  }

  .topSecond {
    width: 430px;
    display: flex;
    justify-content: space-between;
    > button {
      width: 71.13px;
      height: 35.03px;
      font-size: 12px;
      color: #397390;
      background-color: #e1ecf4;
      padding: 9.4px;
      border: 1px solid #397390;
      border-radius: 2px;
    }
  }
`;

const QTopTab = styled.div`
  > button {
    height: 35.03px;
    padding: 9.3px;
    margin: 0px -1px -1px 0px;
    color: #6a737c;
    font-size: 12px;
    background-color: #fff;
    border: 1px solid #6a737c;
    border-radius: 2px;
    :hover {
      background-color: #f8f9f9;
    }
  }
`;

const Pagination = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  margin-top: 48px;

  .firstSec {
    width: 262.68px;
    display: flex;
    justify-content: space-between;
  }

  .secondSec {
    width: 184px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const PageButton = styled.button`
  width: auto;
  height: 27px;
  padding: 0px 8px;
  border: 1px solid #bcbbbb;
  border-radius: 2px;
  background-color: #fff;
`;

function Questions() {
  return (
    <QuestionBody>
      <QTopFirst>
        <h1>All Questions</h1>
        <button type="button">Ask Question</button>
      </QTopFirst>
      <QTopSecond>
        <p>228 questions with bounties</p>
        <div className="topSecond">
          <QTopTab>
            <button type="button">Newest</button>
            <button type="button">Active</button>
            <button type="button">Bountied</button>
            <button type="button">Unanswered</button>
            <button type="button">
              More&nbsp;
              <RxTriangleDown />
            </button>
          </QTopTab>
          <button type="button">
            <IoFilter />
            &nbsp;Filter
          </button>
        </div>
      </QTopSecond>
      <div className="container">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <Pagination>
        <div className="firstSec">
          <PageButton>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>4</PageButton>
          <PageButton>5</PageButton>
          <div>...</div>
          <PageButton>16</PageButton>
          <PageButton>Next</PageButton>
        </div>
        <div className="secondSec">
          <PageButton>15</PageButton>
          <PageButton>30</PageButton>
          <PageButton>50</PageButton>
          <div>per page</div>
        </div>
      </Pagination>
    </QuestionBody>
  );
}

export default Questions;
