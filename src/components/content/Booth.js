import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';


function Booth(){

   const Features=()=>{
      const element = document.getElementById("Featuress");
      element.scrollIntoView();
   }







return(<div>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <br></br><br></br>
    <h2 id='headingcontent'>Booth Management </h2>
 <h4 className='stepcontent'>Learn how to showcase your Booth</h4>

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
  <div className='contentcategories' onClick={Features}>Booth Managementt</div> 
 
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Booth Management</h3><pre></pre>
<p className='lines' id='Featuress' >

The purpose of  Booth in a virtual Event is to provide space to exhibitors to display their products by allowing upload of videos , images ,pdfs or downloadable units in an online space.

<pre></pre>
This module helps subscriber showcase his booth with ease.

</p>






<li className='lines' id='Customize'>We can configure the following features of booth:

<ul className='lines'><br></br>
<li className='lines'>Banners:<br></br>
Type of banner<br></br>
Banner position<br></br>
Thumbnail for the banner <br></br>
Banner content
 </li><br></br>
<li className='lines'> Pdf Rack<br></br>
Upload multiple pdfs with proper title
 </li><br></br>
<li className='lines'>Video Gallery<br></br>
Upload Videos or embed youtube  links .
 </li><br></br>
<li className='lines'>
Social Media<br></br>
Users can add social media icons and the associated link for it.

     </li><br></br>
<li className='lines'>Customize the booth elements:

<ul className='lines'>
<li className='lines'>Enter the Link Name to show on booth front end</li>
<li className='lines'>Keeping the dimensions of template intact users can upload updated booth Image
</li>
<li className='lines'>MAX 4MB Booth Thumbnail in Hall</li>
<li className='lines'>Option to remove the thumbnail</li>
<li className='lines'>Users can add or remove the Main TV for Booth</li>
<li className='lines'>Logos can be added or removed </li>
<li className='lines'>Url can updated for the logo</li>
<li className='lines'>Users can add Javascript and showcase chat option</li>
<li className='lines'>They can also add Video Chat like zoom,meet etc with appropriate urls</li>
<li className='lines'>Calenders can be displayed on the booth</li>
<li className='lines'>Attendees can exchange Business Cards between them</li>

</ul>
 </li>


</ul></li>





</div>
</div>



   </div>

</div>
</div>)



}

export default Booth;