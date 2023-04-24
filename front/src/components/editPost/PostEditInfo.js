import React from 'react';
import styled from 'styled-components';

const TopInfoBox = styled.div`
  width: auto;
  height: 132px;
  font-size: 13px;
  background-color: #fdf7e2;
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid #efe8cb;
  border-radius: 5px;
  color: #3b4045;
  .infoBoxFir {
    margin-bottom: 13px;
  }
`;

function PostEditInfo() {
  return (
    <TopInfoBox>
      <p className="infoBoxFir">
        Your edit will be placed in a queue until it is peer reviewed.
      </p>
      <p>
        We welcome edits that make the post easier to understand and more
        valuable for readers. Because community members review edits, please try
        to make the post substantially better than how you found it, for
        example, by fixing grammar or adding additional resources and
        hyperlinks.
      </p>
    </TopInfoBox>
  );
}

export default PostEditInfo;
