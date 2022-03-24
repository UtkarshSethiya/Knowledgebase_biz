import './content.css'
import Contentheader from './Contentheader';
import event1 from '../images/event1.png';
import event2 from '../images/event2.png';
import event3 from '../images/event3.png';
import event4 from '../images/event4.png';
import event5 from '../images/event5.png';

function Event(){

   const registhandler=()=>{
      const element = document.getElementById("register");
      element.scrollIntoView();
   }
   const viewevents=()=>{
    const element = document.getElementById("view");
    element.scrollIntoView();
 }
 const createevents=()=>{
    const element = document.getElementById("create");
    element.scrollIntoView();
 }

 const editevents=()=>{
    const element = document.getElementById("edit");
    element.scrollIntoView();
 }






return(<div>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <pre></pre><pre></pre>
    <h2 id='headingcontent'>Events Module </h2>
 <h4 className='stepcontent'>Learn how to Register,Edit,Delete your Event</h4>

</div>


<pre></pre><br></br>
  </div>

</div>
<pre></pre><pre></pre><pre></pre>
<div className='  container-sm'>
   <div className='row'>
<div className='col-md-3 '>
   <div className=' categoriescont p-4 ' id='index'>
  <div className='categories'>Categories</div> <br></br>
  <div className='contentcategories' onClick={registhandler}>Events Registration</div> 
  <div className='contentcategories' onClick={viewevents} >View Events</div>
  <div  onClick={createevents} className='contentcategories'>Create Events</div>
  <div  onClick={editevents} className='contentcategories'>Edit and Delete Events</div>
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Events Module</h3><pre></pre>
<p className='lines' id='register'>
A subscriber takes a subscription for a period of time in which he can host multiple events.
Event registration is thus the main subscription module where subscribers can add ,edit or update events.The procedures to be followed are :

Click on the Events {'>'} Select Event Registration


</p>
<div><img src={event1} height="200px" width='50%'></img></div><pre></pre>
<p  className='lines' id='view' >
This displays all the events created by the subscriber .
</p>
<pre></pre>
<div><img src={event2} height="200px" width='80%'></img></div>
<pre></pre>

<pre></pre>
<p className='lines' id='create' >
Subscribers can also create new events.To add the details of a new event Click on New Button :
</p>

<div><img src={event3} height="400px" width='80%'></img></div>
<pre></pre>

<p className='lines'  id='edit' >
Once event is created , there are options to view,edit and delete the events. The subscriber can also view individual events or all the events created by the person.
Click on view button to display the details of individual events
</p>

<div><img src={event4} height="400px" width='80%'></img></div>
<pre></pre>
<p className='lines' >
The edit button can be used to change and update event details  .

Events can also be deleted as follows :
</p>

<div><img src={event5} height="300px" width='80%'></img></div>


</div>
</div>



   </div>

</div>
</div>)



}

export default Event;