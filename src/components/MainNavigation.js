import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className="fixed w-full h-12 text-white bg-purple-500 flex items-center justify-center">
        <NavLink to="/" >nogiFiles</NavLink>
      </nav>
    </header>
  );
};

export default MainNavigation;
