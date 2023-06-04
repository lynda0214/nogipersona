import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className='pt-20 pb-20 bg-purple-50'>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
