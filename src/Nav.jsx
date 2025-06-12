import { Link, NavLink } from "react-router-dom";
import logo from "./assets/mainLogo.png";
import notClickedMenu from "./assets/menu.svg";
import clickedMenu from "./assets/clickmenu.svg";
import { useState } from "react";
export default function Nav() {
  const [activateMenu, setActivateMenu] = useState(false);
  //handle click menu changes
  const openMenu = () => {
    setActivateMenu((prev) => !prev);
  };

  // todo: make a component if the hamburger is clicked a side panel will pop right off
  const SideBar = () => {
    return <></>;
  };

  const ACTIVE_STYLE = "text-blue-500 font-bold hover:underline underline-offset-3 decoration-2"

  return (
    <div className="flex justify-between h-[4.3rem] bg-gray-200/15 backdrop-blur-md w-full shadow-lg">
      <img
        src={logo}
        alt="logo"
        className="object-contain w-30 md:w-30 lg:w-40 ml-5"
      />
      <button className="mr-5 md:hidden lg:hidden" onClick={openMenu}>
        {/* conditional decisions when hamburger is clicked */}
        <img
          src={activateMenu ? clickedMenu : notClickedMenu}
          className={`${!activateMenu ? "w-11" : "w-7 mr-1"}`}
        />
      </button>
      <nav className="hidden md:flex md:gap-4 md:items-center md:mr-8">
        <NavLink to={"/"} className={({isActive}) => isActive ? ACTIVE_STYLE : "hover:underline underline-offset-3 decoration-2"}>Home</NavLink>
        <NavLink to={"/fav"} className={({isActive}) => isActive ? ACTIVE_STYLE : "hover:underline underline-offset-3 decoration-2"}>Favorites</NavLink>
        <NavLink to={"/About"} className={({isActive}) => isActive ? ACTIVE_STYLE : "hover:underline underline-offset-3 decoration-2"}>About</NavLink> {/* todo: make an about page */}
      </nav>
    </div>
  );
}
