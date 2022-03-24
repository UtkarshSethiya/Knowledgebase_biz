import logo from './images/logo.png';
import './header.css';
import { Link } from "react-router-dom";


function Header(){


return(<div className=' '>

  <div class="navbar  ">
    <div className='topleft'>
   <div className='logo-cont'><a href="https://bizconnectevents.com/" ><img className='logo-image '  src={logo} height="90%" width="90%"></img>   </a></div>
    <div className='home' ><Link to='/home'  className='home '  > Home</Link></div>
    
    </div>
    
  

    <div className=' '>
    <Link to="/request" className="topbuttons submit_request btn" ><i class="bi topicons bi-cash-coin"></i> Submit a Request</Link>
    <Link  to="/pricing/pricing" className="topbuttons btn"><i class="bi topicons bi-cash-coin"></i> Pricing</Link>
    <Link to="/calculator"  className="topbuttons btn " ><i class="bi topicons bi-calculator-fill"></i> Calculator</Link>
 
    <button className="btn topbuttons subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>


<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <pre></pre>
    <h1 id='heading'>BizConnect Knowledgebase</h1>
    <h2 id='help'>How can we help you ?</h2>
    <pre></pre>
   <input class="fontAwesome searchit" placeholder=' &#xF002;  Search Your Queries'>

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
