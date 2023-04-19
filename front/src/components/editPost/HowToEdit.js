import React from 'react';
import styled from 'styled-components';

const HowToBox = styled.div`
  margin-left: 24px;
`;

const HowToBoxTitle = styled.div`
  width: 363px;
  height: 44.61px;
  background-color: #fbf3d5;
  padding: 12px 15px;
  font-size: 15px;
  font-weight: 500;
  color: #3b4045;
  border: 1px solid #efe8cb;
  border-radius: 5px;
`;

const HowToBoxContent = styled.ul`
  width: 363px;
  height: 166px;
  font-size: 13px;
  color: #232629;
  padding: 4px 15px;
  background-color: #fcf7e4;
  border: 1px solid #efe8cb;
  border-radius: 5px;
  margin-top: -5px;
  > li {
    width: 333px;
    height: 17px;
    font-size: 13px;
    margin: 12px 0px;
    list-style: disc;
    margin-left: 15px;
  }
`;

function HowToEdit() {
  return (
    <HowToBox>
      <HowToBoxTitle>How to Edit</HowToBoxTitle>
      <HowToBoxContent>
        <li>Correct minor typos or mistakes</li>
        <li>Clarify meaning without changing it</li>
        <li>Add related resources or links</li>
        <li>Always respect the author’s intent</li>
        <li>Don’t use edits to reply to the author</li>
      </HowToBoxContent>
    </HowToBox>
  );
}

export default HowToEdit;
