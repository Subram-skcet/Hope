import './SecondHalf.css'
function SecondHalf({music}) {
  return (
    <div className="pdiv">
      <p className="title">Lyric</p>
      <pre className="lyric">{music.lyric}</pre>
    </div>
  );
}
export default SecondHalf