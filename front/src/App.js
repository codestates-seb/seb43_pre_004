import GlobalStyles from './styles/GlobalStyles';
import Search from './components/Search';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Login />
    </div>
  );
}

export default App;
