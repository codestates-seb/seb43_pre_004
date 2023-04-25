import React from 'react';
import styled from 'styled-components';
import main from '../image/main.png';

const MainBody = styled.div`
  display: flex;
  justify-content: center;
`;
function Main() {
  return (
    <MainBody>
      <img src={main} alt="mainPage" />
    </MainBody>
  );
}

export default Main;
