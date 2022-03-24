import './content.css'
import Contentheader from './Contentheader';
import dashboard from '../images/dashboard.png'

function Dashboard(){

   const keyinfohandler=()=>{
      const element = document.getElementById("keyinfocontent");
      element.scrollIntoView();
   }

const chartshandler=()=>{
   const element = document.getElementById("chartscontent");
   element.scrollIntoView();
}



return(<div>
<Contentheader/>
<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <pre></pre><pre></pre>
    <h2 id='headingcontent'>Getting Started with Dashboard </h2>
 <h4 className='stepcontent'>Learn how to manage and operate Dashboard</h4>

</div>


<pre></pre><br></br>
  </div>

</div>

<pre></pre><pre></pre><pre></pre>
<div className='  container-sm'>
   <div className='row'>
<div className='col-md-3 '>
   <div className=' categoriescont p-4 '>
  <div className='categories'>Categories</div> <br></br>
  <div className='contentcategories'>Dashboard</div> 
  <div className='contentcategories' onClick={keyinfohandler} >Key information</div>
  <div  onClick={chartshandler} className='contentcategories'>Charts</div>
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3>Dashboard</h3><pre></pre>
<p className='lines'>
Dashboard is often described as the control panel of a subscription module. Subscribers login to the dashboard and can view information and summary related to the progress and performance of their events. The dashboard is an updated information briefing on the status of your events 

</p>
<p  className='lines' id='keyinfocontent'>
The following key information of their events can be monitored from the dashboard:

</p>
<li className='lines'>Type of subscription and Expiry date</li>
<li className='lines'>Total number of Attendees Remaining</li>
<li className='lines'>Count of the Upcoming Events</li>
<li className='lines'>Number of Running Events</li>
<li className='lines'>Total Number of Finished Events</li>
<li className='lines'> Count of his Entire Events</li><pre></pre><pre></pre>
<div><img src={dashboard} height="400px" width='100%'></img></div>
<pre></pre><pre></pre>
<p className='lines' id='chartscontent' >
    
The chart given on the dashboard gives us a more coherent picture of the count of monthly events ,where.



</p>
<li className='lines'>X axis defines all the months </li>
<li className='lines'>Y Axis gives number of events</li>
</div>
</div>



   </div>

</div>
</div>)



}

export default Dashboard;