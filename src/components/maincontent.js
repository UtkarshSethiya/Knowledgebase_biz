import './maincontent.css'
import { Link } from "react-router-dom";
import book from './images/book.png';
import image3 from './images/image 3.png';
import image4 from './images/image 4.png';
import image5 from './images/image 5.png';
import image6 from './images/image 6.png';
import image7 from './images/image 7.png';
import image8 from './images/image 8.png';
import contact from './images/contact.png'


function Content(){

return(
<div>

<div className='container  ' >
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

<div className='col-md cont_container'>
<div><img src={image3} height='50px' width='50px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>
<div className='col-1'></div>
<div className='col-md cont_container'>
<div><img src={image4} height='50px' width='50px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>


<div className='col-1'></div>

<div className='col-md cont_container'>
<div><img src={image5} height='50px' width='50px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>
</div>
<pre></pre><pre></pre>
<div className='row  '>

<div className='col-md cont_container'>
<div><img src={image6} height='50px' width='50px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>
<div className='col-1'></div>
<div className='col-md cont_container'>
<div><img src={image7} height='50px' width='50px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>


<div className='col-1'></div>

<div className='col-md cont_container'>
<div><img src={image8} height='50px' width='50px'></img> <span className='contheading'>You Heading Here</span> </div>
<pre></pre>
<p className='contdetails'>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.

</p>
</div>
</div>







<br></br><br></br><br></br><br></br>
         <div class="row  ">
             <div className='col-2'></div>
           
              <div className='col-3'><img src={contact}></img></div>
             <div className='col-1'></div>
             <div className='col-4 sidecontent'>
           <h1>Contact Us</h1>
           <p>
           If you have question which is beyond this 
             knowledgebase Kindly contact us
           </p>
           <pre></pre>
           <Link to='/request' className='writebutton'>Write to us now</Link>

                    </div>

                    
        </div>
     





     </div>

</div>
);

}

export default Content;