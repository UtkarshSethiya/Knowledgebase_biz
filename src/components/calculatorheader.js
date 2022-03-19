import logo from './images/logo.png';
import './header.css';
import { Link } from "react-router-dom";
import React from 'react'

/*<div className='home' ><Link  className='home '  to='/home'> Home</Link></div>*/
function Calheader(){


return(<div>
   <div class="navbar  ">
    <div className='topleft '>
   <div className='logo-cont'><a href="https://bizconnectevents.com/" ><img className='logo-image '  src={logo} height="60px" width="110px"></img>   </a></div>
    
   <div className='home' ><Link  className='home '  to='/'> Home</Link></div>
    </div>
    
  

    <div className=''>
   
    <Link className="topbuttons btn" to="/pricing/pricing"><i class="bi topicons bi-cash-coin"></i> Pricing</Link>
  
 
    <button className="btn topbuttons subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>
  

</div>)

}
export default Calheader