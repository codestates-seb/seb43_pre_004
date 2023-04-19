import styled from 'styled-components';
/* import { NavLink } from 'react-router-dom'; */
import { ReactComponent as GlobalIcon } from '../image/globalIcon.svg';
import { ReactComponent as IconInfoSm } from '../image/iconInfoSm.svg';
import { ReactComponent as IconStar } from '../image/iconStar.svg';
import { ReactComponent as LetterIcon } from '../image/letterIcon.svg';

const SideNav = styled.div`
  width: 164px;
  padding-top: 24px;
  color: #525960;
  font-size: 13px;
  border-right: 1px solid rgb(215 215 215);
`;
const Ul = styled.ul`
  > .nav-tab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* padding: 8px 6px 8px 4px; */
    height: 26px;
    :not(:nth-child(2n + 3)):hover {
      color: #0c0d0e;
    }
    > span {
      margin-left: 5px;
    }
  }
  > .icon-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 12px 4px 5px;
    font-size: 11px;
  }
`;
const PublicUl = styled.ul`
  > li {
    padding: 8px 6px 8px 30px;
    height: 34px;
    :not(:first-of-type):hover {
      color: #0c0d0e;
    }
  }
  > .public {
    margin-top: 16px;
    padding: 8px 30px 4px 4px;
    font-size: 11px;
  }
  > .global-tab {
    display: flex;
    align-items: center;
    padding: 8px 6px 8px 4px;
    margin-top: -10px;
    > .global {
      display: flex;
      align-items: center;
      > .icon {
        margin: 0px 3px 0px 0px;
        :hover {
          fill: #0c0d0e;
        }
      }
    }
  }
`;
const IconBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: rgb(244, 130, 37);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background-color: #f0f8ff;
  border: none;
  border-radius: 3px;
  margin-top: 24px;
  padding: 6px;
  width: 155px;
  height: 31px;
  font-size: 12px;
  color: #0063bf;
  :hover {
    color: rgb(4 68 126);
  }
`;
/* const NavStyle = styled(NavLink)`
  :hover {
    color: #0c0d0e;
  }
  &.active {
    width: 160px;
    height: 34px;
    color: #0c0d0e;
    background-color: #f2f2f3;
    border-right: 3px solid #f48024;
    li {
      display: flex;
      align-items: center;
      font-weight: bold;
     > .icon {
        fill: #0c0d0e;
      }
    }

`; */
function LeftSidebar() {
  return (
    <SideNav>
      <Ul>
        {/* <NavStyle to="" className="nav-tab"> */}
        <li className="nav-tab">Home</li>
        {/* </NavStyle> */}
        <PublicUl>
          <li className="public">PUBLIC</li>
          {/* <NavStyle to="" className="global-tab"> */}
          {/* <li className="global"></li> */}
          <li className="global-tab">
            <GlobalIcon className="icon" />
            &nbsp;&nbsp;Questions
          </li>
          {/* </NavStyle> */}
          <li>Tags</li>
          <li>Users</li>
          <li>Companies</li>
        </PublicUl>
        <li className="icon-tab">
          COLLECTIVES
          <IconInfoSm />
        </li>
        <li className="nav-tab">
          &nbsp;
          <IconStar />
          <span>Explore Collectives</span>
        </li>
        <li className="icon-tab">
          TEAMS
          <IconInfoSm />
        </li>
        <li className="nav-tab">
          &nbsp;
          <IconBox>
            <LetterIcon />
          </IconBox>
          <span>Create free Team</span>
        </li>
        <li className="nav-tab">
          <Button type="button">Looking for your Teams?</Button>
        </li>
      </Ul>
    </SideNav>
  );
}

export default LeftSidebar;
