import logo from './images/logo.png';
import './header.css';
import { Link } from "react-router-dom";


function Header(){


return(<div className=' '>

  <div class="navbar  ">
    <div className='topleft'>
   <div className='logo-cont'><a href="https://bizconnectevents.com/" ><img className='logo-image '  src={logo} height="100%" width="90%"></img>   </a></div>
    <div className='home' ><Link  className='home '  to='/home'> Home</Link></div>
    
    </div>
    
  

    <div className=' '>
    <Link className="topbuttons submit_request btn" to="/request"><i class="bi topicons bi-cash-coin"></i> Submit a Request</Link>
    <Link className="topbuttons btn" to="/pricing/pricing"><i class="bi topicons bi-cash-coin"></i> Pricing</Link>
    <Link  className="topbuttons btn " to="/calculator"><i class="bi topicons bi-calculator-fill"></i> Calculator</Link>
 
    <button className="btn topbuttons subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>


<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <pre></pre><pre></pre>
    <h1 id='heading'>BizConnect Knowledgebase</h1>
    <h2 id='help'>How can we help you ?</h2>
    <pre></pre>
   <input class="fontAwesome" placeholder=' &#xF002;  Search Your Queries'>

</input>
</div>
<pre></pre>
<div className='faq' ><a className='faq' href='#'>FAQ's</a></div>

<pre></pre><br></br>
  </div>

</div>
 
 


    </div>
 );

}
export default Header;
