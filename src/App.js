import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import MemberPage from './pages/MemberPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorPage: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/:memberId', element: <MemberPage />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
