import './maincontent.css'
import { Link } from "react-router-dom";
import book from './images/book.png';
import image3 from './images/image 3.png';
import image4 from './images/image 4.png';
import image5 from './images/image 5.png';
import image6 from './images/image 6.png';
import image7 from './images/image 7.png';
import image8 from './images/image 8.png';
import contact from './images/contact.png';
import dashboardicon from './images/dashboardicon.png';
import eventicon from './images/eventicon.png';
import Exhibitionicon from './images/Exhibitionicon.png';


function Content(){

return(


<div className=' contmax' >
    <div className='row expolretopicsrow'>
       
      
        <div className='col-md-3 book '> <img  src={book}></img></div>
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
<div><img src={dashboardicon} height='40px' width='40px'></img> <span className='contheading'>Dashboard</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>
</Link>

<Link to='/help/EventRegistration' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
  <div>
<div><img src={eventicon} height='40px' width='40px'></img> <span className='contheading'>Event Registration</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>
</Link>




<Link to='/help/ExhibitionhallManagement' className='col-md cont_container m-2' style={{ textDecoration: 'none' }}>
  <div>
<div><img src={Exhibitionicon} height='40px' width='40px'></img> <span className='contheading'>Exhibition Hall Management</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.


</p>
</div>
</Link>

<div className='content_space'><pre></pre></div>


<div className='col-md cont_container m-2'>
<div><img src={image6} height='40px' width='40px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>

<div className='col-md cont_container m-2'>
<div><img src={image7} height='40px' width='40px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>




<div className='col-md cont_container m-2'>
<div><img src={image8} height='40px' width='40px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>


<div className='content_space'><pre></pre></div>


<div className='col-md cont_container m-2'>
<div><img src={image6} height='40px' width='40px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>

<div className='col-md cont_container m-2'>
<div><img src={image7} height='40px' width='40px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>




<div className='col-md cont_container m-2'>
<div><img src={image8} height='40px' width='40px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>


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