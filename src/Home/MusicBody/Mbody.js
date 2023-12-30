import './Mbody.css'
import FirstHalf from './FirstHalf';
import SecondHalf from './SecondHalf'
import { useLocation } from 'react-router-dom';
function Mbody() {
    const location=useLocation();
    const { state: {music}} =location;
 return (
   <div className="mbody">
     <FirstHalf music={music} />
     <SecondHalf music={music} />
   </div>
 );
}

export default Mbody;
