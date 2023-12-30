import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { React, useState } from "react";
import Structure from "./Home/Music_Struct";
import "./Search.css";
import { musiclist4 } from "./Home/SearchList";
function Search() {
  const [search, setSearch] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filter = musiclist4.filter((music) => {
      return (
        music.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        music.desc.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setFiltered(filter);
  };
  return (
    <div className="Srch">
      <div className="header">
        <div className="header_left">
          <SearchRoundedIcon />
          <input
            placeholder="Search for Artists, Songs, or Podcasts"
            name="search"
            value={search}
            onChange={handleSearch}
            type="text"
          />
        </div>
      </div>

      {search ? (
        filtered.length !== 0 ? (
          <div className="musiclist">
            {filtered.map((music) => {
              return <Structure music={music} key={music.id} />;
            })}
          </div>
        ) : (
          <h1>No results found!</h1>
        )
      ) : (
        <>
          <h1>Search your favourite Song!</h1>
          <div className="musiclist">
            {musiclist4.map((music) => {
              return <Structure music={music} key={music.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
export default Search;
