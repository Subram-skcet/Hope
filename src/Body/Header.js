import "./Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Avatar } from "@mui/material";
import  { useDataLayerValue } from '../StateProvider';


function Header() {
    const [{user}] = useDataLayerValue();
  return (
    <div className="header">

      <div className="header_left">
        <SearchRoundedIcon/>
        <input placeholder="Search for Artists, Songs, or Podcasts" type="text"/>
      </div>

      <div className="header_right">
          <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>
      </div>

    </div>
  );
}
export default Header;
