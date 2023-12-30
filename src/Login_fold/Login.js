import { loginUrl } from '../spotify';
import img from "../logo-white.png"
import './Login.css';
function Login() {
  return (
    <div className="login">
      <img src={img} alt=""/>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
export default Login