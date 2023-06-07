import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className="fixed w-full h-14 z-10 bg-white flex items-center justify-between pl-5 pr-5 font-noto shadow-md">
        <NavLink className="font-noto font-semibold text-2xl text-purple-700 hover:text-purple-900" to="/nogipersona" >◢ NogiPersona</NavLink>
        <NavLink className="font-noto font-light text-slate-400 hover:text-slate-700" to="/nogipersona/about">About</NavLink>
      </nav>
    </header>
  );
};

export default MainNavigation;
