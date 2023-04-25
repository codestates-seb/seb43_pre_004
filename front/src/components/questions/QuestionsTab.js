import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RxTriangleDown } from 'react-icons/rx';
import { IoFilter } from 'react-icons/io5';

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

function QuestionsTab() {
  return (
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
  );
}

export default QuestionsTab;
