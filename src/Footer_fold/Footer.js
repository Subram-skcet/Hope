import LoopSharpIcon from "@mui/icons-material/LoopSharp";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material"; // Grid version 1
import React, { useRef, useEffect } from "react";
import { useDataLayerValue } from "../StateProvider";
import "./Footer.css";

const Footer = ({ spotify }) => {
  const audioRef = useRef(null);
  const ImgRef = useRef(null);
  const [{ item, playing, local }, dispatch] = useDataLayerValue();
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify,dispatch]);
 useEffect(() => {
   try {
     const playPromise = audioRef.current.play();

     if (playPromise !== undefined) {
       playPromise
         .then(() => {
           // Playback started successfully
         })
         .catch((error) => {
          //  console.error("Error during playback:", error);
         });
     }
   } catch (error) {
    //  console.error("Error trying to play audio:", error);
   }
 }, [local.lmusic, audioRef]);
  const handlePlayPause = () => {
    if (playing) {
      if(local.lmusic===null){
        // console.log("Inside local music button");
           
          spotify.pause().catch((error) => {
            console.error("Error playing:", error);
            // console.log("Full XMLHttpRequest:", error);
          });
        }
        else{
          // console.log("Pause button");
        audioRef.current.pause();
         }
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
      } else {
        if(local.music===null){
          
          spotify.play().catch((error) => {
            // console.error("Error playing:", error);
          });
        }
        else{
          audioRef.current.play();
          // console.error("Tend to playing:");
        }
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src={local.sign ? local.limg : item?.album.images[0].url}
          alt={item?.name}
          ref={ImgRef}
        />
        {local.sign ? (
          <div>
            <h4>{local.ltitle}</h4>
            <p>{local.ldesc}</p>
          </div>
        ) : item ? (
          <div className="footer_songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon onClick={skipNext} className="footer_icon" />
        {playing ? (
          <PauseCircleOutlineOutlinedIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        )}
        <SkipNextIcon onClick={skipPrevious} className="footer_icon" />
        <LoopSharpIcon className="footer_green" />
        <audio ref={audioRef} src={local.lmusic} />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Footer;
