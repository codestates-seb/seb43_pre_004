import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
// import Header from '../components/header/Header';
import LoginHeader from '../components/header/LoginHeader';
import LeftSidebar from '../components/LeftSidebar';
import RightSideYellow from '../components/rightSideBar/RightSideYellow';
import Footer from '../components/Footer';

const MainBody = styled.div`
  display: flex;
  justify-content: center;
`;
const RightFlex = styled.div`
  margin: 24px;
`;
function QuestionRouter() {
  return (
    <>
      <LoginHeader />
      <MainBody>
        <LeftSidebar />
        <Outlet />
        <RightFlex>
          <RightSideYellow />
        </RightFlex>
      </MainBody>
      <Footer />
    </>
  );
}

export default QuestionRouter;
