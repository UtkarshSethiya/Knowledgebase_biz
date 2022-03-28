import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';


function Pricingcontent(){

   const Features=()=>{
      const element = document.getElementById("users");
      element.scrollIntoView();
   }







return(<div  className='mb-5 pb-5'>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <br></br><br></br>
    <h2 id='headingcontent'>Pricing </h2>


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
  <div className='contentcategories' onClick={Features}>Pricing</div> 
 
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Pricing</h3><pre></pre>
<p className='lines mb-5 pb-5'  id='users'>
Pricing page of subscription module is for  subscribers to make easy decisions on product purchases.Best pricing page aims to provide a clear picture for customers to see the
pricing for their desired products

.


</p>




</div>
</div>



   </div>

</div>
</div>)



}

export default Pricingcontent;