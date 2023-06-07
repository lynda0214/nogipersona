import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className='pt-20 pb-20 pl-10 pr-10'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
