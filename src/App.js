import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage, { loader as membersLoader } from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MemberPage, { loader as memberLoader } from './pages/MemberPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: membersLoader },
      { path: '/about', element: <AboutPage />},
      { path: '/member/:memberId', element: <MemberPage />, loader: memberLoader }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
