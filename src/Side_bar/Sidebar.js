import SidebarOption from "../Sidebar_option/SidebarOption";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../StateProvider";
import { Link } from "react-router-dom";
import img from "../logo-white.png";

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
 
  return (
    <div className="sidebar">
    
    <img
      className="sidebar_logo"
      src={img}
      alt=""
    />
    <Link to="/App2" className="link">
      <SidebarOption Icon={HomeIcon} title="Home" />
    </Link>
    <Link to="/Search" className="link">
      <SidebarOption Icon={SearchIcon} title="Search" />
    </Link>

    <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
    <br />
    <strong className="sidebar_title">PLAYLISTS</strong>
    <hr />

    {playlists?.items?.map((playlist) => (
      <SidebarOption title={playlist.name} />
    ))}
    </div>
  );
}
export default Sidebar;
