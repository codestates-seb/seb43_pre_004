import React from 'react';
import styled from 'styled-components';

const Searchbar = styled.input`
  width: 23rem;
  height: 31px;
  margin-right: 10px;
  border-radius: 3px;
  border: 1px solid rgba(186, 191, 196, 1);
  :focus {
    border: 1px solid #b3d3ea;
    outline: 2px solid #d0e3f1;
  }
`;

function Search() {
  return (
    <div>
      <Searchbar type="text" placeholder="Search..." />
    </div>
  );
}

export default Search;
