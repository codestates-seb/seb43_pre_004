import styled from 'styled-components';
import AskedData from './AskedData';
import ClickButton from './ClickButton';
import CommentList from './CommentList';
import VoteScore from './VoteScore';

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;
const PostContainer = styled.div`
  display: flex;
  width: 727px;
  padding: 16px 0px;
  > div {
    padding-right: 16px;
  }
`;
const PostWrapper = styled.div`
  width: 659px;
`;
const PostText = styled.div`
  font-size: 15px;
  line-height: 22.5px;
  margin-bottom: 36px;
`;
const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0px 28px 0px;
  padding-top: 4px;
`;
function PostContent() {
  return (
    <PostSection>
      <PostContainer>
        <div>
          <VoteScore />
        </div>
        <PostWrapper>
          <PostText>
            <p>Is there a neater/shorter way to write out things like:</p>
            <p>if(var1 == 1 && var2 == 1 && var3 == 1)</p> <p>or</p>
            <p>if(var1 == 1 || var1 == 4 || var1 == 6)</p>
            <p>
              I know all sorts of commonly used syntax shortcuts that make
              things look a bit cleaner and I figured there may be some other
              way to write it that know of considering how bulky it gets.
            </p>
          </PostText>
          <PostData>
            <ClickButton />
            <AskedData />
          </PostData>
          <CommentList />
        </PostWrapper>
      </PostContainer>
    </PostSection>
  );
}

export default PostContent;
