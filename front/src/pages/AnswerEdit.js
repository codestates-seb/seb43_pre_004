import React from 'react';
import styled from 'styled-components';
import Preview from '../components/Preview';

const AnswerComponent = styled.div`
  padding: 24px;
`;

const NoticeComponent = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const NoticeExplan = styled.div`
  display: inline-block;
  background-color: #fdf7e2;
  width: 662px;
  padding: 16px;
  font-size: 13px;
  border: 1px solid #e6cf79;
`;

const NoticeHead = styled.p`
  margin-bottom: 13px;
`;

const MemoContainer = styled.div`
  display: inline-block;
  width: 365px;
  font-size: 15px;
  margin: 0 0 15px 24px;
  border: 1px solid #f1e5bc;
`;

const MemoHeader = styled.div`
  background-color: #fbf3d5;
  border-bottom: 1px solid #f1e5bc;
  padding: 12px 15px;
`;

const MemoMenu = styled.div`
  background-color: #fdf7e2;
`;

const Memoul = styled.ul`
  padding: 4px 15px;
  list-style-type: disc;
`;
const Memoli = styled.li`
  margin: 12px 15px;
  font-size: 13px;
  bold {
    font-weight: bold;
  }
  italic {
    font-style: italic;
  }
`;

const MemoEx = styled.pre`
  width: 210.656px;
  margin: 4px 0;
  padding: 8px;
  font-size: 13px;
  background-color: #f1f2f3;
  codecolor {
    color: #0074cc;
  }
`;

const MemoLike = styled.pre`
  display: inline-block;
  background-color: #f1f2f3;
`;

const MemoLinks = styled.div`
  padding-bottom: 13px;
`;
const MemoLink = styled.a`
  display: block;
  text-align: right;
  font-size: 13px;
  color: #0074cc;
`;

const TitleInput = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

const Title = styled.label`
  padding: 0 2px;
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: bold;
`;

const TitleText = styled.input`
  width: 662.003px;
  height: 14.994;
  padding: 7.8px 9.1px;
  border: 1px solid #babfc4;
`;

const BodyComponent = styled.div`
  width: 662px;
  /* height: 307.609px; */
`;

const AddComment = styled.a`
  color: #bdb9c7;
  font-size: 13px;
  :hover {
    color: #6bbfff;
  }
`;

function AnswerEdit() {
  return (
    <AnswerComponent>
      <NoticeComponent>
        <NoticeExplan>
          <NoticeHead>
            Your edit will be placed in a queue until it is peer reviewed.{' '}
          </NoticeHead>
          We welcome edits that make the post easier to understand and more
          valuable for readers. Because community members review edits, please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resources and
          hyperlinks.
        </NoticeExplan>
        <TitleInput>
          <Title>Title</Title>
          <TitleText />
        </TitleInput>
        <BodyComponent>
          <Title>Body</Title>
          <Preview />
        </BodyComponent>
        <AddComment href="#">Add a comment</AddComment>
      </NoticeComponent>

      <MemoContainer>
        <MemoHeader>How to Format</MemoHeader>
        <MemoMenu>
          <Memoul>
            <Memoli>create code fences with backticks ` or tildes ~</Memoli>
            <MemoEx>
              ```
              <br />
              like so
              <br />
              ```
            </MemoEx>
            <Memoli>add language identifier to highlight code</Memoli>
            <MemoEx>
              ```python
              <br />
              <codecolor>def</codecolor> function(foo):
              <br />
              &nbsp; &nbsp; <codecolor>print</codecolor>(foo)
              <br />
              ```
            </MemoEx>
            <Memoli>put returns between paragraphs</Memoli>
            <Memoli>for linebreak add 2 spaces at end</Memoli>
            <Memoli>
              _<italic>italic_</italic> or <bold>**bold**</bold>
            </Memoli>
            <Memoli>indent code by 4 spaces</Memoli>
            <Memoli>
              backtick escapes <MemoLike>`like _so_`</MemoLike>
            </Memoli>
            <Memoli>quote by placing &gt; at start of line</Memoli>
            <Memoli>
              to make links (use https whenever possible)
              &lt;https://example.com&gt; [example](https://example.com) &lt;a
              href=&quot;https://example.com&quot; &gt;example&lt;/a&gt;
            </Memoli>
          </Memoul>
          <MemoLinks>
            <MemoLink href="#">formatting help »</MemoLink>
            <MemoLink href="#">asking help »</MemoLink>
          </MemoLinks>
        </MemoMenu>
      </MemoContainer>
    </AnswerComponent>
  );
}

export default AnswerEdit;
