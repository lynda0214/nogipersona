import { useNavigate } from 'react-router-dom';

const MainNavigation = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  const goHomeHandler = () => {
    navigate('/');
  }

  return (
    <header>
      <nav className="fixed w-full h-12 bg-purple-500 flex align-middle">
        <button onClick={goBackHandler}>Back</button>
        <button className="ml-12" onClick={goHomeHandler}>Home</button>
      </nav>
    </header>
  );
};

export default MainNavigation;
