import logo from './images/logo.png';
import './header.css';
import { Link } from "react-router-dom";
import React from 'react'


function Calheader(){


return(<div>
   <div class="navbar  ">
    <div className='topleft'>
   <div className='logo-cont'><a href="https://bizconnectevents.com/" ><img className='logo-image '  src={logo} height="100%" width="90%"></img>   </a></div>
    <div className='home' ><Link  className='home '  to='/home'> Home</Link></div>
    
    </div>
    
  

    <div className=' '>
    <Link className="topbuttons submit_request btn" to="/request"><i class="bi topicons bi-cash-coin"></i> Submit a Request</Link>
    <Link className="topbuttons btn" to="/pricing/pricing"><i class="bi topicons bi-cash-coin"></i> Pricing</Link>
  
 
    <button className="btn topbuttons subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>

</div>)

}
export default Calheader