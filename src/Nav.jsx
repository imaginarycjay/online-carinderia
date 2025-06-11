import logo from "./assets/mainLogo.png"
import notClickedMenu from "./assets/menu.svg"
import clickedMenu from "./assets/clickmenu.svg"
import { useState } from "react"
export default function Nav() {
   const [activateMenu, setActivateMenu] = useState(false)
   //handle click menu changes
   const openMenu = () => {
      setActivateMenu(prev => !prev) 
   }

  return (
    <div className="flex justify-between h-[4.3rem] bg-gray-200/15 backdrop-blur-md w-full shadow-lg">
      <img src={logo} alt="logo" className="object-contain w-30 md:w-30 lg:w-40 ml-5"/>
      <button className="mr-5 md:hidden lg:hidden" onClick={openMenu} >
        {/* conditional decisions when hamburger is clicked */}
         <img src={activateMenu ? clickedMenu : notClickedMenu} className={`${!activateMenu ? 'w-11' : 'w-7 mr-1'}`}/>
      </button>
    </div>
  );
}
