import React from 'react';
import styled from 'styled-components';
import { ReactComponent as singquestion } from '../../image/signQuestion.svg';
import { ReactComponent as singlike } from '../../image/signLike.svg';
import { ReactComponent as singtags } from '../../image/signTags.svg';
import { ReactComponent as signreputation } from '../../image/signReputation.svg';

const SingQuestion = styled(singquestion)`
  fill: #0a95ff;
  margin: -2px 10px 0 0;
`;

const SingLike = styled(singlike)`
  fill: #0a95ff;
  margin: -2px 10px 0 0;
`;

const SingTags = styled(singtags)`
  fill: #0a95ff;
  margin: -2px 10px 0 0;
`;

const SignReputation = styled(signreputation)`
  fill: #0a95ff;
  margin: -2px 10px 0 0;
`;

const SignExplanation = styled.div`
  width: 421.328px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 48px 128px 0px;
  color: #232629;
`;

const SignHead = styled.h1`
  font-size: 27px;
  margin-bottom: 32px;
`;

const SignImgText = styled.div`
  display: flex;
  font-size: 15px;
  margin-bottom: 24px;
`;

const SmallText = styled.div`
  font-size: 13px;
  color: #6a737c;
  > a {
    color: #0074cc;
  }
`;

function SignupLeft() {
  return (
    <SignExplanation>
      <SignHead>Join the Stack Overflow community</SignHead>
      <SignImgText>
        <SingQuestion />
        Get unstuck — ask a question
      </SignImgText>
      <SignImgText>
        <SingLike />
        Unlock new privileges like voting and commenting
      </SignImgText>
      <SignImgText>
        <SingTags />
        Save your favorite questions, answers, watch tags, and more
      </SignImgText>
      <SignImgText>
        <SignReputation />
        Earn reputation and badges
      </SignImgText>
      <SmallText>
        Collaborate and share knowledge with a private group for FREE.
        <br />
        <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
          Get Stack Overflow for Teams free for up to 50 users.
        </a>
      </SmallText>
    </SignExplanation>
  );
}

export default SignupLeft;
