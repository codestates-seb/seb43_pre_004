// import React from 'react';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
import TextEditor from '../components/TextEditor';
import { AskTitle, AskEditor } from '../recoil/Atom';

const ContainerWrapper = styled.div`
  width: 100%;
  background-color: #f8f9f9;

  .quill {
    background-color: #fff;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 851px;
  margin: 0 auto; // 추가
  h1 {
    margin: 24px 0px 27px;
  }
  /* background-color: #fff; */
`;

const Notice = styled.div`
  padding: 24px;
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  border-radius: 3px;

  /* h2 {} */
  h5 {
    margin: 0 0 8px 0;
  }
  ul {
    padding: 0;
    margin: 0 0 0 30px;
    list-style-type: disc;
  }
`;

const Links = styled.span`
  color: #0074cc;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.div`
  background-color: #fff;
  /* color: red; */
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin: 15px 0;
  padding: 24px;
  /* background-color: #f8f9f9; */
`;

const TitleSub = styled.span`
  display: flex;
  /* border: 1px solid #d6d9dc; */
  /* border-radius: 3px; */
  font-size: 12px;
  margin: 2px 0;
`;

const TitleInput = styled.input`
  /* border: 1px solid; */
  width: 100%;
  padding: 7.8px 9.1px;
  font-size: 10px;
  &:focus {
    border: 2px solid #a6ceed;
  }
  outline: none;
`;

const ReviewButton = styled.button`
  color: #fff;
  border: 1px solid #fff;
  background-color: #0a95ff;
  padding: 10px;
  margin: 10px;
`;

function AskQuestion() {
  const [title, setTitle] = useRecoilState(AskTitle);
  const [content, setContent] = useRecoilState(AskEditor);
  const navigate = useNavigate();

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();

    const postContent = {};
    postContent.title = title;
    postContent.content = content;
    postContent.contentImg = null;
    postContent.bounty = 0;

    fetch('https://1925-115-140-189-21.jp.ngrok.io/question/ask', {
      method: 'POST',
      headers: {
        'Content-type': 'text/plain',
      },
      body: JSON.stringify(postContent),
    })
      .then(res => {
        navigate('/question/list');
      })
      .catch(err => console.log(err));
  };

  return (
    <ContainerWrapper>
      <Container>
        <h1>Ask a public question</h1>
        <Notice>
          <h2>Writing a good question</h2>
          <p>
            You’re ready to <Links>ask</Links> a{' '}
            <Links>programming-related question</Links> and this form will help
            guide you through the process.
            <br />
            Looking to ask a non-programming question? See{' '}
            <Links>the topics here</Links> to find a relevant site.
          </p>
          <h5>Steps</h5>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </Notice>
        <Title>
          Title
          <TitleSub>
            Be specific and imagine you’re asking a question to another person.
          </TitleSub>
          <TitleInput
            type="text"
            placeholder="e.g ls there an R function for finding the index of an element in a vector?"
            value={title}
            onChange={handleTitleChange}
          />
        </Title>

        <TextEditor value={content} onChange={setContent} />
        <ReviewButton onClick={handleClick}>Post your question</ReviewButton>
      </Container>
    </ContainerWrapper>
  );
}

export default AskQuestion;
