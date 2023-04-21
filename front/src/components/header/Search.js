import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = styled.input`
  width: 38rem;
  height: 31px;
  margin-right: 10px;
  padding-left: 32px;
  border-radius: 3px;
  border: 1px solid rgba(186, 191, 196, 1);
  :focus {
    border: 1px solid #b3d3ea;
    outline: 2px solid #d0e3f1;
  }
  @media screen and (max-width: 1210px) {
    max-width: 25rem;
  }
  @media screen and (max-width: 455px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  > .icon {
    width: 19px;
    height: 19px;
    position: absolute;
    top: 30%;
    opacity: 50%;
    margin-left: 9px;
  }
  @media screen and (max-width: 455px) {
    display: none;
  }
`;
function Search() {
  return (
    <div>
      <Searchbar type="text" placeholder="Search..." />
      <SearchIcon>
        <AiOutlineSearch className="icon" />
      </SearchIcon>
    </div>
  );
}

export default Search;
