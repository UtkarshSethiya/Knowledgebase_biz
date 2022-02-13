import logo from './images/logo.png';
import './header.css';
import { Link } from "react-router-dom";
import React from 'react'


function Calheader(){


return(<div>
    <div class="container-fluid row navbar">
    <div className='col-3  topleft navbar  '>
    <a class="navbar-brand" href="https://bizconnectevents.com/" ><img className='logo' src={logo} height="62px" width="124px"></img>   </a>
    <Link class="navbar-brand home " to='/home'> Home</Link>
    
    </div>
    
    <div className='col-6 middle  '  > </div>

    <div className='col rightbuttons navbar  subscribe'>
  
    <Link className="topbuttons btn" to="/pricing/pricing"><i class="bi bi-cash-coin"></i> Pricing</Link>

 
    <button className="btn subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>
</div>)

}
export default Calheader