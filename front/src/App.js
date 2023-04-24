import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Search from './components/header/Search';
import Login from './pages/Login';
import AskQuestion from './pages/AskQuestion';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditUserPage';
import Questions from './pages/Questions';
import EditPost from './pages/EditPost';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import PostPage from './pages/PostPage';
import BaseRouter from './router/BaseRouter';
import QuestionRouter from './router/QuestionRouter';
import UserRouter from './router/UserRouter';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseRouter />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/question/ask', element: <AskQuestion /> },
      { path: '/question/:questionId', element: <PostPage /> },
      { path: '/question/ask/:questionId', element: <EditPost /> },
    ],
  },
  {
    path: '/',
    element: <QuestionRouter />,
    errorElement: <NotFound />,
    children: [{ index: true, path: '/question/list', element: <Questions /> }],
  },
  {
    path: '/',
    element: <UserRouter />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/user/profile', element: <UserPage /> },
      { path: '/user/profile/edit', element: <EditUserPage /> },
      /* { index: true, path: '/user/profile/:memberId', element: <UserPage /> },
    { path: '/user/profile/edit/:memberId', element: <EditUserPage /> }, */
    ],
  },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
