export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://myngs.netlify.app/";

const clientId = "4d875123e4534b1489b62b260921566c";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = ()=>{
    return window.location.hash.substring(1).split('&')
    .reduce((initial,item)=>{
        let parts = item.split('=')
        initial[parts[0]]  = decodeURIComponent(parts[1]);

        return initial;
    },{});
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
