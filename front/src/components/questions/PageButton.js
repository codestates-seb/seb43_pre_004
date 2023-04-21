import React from 'react';
import styled from 'styled-components';

const PaginationArea = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  margin-top: 48px;

  .firstSec {
    width: 262.68px;
    display: flex;
    justify-content: space-between;
  }

  .secondSec {
    width: 184px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const PageMoveButton = styled.button`
  width: auto;
  height: 27px;
  padding: 0px 8px;
  border: 1px solid #bcbbbb;
  border-radius: 2px;
  background-color: #fff;
`;

function PageButton() {
  return (
    <PaginationArea>
      <div className="firstSec">
        <PageMoveButton>1</PageMoveButton>
        <PageMoveButton>2</PageMoveButton>
        <PageMoveButton>3</PageMoveButton>
        <PageMoveButton>4</PageMoveButton>
        <PageMoveButton>5</PageMoveButton>
        <div>...</div>
        <PageMoveButton>16</PageMoveButton>
        <PageMoveButton>Next</PageMoveButton>
      </div>
      <div className="secondSec">
        <PageMoveButton>15</PageMoveButton>
        <PageMoveButton>30</PageMoveButton>
        <PageMoveButton>50</PageMoveButton>
        <div>per page</div>
      </div>
    </PaginationArea>
  );
}

export default PageButton;
