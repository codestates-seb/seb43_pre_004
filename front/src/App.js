import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AskQuestion from './pages/AskQuestion';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/askquestion" element={<AskQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
