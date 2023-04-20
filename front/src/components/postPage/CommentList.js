import styled from 'styled-components';

const CommentContent = styled.div`
  padding-bottom: 10px;
  border-top: 1px solid rgb(215 215 215);
`;
const CommentData = styled.ul`
  margin-bottom: 16px;
  padding: 6px;
  border-bottom: 1px solid rgb(215 215 215);
  > li {
    span {
      margin-right: 2px;
    }
    > .comment-text {
      line-height: 18.2px;
    }
    > .user-name {
      color: #0074cc;
      :hover {
        color: #0a95ff;
      }
    }
    > .visited-time {
      color: #9199a1;
    }
  }
`;
const Button = styled.button`
  border: none;
  background: transparent;
  color: #838c95;
  font-size: 13px;
  padding: 0px 3px 2px;
  :hover {
    color: #0074cc;
  }
`;

function CommentList() {
  return (
    <CommentContent>
      <CommentData>
        <li>
          <span className="comment-text">
            Thank you all. The explanation is much appreciated
          </span>
          <span className="user-name">- user name</span>
          <span className="visited-time">1 hour ago</span>
        </li>
      </CommentData>
      <Button type="button">Add a comment</Button>
    </CommentContent>
  );
}

export default CommentList;
