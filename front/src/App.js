import styled from 'styled-components';
import Search from './components/header/Search';
import Header from './components/header/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
import AskQuestion from './pages/AskQuestion';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditUserPage';
import Questions from './pages/Questions';
import LeftSidebar from './components/LeftSidebar';
import EditPost from './pages/EditPost';
import SignUp from './pages/SignUp';

const MainBody = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <SignUp />
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <Footer /> */}
      {/* <AskQuestion /> */}
    </div>
  );
}

export default App;
