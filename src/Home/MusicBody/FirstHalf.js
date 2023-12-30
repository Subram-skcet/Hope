import "./FirstHalf.css";
import WaveAnimation from "./WaveAnimation";
function FirstHalf({ music }) {
  return (
    <div className="div">
      <img className="mimg" src={music.img} alt="" />
      <div className="Wave">
        <WaveAnimation />
      </div>
      <p className="mh1">{music.title}</p>
      <span className="mp">{music.desc}</span>
    </div>
  );
}
export default FirstHalf;
