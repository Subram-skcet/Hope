import React,{ useState } from "react";
import Sidebar from "../Side_bar/Sidebar";
import Body from "../Body/Body";
import './Player.css'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Footer from '../Footer_fold/Footer'
import { Outlet } from "react-router-dom";
function Player({ spotify }) {
   const [menu, setMenu] = useState(true);
   const toggleMenu = () => {
     setMenu(!menu);
   };
  return (
    <div className="player">
      <div className="player_body">
        {menu ? (
  
            <MenuIcon onClick={toggleMenu} className="menu" fontSize="large" />
          ) : (
            <>
            <CloseIcon onClick={toggleMenu} className="closemenu" fontSize="large" />
            <Sidebar/> {/* Sidebar*/}
            </>
            )}
        <main className="main">
          <Outlet />
        </main>
        <Body spotify={spotify} />
        {/* Body */}
      </div>
      <Footer spotify={spotify} />
      {/* Footer(Play button) */}
    </div>
  );
}
export default Player;
