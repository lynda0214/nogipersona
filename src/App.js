import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MemberPage, { loader as memberLoader } from './pages/MemberPage';
import MembersPage, { loader as membersLoader } from './pages/MembersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about/', element: <AboutPage /> },
      {
        path: '/members/:memberGrade/',
        element: <MembersPage />,
        loader: membersLoader,
      },
      {
        path: '/member/:memberId/',
        element: <MemberPage />,
        loader: memberLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
