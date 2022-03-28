import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';


function Calc(){

   const Features=()=>{
      const element = document.getElementById("users");
      element.scrollIntoView();
   }
   const Feat=()=>{
    const element = document.getElementById("feat");
    element.scrollIntoView();
 }







return(<div>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <br></br><br></br>
    <h2 id='headingcontent'>Estimate Event Cost (Calculator) </h2>
 <h4 className='stepcontent'>Learn how to Estimate your Event Cost </h4>

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
  <div className='contentcategories' onClick={Features}>Calculator</div> 
  <div className='contentcategories' onClick={Feat}>Features</div> 
 
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Calculator</h3><pre></pre>
<p className='lines'  id='users'>
Subscription module provides an easy to use calculation chart for events .It calculates the cost based on features needed for an event for a certain subscription plan.Subscription module provides a pricing plan chart .All the calculations are based on the plans given in it.
<br></br><p style={{ fontWeight: '600' }}>[ Note:Refer the pricing plan page for further pricing details .]</p>



</p>

<li className='lines' id='Customize'>To estimate event cost subscriber should first 

<ul className='lines'>
<li className='lines'>Select  the  month
          </li>
<li className='lines'> Select  a subscription : Whether Free/Express/Premium    </li>
</ul></li>

<p className='lines'>
There will be prices already defined based on event subscription plan.If the user wants more features he opts for add-ons and purchased more products.To have an estimate of the total amount costing him,he can input the following features :

</p>


<p id='feat' className='lines' style={{ fontWeight: '600' }}>
Number of events to be hosted.<br></br>
Total Attendees ;499<br></br>
Total Booth :10<br></br>
Total Exhibition Hall:3<br></br>
Total Networking Area :2<br></br>
Custom Full Suit Templates 0<br></br>
Custom Landing Template 0<br></br>
Custom Lobby Template 0<br></br>
Custom Auditorium Template 0<br></br>
Custom Exhibiton Hall Template 0<br></br>
Custom Booth Template 0<br></br>
Custom Networking Template 0<br></br>
Branded Walktrough 0<br></br>
Chat 0<br></br>
Video Chat 0<br></br>
Private Live Player For 4 Hour 0<br></br>
Private Live Player For 8 Hour 0<br></br>
Production Support Per Hour 0<br></br>
Traffic Car Racer Game with Leaderboard 0<br></br>
One Time White-label URL For Full Year 0<br></br>
One Event White-label URL<br></br>

</p>

</div>
</div>



   </div>

</div>
</div>)



}

export default Calc;