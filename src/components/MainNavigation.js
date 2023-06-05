import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className="fixed w-full h-14 z-10 bg-white text-purple-700 flex items-center justify-start pl-10 font-noto font-semibold text-2xl shadow-md">
        <NavLink to="/" >◢ ⁴⁶ NogiFiles</NavLink>
      </nav>
    </header>
  );
};

export default MainNavigation;
