import React from 'react';
import styled from 'styled-components';

const PostBox = styled.div`
  width: 751px;
  height: auto;
  padding: 16px;
  border-bottom: 1px solid #9199a1;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: end;
`;

const PostColumn = styled.div`
  height: 62px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  margin-right: 16px;
  .vote {
    color: #0c0d0e;
    font-weight: 500;
    margin-bottom: 4px;
  }
  .answer {
    color: #2f6f44;
    border: 1px solid #2f6f44;
    border-radius: 3px;
    background-color: #fff;
    padding: 2px 4px;
    width: 63.2px;
    height: 23px;
    margin-bottom: 4px;
  }
  .views {
    color: #6a737c;
    margin-bottom: 4px;
  }
  .bounty {
    width: 42.11px;
    height: 23px;
    background-color: #0074cc;
    padding: 2px 4px;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    margin-bottom: 4px;
  }
`;

const PostSummary = styled.div`
  > div {
    font-size: 17px;
    color: #0074cc;
    margin: -2px 0px 8px;
    padding: 0px 24px 0px 0px;
    cursor: pointer;
  }
  .summary {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: -2px 0px 8px;
    font-size: 13px;
    color: #3b4045;
  }
`;

// const StyledTags = styled.div`
//   margin-top: 10px;
//   > span {
//     font-size: 12px;
//     width: auto;
//     height: 23.59px;
//     color: #39739d;
//     background-color: #e1ecf4;
//     border-radius: 3px;
//     margin: 0px 6px 2px 0px;
//     padding: 4.8px 6px;
//   }
// `;

const UserSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 12px;
  > img {
    width: 18px;
    height: 18px;
  }
  .username {
    color: #0074cc;
    margin: 2px;
    margin-left: 4px;
  }
  .fame {
    font-weight: 500;
    color: #525960;
    margin-left: 4px;
  }
  .updateDay {
    color: #6a737c;
    margin-left: 4px;
  }
`;

function Question({ data }) {
  function formatDate() {
    const date = new Date(data.createdAt);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${month} ${day} at ${hours}:${minutes}`;
  }

  return (
    <PostBox>
      <MainContent>
        <PostColumn>
          <p className="answer">{data.answerCnt}answer</p>
          <p className="views"> {data.viewed} views</p>
          <p className="bounty">&#43; {Math.abs(data.bounty / 50) * 50}</p>
        </PostColumn>
        <PostSummary>
          <div>{data.title}</div>
          <div className="summary">{data.content}</div>
          <div>
            {/* <StyledTags>
              <span>kubernetes</span>
              <span>openshift</span>
              <span>docker-for-windows</span>
            </StyledTags> */}
            <UserSummary>
              <img
                src="https://www.gravatar.com/avatar/5ff6dfdabf32aa18f1c28421abbed30c?s=32&d=identicon&r=PG"
                alt="userimage"
              />
              <span className="username"> user804401</span>
              <span className="updateDay">
                asked {formatDate(data.createdAt)}
              </span>
            </UserSummary>
          </div>
        </PostSummary>
      </MainContent>
    </PostBox>
  );
}

export default Question;
