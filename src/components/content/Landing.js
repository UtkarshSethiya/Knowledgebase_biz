import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';


function Landing(){

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
    <h2 id='headingcontent'>Landing Page Management </h2>
 <h4 className='stepcontent'>Learn how to customize and view your Events</h4>

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
  <div className='contentcategories' onClick={Features}>Landing Page Features</div> 
  <div className='contentcategories' onClick={Preview} >Template Preview</div>
  <div  onClick={Editlink} className='contentcategories'>Edit Link</div>
  <div  onClick={Disclaimer} className='contentcategories'>Add Disclaimer to your Landing Page</div>
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Landing Page Management</h3><pre></pre>
<p className='lines' >

This is the landing page in the front end section of the subscription module through which any attendee will enter the event.It is here that the attendees can login and view the entire virtual event .

</p>

<p className='lines' id='register'>

An attendee will be first taken to the landing page of any event.In this page,the organizer will be able to customize the elements to be displayed on the landing page.

</p>

<p className='lines' id='Featuress'>
Features that can be configured are: 
</p>
<li className='lines'>View and download the template associated with this page </li>


<br></br>
<li className='lines' id='Customize'>Configure the following :
<ul className='lines'>
<li className='lines'>Disclaimer section </li>
<li className='lines'> 	External links</li>
<li className='lines'>Social media </li>
<li className='lines'> Instruction set
 </li>
</ul></li>

<li className='lines'>Edit the layout and settings of the page </li><br>
</br>

<p className='lines'>Landing section can be configured in the following steps :</p>

<div id='landing1' className='pb-5 pt-5'><img src={landing1 } height="400px" width='80%'></img></div><br></br><br></br><br></br><br></br>
<div id='landing2' className=' pt-5'><img src={landing2} height="400px" width='80%'></img></div><br></br>
<div id='landing3' className='pb-5 '><img src={landing3} height="400px" width='80%'></img></div><br></br><br></br><br></br><br></br>
<div id='landing4' className=' pt-5'><img src={landing4} height="400px" width='80%'></img></div><br></br>
<div id='landing5' ><img src={landing5} height="300px" width='80%'></img></div>

</div>
</div>



   </div>

</div>
</div>)



}

export default Landing;