import React from "react";
import { musiclist } from "./Music_List";
import { musiclist2 } from "./Music_List";
import { musiclist3 } from "./Music_List";
import Structure from "./Music_Struct";
import "./Music_Struct.css";
import Navlst from './Navlst'
function App() {
  return (
    <section className="section">
      <div>
        <h1 className="h1">Recently Played</h1>
        <div className="musiclist">
          {musiclist.map((music) => (
            <Structure music={music} key={music.id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="h1">Recommended for today</h1>
        <div className="musiclist">
          {musiclist2.map((music) => {
            return <Structure music={music} key={music.id} />;
          })}
        </div>
      </div>
      <div>
        <h1 className="h1">Hitlist</h1>
        <div className="musiclist">
          {musiclist3.map((music) => {
            return <Structure music={music} key={music.id} />;
          })}
        </div>
      </div>
      <Navlst />
    </section>
  );
}
export default App;
