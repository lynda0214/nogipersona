import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className="fixed w-full h-14 z-10 bg-white  flex items-center justify-between pl-10 pr-10 font-noto shadow-md">
        <NavLink className="font-semibold text-2xl text-purple-700" to="/nogipersona" >◢ ⁴⁶ NogiPersona</NavLink>
        <NavLink className="text-slate-400" to="/nogipersona/about">About</NavLink>
      </nav>
    </header>
  );
};

export default MainNavigation;
