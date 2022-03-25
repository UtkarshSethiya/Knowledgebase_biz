import './content.css'
import Contentheader from './Contentheader';
import exhibition1 from '../images/exhibiton1.png';
import exhibiton2 from '../images/exhibition2.png';
import exhibiton3 from '../images/exhibiton3.png';


function Exhibition(){

   const exhibitionhandler=()=>{
      const element = document.getElementById("exhibition");
      element.scrollIntoView();
   }
   const Customize=()=>{
    const element = document.getElementById("Customize");
    element.scrollIntoView();
 }
 const Update=()=>{
    const element = document.getElementById("Update");
    element.scrollIntoView();
 }

 const Enable=()=>{
    const element = document.getElementById("Enable");
    element.scrollIntoView();
 }






return(<div>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <br></br><br></br>
    <h2 id='headingcontent'>Exhibition Hall Management </h2>
 <h4 className='stepcontent'>Learn how to configure Exhibition Hall</h4>

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
  <div className='contentcategories' onClick={exhibitionhandler}>Exhibition Hall Management</div> 
  <div className='contentcategories' onClick={Customize} >Customize items</div>
  <div  onClick={Update} className='contentcategories'>Selecting the event to Configure</div>
  <div  onClick={Enable} className='contentcategories'>Enable and Disable Configurations</div>
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Exhibition Hall Management</h3><pre></pre>
<p className='lines' id='exhibition'>
Exhibition page: Organizers can have their own exhibition halls configured for an event.  Each exhibition hall can have multiple booths.
An event can have multiple halls based on categories and each hall can be configured and customized. 
</p>

<p className='lines' id='register'>

An event can have multiple halls based on categories and each hall can be configured and customized. 
</p>

<p className='lines' id='register'>
Features that can be configured: 
</p>
<li className='lines'>View the template associated with this hall</li>
<li className='lines'>Download template to the PC</li>
<li className='lines'>Enable and configure the instruction set</li>

<br></br>
<li className='lines' id='Customize'>Subscribers can customize the following items in the hall :
<ul className='lines'>
<li className='lines'>Update the Link Name  </li>
<li className='lines'> Change the Background Image</li>
<li className='lines'>Update Hall Position</li>
</ul></li>

<li className='lines'>Configuring the Booths inside the Hall.
<ul className='lines'>
<li className='lines'>Set the position of the booth </li>
<li className='lines'> Select the relevant booth</li>
<li className='lines'>Upload the thumbnail to be displayed on the hall.</li>
</ul></li>

<div id='Update' className='pb-5 pt-5'><img src={exhibition1} height="400px" width='80%'></img></div><br></br><br></br><br></br><br></br>
<div className='pb-5 pt-5'><img src={exhibiton2} height="400px" width='80%'></img></div><br></br><br></br><br></br><br></br>
<div id='Enable' className='pb-5 pt-5'><img src={exhibiton3} height="400px" width='80%'></img></div>

</div>
</div>



   </div>

</div>
</div>)



}

export default Exhibition;