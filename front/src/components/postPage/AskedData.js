import styled from 'styled-components';

const AskedWrapper = styled.div`
  width: 200px;
  height: 67.69px;
  padding: 5px 5px 7px 7px;
  background-color: #e1ecf4;
  font-size: 12px;
  color: #6a737c;
`;
const Content = styled.div`
  > .date {
    margin: 1px 0px 4px 0px;
  }
`;
const UserInf = styled.div`
  display: flex;
  > img {
    width: 32px;
    height: 32px;
    border-radius: 2px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 8px;
    > span {
      font-size: 13px;
      color: #0074cc;
    }
    > p {
      font-weight: 700;
    }
  }
`;
function AskedData() {
  return (
    <AskedWrapper>
      <Content>
        <div className="date">asked 3 hours ago</div>
        <UserInf>
          <img
            src="https://lh3.googleusercontent.com/a/AGNmyxbDWZTRA18Nxi2ZXXDMgNucovxTvk_tZZxjLv5j=k-s256"
            alt="user-img"
          />
          <div>
            <span>user name</span>
            <p>272</p>
          </div>
        </UserInf>
      </Content>
    </AskedWrapper>
  );
}

export default AskedData;
