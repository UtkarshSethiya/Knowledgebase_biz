import './maincontent.css'
import { Link } from "react-router-dom";
import book from './images/book.png';
import image3 from './images/image 3.png';
import image4 from './images/image 4.png';
import image5 from './images/image 5.png';
import image6 from './images/image 6.png';
import image7 from './images/image 7.png';
import image8 from './images/image 8.png';
import landing from './images/landing.png';
import network from './images/network.png';
import contact from './images/contact.png';
import speaker from './images/speaker.png';
import lobby from './images/lobby.png';
import booth from './images/booth.png';
import user from './images/user.png';
import template from './images/template.png';
import cal from './images/Calculator.png';
import price from './images/Pricing.png';

import dashboardicon from './images/dashboardicon.png';
import eventicon from './images/eventicon.png';
import Exhibitionicon from './images/Exhibitionicon.png';


function Content(){

return(


<div className=' contmax' >
    <div className='row expolretopicsrow'>
       
      
        <div className='col-md-3 book '> <img className='bookimage' src={book}></img></div>
       <div className='col-md-3 explore '>  <p className='topics'>Explore Topics</p></div>
       <div className='col-md-5'><p className='descp'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.</p></div>
       
    <pre></pre>
   
  
    </div>
    <pre></pre>  <pre></pre>
<pre></pre><pre></pre>

<pre></pre><pre></pre>
<div className='row  '>

<Link to='/help/dashboard' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
  <div>
 
<div><img src={'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-dashboard-100-most-used-icons-flaticons-flat-flat-icons-2.png'} height='40px' width='40px'></img> <span className='contheading'>Dashboard</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>
</Link>

<Link to='/help/EventRegistration' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
  <div>
<div><img src={'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-vip-event-event-management-flaticons-lineal-color-flat-icons-2.png'} height='40px' width='40px'></img> <span className='contheading'>Event Registration</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>
</Link>




<Link to='/help/ExhibitionhallManagement' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
  <div>
<div><img src={'https://img.icons8.com/fluency/48/000000/exhibition.png'} height='40px' width='40px'></img> <span className='contheading'>Exhibition Hall Management</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.


</p>
</div>
</Link>

<div className='content_space'><pre></pre></div>


<Link to='/help/LandingPageManagement' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
<div><img src={landing} height='40px' width='40px'></img> <span className='contheading'>Landing Page Management</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>

<Link to='/help/NetworkManagement' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
<div><img src={network} height='40px' width='40px'></img> <span className='contheading'>Network Management</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>




<Link  to='/help/SpeakerRoomManagement' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
<div><img src={speaker} height='40px' width='40px'></img> <span className='contheading'>Speaker Room Management
</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>


<div className='content_space'><pre></pre></div>


<Link to='/help/LobbyManagement' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
<div><img src={lobby} height='40px' width='40px'></img> <span className='contheading'>Lobby Management</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>

<Link to='/help/BoothManagement' className='col-md cont_container m-2'  style={{ textDecoration: 'none' }}>
<div><img src={booth} height='40px' width='40px'></img> <span className='contheading'>Booth Management</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>




<Link to='/help/UserManagement' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
<div><img src={user} height='40px' width='40px'></img> <span className='contheading'>User Management</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>
<div className='content_space'><pre></pre></div>


<Link to='/help/TemplateManagement' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
<div><img src={template} height='40px' width='40px'></img> <span className='contheading'>Template Management</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>

<Link to='/help/EstimateEventCost' className='col-md cont_container m-2'  style={{ textDecoration: 'none' }}>
<div><img src={cal} height='40px' width='40px'></img> <span className='contheading'>Calculator</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>




<Link to='/help/Pricing' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
<div><img src={price} height='40px' width='40px'></img> <span className='contheading'>Pricing</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</Link>


</div>






<br></br><br></br><br></br><br></br>
         <div class="row  ">
             <div className='col-2'></div>
           
              <div className='col-md-3 text-center'><img className='write_image' src={contact} height='100%' width='140%'></img></div>
             <div className='col-1'></div>
             <div className='col-md-4 sidecontent'>
           <h1>Contact Us</h1>
           <p>
           If you have question which is beyond this 
             knowledgebase Kindly contact us
           </p>
           <pre></pre>
           <Link to='/request' className='writebutton'>Write to us now</Link>

                    </div>

                    
        </div>
     




        <br></br><br></br>
     </div>


);

}

export default Content;