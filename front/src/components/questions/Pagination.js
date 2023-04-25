import styled from 'styled-components';
import PaginationCustom from 'react-js-pagination';
// import Button from "../Components/style/Button";

const PaginationWrap = styled.div`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  ul {
    display: flex;
    gap: 5px;
    color: var(--black-700);

    & > li:first-child {
      display: none;
    }

    & > li:nth-child(2) {
      width: 50px;
    }

    & > li:nth-last-child(2) {
      width: 50px;
    }

    & > li:last-child {
      display: none;
    }

    & > li.active {
      border-color: #f48225;
      background-color: #f48225;
      > a {
        color: #fff;
      }
    }
  }

  li {
    width: 23.96px;
    height: 27px;
    padding-top: 3px;
    border: 1px solid #bcbbbb;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      background-color: var(--black-070);
      color: #fff;
    }
    > a {
      color: #3b4045;
    }
  }
`;

// const PageBtn = styled.button`
//   background-color: var(--white);
// `;

function Pagination({ currentPage, count, setPage }) {
  return (
    <div>
      <PaginationWrap>
        <PaginationCustom
          activePage={1} // 현재페이지
          itemsCountPerPage={15} // 한 페이지 당 보여줄 아이템 수
          totalItemsCount={30} // 총 아이템 수
          onChange={() => {}} // 페이지 바뀔 때 핸들링 함수
          pageRangeDisplayed={5} // paginator에서 보여줄 페이지 범위
          prevPageText="Prev" // 이전 페이지 가기 나타내는 텍스트
          nextPageText="Next" // 다음 페이지 가기 나타내는 텍스트
        />
      </PaginationWrap>
    </div>
  );
}

export default Pagination;
