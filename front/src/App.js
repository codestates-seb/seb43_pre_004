import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Search from './components/header/Search';
import Header from './components/header/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
import AskQuestion from './pages/AskQuestion';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditUserPage';
import Questions from './pages/Questions';
import LeftSidebar from './components/LeftSidebar';

const MainBody = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <MainBody>
        <LeftSidebar />
        <EditUserPage />
      </MainBody>
      <Footer />
    </div>
  );
}

export default App;
