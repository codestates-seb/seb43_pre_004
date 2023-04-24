import styled from 'styled-components';
import BlueButton from './BlueButton';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  > h1 {
    margin-bottom: 8px;
    color: #3b4045;
    font-size: 27px;
  }
`;
const PostData = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(215 215 215);
  > .data {
    margin: 0px 16px 8px 0px;
    > span {
      margin-right: 2px;
      color: #6a737c;
    }
  }
`;

function PostTitle() {
  return (
    <div>
      <Title>
        <h1>
          Is there an elegant way to check if multiple variables equal one value
          or vice versa
        </h1>
        <BlueButton text="Ask Question" size="103px" />
      </Title>
      <PostData>
        <div className="data">
          <span>Asked</span> today
        </div>
        <div className="data">
          <span>Modified</span> today
        </div>
        <div className="data">
          <span>Viewed</span> 84times
        </div>
      </PostData>
    </div>
  );
}

export default PostTitle;
