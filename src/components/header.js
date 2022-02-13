import logo from './images/logo.png';
import './header.css';
import { Link } from "react-router-dom";


function Header(){


return(<div className='row '>

  <div class="container-fluid row navbar">
    <div className='col-3  topleft navbar  '>
    <a class="navbar-brand" href="https://bizconnectevents.com/" ><img className='logo' src={logo} height="62px" width="124px"></img>   </a>
    <Link class="navbar-brand home " to='/home'> Home</Link>
    
    </div>
    
    <div className='col middle  '  > </div>

    <div className='col-6 rightbuttons navbar  subscribe'>
    <Link className="topbuttons btn" to="/request"><i class="bi bi-cash-coin"></i> Submit a Request</Link>
    <Link className="topbuttons btn" to="/pricing/pricing"><i class="bi bi-cash-coin"></i> Pricing</Link>
   <Link  className="topbuttons btn " to="/calculator"><i class="bi bi-calculator-fill"></i> Calculator</Link>
 
    <button className="btn subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>


<div className='row main '>
<div className='col-3'></div>
  <div className='col-6'>
  <span className='searchbox'>
    <pre></pre><pre></pre>
    <h1 id='heading'>BizConnect Knowledgebase</h1>
    <h2 id='help'>How can we help you ?</h2>
    <pre></pre>
   <input class="fontAwesome" placeholder=' &#xF002;  Search Your Queries'>

</input>
</span>
<pre></pre>
<div className='faq' ><a className='faq' href='#'>FAQ's</a></div>

<pre></pre><br></br>
  </div>

</div>
 
 


    </div>
 );

}
export default Header;
