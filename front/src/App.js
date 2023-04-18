import GlobalStyles from './styles/GlobalStyles';
import Search from './components/Search';
import Header from './components/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
import AskQuestion from './pages/AskQuestion';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <AskQuestion />
      <Footer />
    </div>
  );
}

export default App;
