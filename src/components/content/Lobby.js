import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';


function Lobby(){

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
    <h2 id='headingcontent'>Lobby Management </h2>
 <h4 className='stepcontent'>Learn how to  configure Lobby Management</h4>

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
  <div className='contentcategories' onClick={Features}>Lobby Management</div> 
 
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Lobby Management</h3><pre></pre>
<p className='lines' >

Virtual Lobby :Lobby is the gateway of access to the different zones of the  virtual event. Once the attendees enter into the lobby they can view and proceed to the various zones of the event .These zones are exhibition halls, auditoriums, photo booths etc.               


</p>






<li className='lines' id='Customize'>Lobby Management helps  configure and customize the various elements that show up in the lobby template:
e
<ul className='lines'>
<li className='lines'>Users can view the lobby template </li>
<li className='lines'> Download the lobby template to their PC. </li>
<li className='lines'>Configure Chat. </li>
<li className='lines'>Set the zones to be displayed on the lobby page. </li>
<li className='lines'>Customize the lobby elements </li>


</ul></li>





</div>
</div>



   </div>

</div>
</div>)



}

export default Lobby;