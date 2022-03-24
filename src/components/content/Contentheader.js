import logo from '../images/logo.png';
import './contentheader.css';
import { Link } from "react-router-dom";


function Contentheader(){


return(<div className=' '>

  <div class="navbar contentnavbar container-fluid  ">
    <div className='topleft'>
   <div className='logo-cont'><a href="https://bizconnectevents.com/" ><img className='logo-image '  src={logo} height="90%" width="90%"></img>   </a></div>
    <div className='home' ><Link to='/home'  className='home '  > Home</Link></div>
  
    </div>
    

    <input class="fontAwesomecontent searchit" placeholder=" Search" />
    <div className=' '>
    <Link to="/request" className="topbuttons submit_request btn" ><i class="bi topicons bi-cash-coin"></i> Submit a Request</Link>
   
 
    <button className="btn topbuttons subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>



 
 


    </div>
 );

}
export default Contentheader;
