import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';


function Template(){

   const Features=()=>{
      const element = document.getElementById("temp");
      element.scrollIntoView();
   }
   const Configure=()=>{
    const element = document.getElementById("configure");
    element.scrollIntoView();
 }







return(<div>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <br></br><br></br>
    <h2 id='headingcontent'>Template Management </h2>
 <h4 className='stepcontent'>Learn how to get Templates for your Event</h4>

</div>


<br></br><br></br>
  </div>

</div>
<br></br><br></br><br></br>
<div className='  container-sm'>
   <div className='row'>
<div className='col-md-3 '>
   <div className=' categoriescont p-4 ' id='index'>
  <div className='categories'>Categories</div> <br></br>
  <div className='contentcategories' onClick={Features}>Template Management</div> 
  <div className='contentcategories' onClick={Features}>Steps to configure</div> 
 
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Template Management</h3><pre></pre>
<p className='lines'  id='temp'>
Any subscriber can select variety of templates for the different modules of an event. Starting from the landing page till the very last page of the event the subscriber is provided with different templates to choose from.
</p>

<li className='temp' id='Customize'>Steps to configure the templates:                

<ul className='temp'>
<li className='temp pb-1' id='configure'>1. Select ‘Landing Page’  template from the list .</li>
<li className='temp pb-1'>2. Select ‘Lobby’  template from the list.  </li>
<li className='temp pb-1'>3. Select an ‘Auditorium’ template:
<ul className='temp pb-1'>
    <li>a. View preview.</li>
    <li>b. Enter total number of templates in the box.</li>
    <li>c. Click on ‘add more auditoriums’ to add auditorium of different templates.</li>
</ul>




 </li>


 <li className='temp pb-1'>4. Select an Exhibition Hall template.   
<ul className='temp pb-1'>
    <li>a. View preview.</li>
    <li>b. Enter total number of templates in the box.</li>
    <li>c. Click on ‘add more exhibitions’ to add halls of different templates.</li>
</ul>
 </li>


 <li className='temp pb-1'>5. Select Booth   
<ul className='temp pb-1'>
    <li>a. View preview.</li>
    <li>b. Enter total number of templates in the box.</li>
    <li>c. Click on ‘add more booths’ to add halls of different templates.</li>
</ul>
 </li>

 <li className='temp pb-1'>6. Select Networking Lounge  
<ul className='temp pb-1'>
    <li>a. View preview.</li>
    <li>b. Enter total number of templates in the box.</li>
    <li>c. Click on ‘add more networking’ to add halls of different templates.</li>
</ul>
 </li>


<li className='temp'>7. After selection of all the templates  click ‘confirm’ button
</li>
</ul></li>







</div>
</div>



   </div>

</div>
</div>)



}

export default Template;