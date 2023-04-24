import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';
import LeftSidebar from '../components/LeftSidebar';
import Footer from '../components/Footer';

const MainBody = styled.div`
  display: flex;
  justify-content: center;
`;
function UserRouter() {
  return (
    <>
      <Header />
      <MainBody>
        <LeftSidebar />
        <Outlet />
      </MainBody>
      <Footer />
    </>
  );
}

export default UserRouter;
