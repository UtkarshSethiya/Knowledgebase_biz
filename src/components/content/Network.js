import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';


function Network(){

   const Features=()=>{
      const element = document.getElementById("Featuress");
      element.scrollIntoView();
   }
   const Preview=()=>{
    const element = document.getElementById("landing1");
    element.scrollIntoView();
 }
 const Editlink=()=>{
    const element = document.getElementById("landing2");
    element.scrollIntoView();
 }

 const Disclaimer=()=>{
    const element = document.getElementById("landing4");
    element.scrollIntoView();
 }






return(<div>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <br></br><br></br>
    <h2 id='headingcontent'>Network Management </h2>
 <h4 className='stepcontent'>Learn how to  engage in discussions over the virtual space</h4>

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
  <div className='contentcategories' onClick={Features}>Network Management</div> 
 
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Network Management</h3><pre></pre>
<p className='lines' >

Using a networking arena helps attendees or organizers to engage in discussions over the virtual space. It is crucial for attendees as well as the organizers to build connections and network with fellow attendees.


</p>

<p className='lines' id='bold'>

An event organizer can set a network page from the networking module in the subscription back-end.


</p>

<p className='lines' id='Featuress'>
Features that can be configured are: 
</p>




<li className='lines' id='Customize'>Conference
<ul className='lines'>
<li className='lines'>The position or location for interaction </li>
<li className='lines'> 	The link associated to the conference</li>
<li className='lines'>Type of link whether to be held over zoom,meet or 8*8 video chat. </li>

</ul></li>


<li className='lines' id='Customize'>Permission
<ul className='lines'>
<li className='lines'>Set permissions to access area based on the different attendee profiles:
Attendee ,Speaker,Organizer,Sponsor,Exhibitor,Other
 </li>


</ul></li>


<li className='lines' id='Customize'>Updating networking lounge elements:
<ul className='lines'>
<li className='lines'>The Lounge Link Name to be used to enter the networking center </li>
<li className='lines'>The background Image for the networking lounge</li>
<li className='lines'>The main conference background Image</li>
<li className='lines'>Background Image for Video Room</li>
<li className='lines'> 	Logos (can also be removed)</li>
<li className='lines'>Update the Schedules text content </li>
<li className='lines'>Upload an Agenda file either as link or pdf </li>
<li className='lines'>Attendees can Exchange Business Cards</li>
<li className='lines'>Network Area Title</li>
<li className='lines'>Network Area Details</li>
<li className='lines'> Chat Section using javascript code</li>


</ul></li>




</div>
</div>



   </div>

</div>
</div>)



}

export default Network;