import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

function BaseRouter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseRouter;
