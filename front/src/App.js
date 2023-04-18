import GlobalStyles from './styles/GlobalStyles';
import Search from './components/Search';
import Header from './components/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
import AskQuestion from './pages/AskQuestion';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditUserPage';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <EditUserPage />
      <Footer />
    </div>
  );
}

export default App;
