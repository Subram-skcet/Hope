import React from "react";
import "./App.css";
import { useDataLayerValue } from "../StateProvider";
import { useNavigate } from "react-router-dom"
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
function Structure({ music }) {
  const navigate=useNavigate();
  const [{ playing}, dispatch] = useDataLayerValue();
  
  const Play =() => {
    if(playing){
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    }
    const newlocal = {
      limg: music.img,
      ltitle: music.title,
      ldesc:music.desc,
      lmusic:music.audio,
      sign: true,
    };
    dispatch({
      type: "SET_LOCAL",
      payload: newlocal,
    });
    dispatch({
      type: "SET_PLAYING",
      playing:true,
    });
    navigate("/Mbody", { state: { music } });
  };
  return (
    <div className="structure" onClick={Play}>
      <img src={music.img} alt="img here" className="image" />
      <h2>{music.title}</h2>
      <p>{music.desc}</p>
        <div className="playdiv">
          <PlayCircleFilledOutlinedIcon className="play"/>
        </div>
      </div>
  );
}
export default Structure;
