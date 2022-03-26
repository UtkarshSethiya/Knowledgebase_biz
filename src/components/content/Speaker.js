import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';
import speaker1 from '../images/speaker1.png';


function Speaker(){

   const Custom=()=>{
      const element = document.getElementById("Customize");
      element.scrollIntoView();
   }
   const Announcement=()=>{
    const element = document.getElementById("announcement");
    element.scrollIntoView();
 }
 const Leaderboard=()=>{
    const element = document.getElementById("leaderboard");
    element.scrollIntoView();
 }

 const Reports=()=>{
    const element = document.getElementById("reports");
    element.scrollIntoView();
 }
 const Orders=()=>{
    const element = document.getElementById("orders");
    element.scrollIntoView();
 }
 const Subscription=()=>{
    const element = document.getElementById("subscription");
    element.scrollIntoView();
 }





return(<div>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <br></br><br></br>
    <h2 id='headingcontent'>Speaker Room Management </h2>
 <h4 className='stepcontent'>Learn how to  engage in discussions over the virtual space**</h4>

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
  <div className='contentcategories' onClick={Custom}>Speaker  Room Customization</div> 
  <div className='contentcategories' onClick={Announcement}>Announcement</div>
  <div className='contentcategories' onClick={Leaderboard}>Leaderboard</div>
  <div className='contentcategories' onClick={Reports}>Reports</div>
  <div className='contentcategories' onClick={Orders}>Orders</div>
  <div className='contentcategories' onClick={Subscription}>Subscription</div>
 
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >Speaker Room Management</h3><pre></pre>
<p className='lines' >

An event can have auditorium enabled with speaker rooms for communication to which speakers shall have exclusive access.



</p>

<p className='lines' id='bold'>
This module shall help you with the elements that can be configured.



</p>

<p className='lines' id='Featuress'>
Auditorium Configuration :<br></br>
1.Organizers can customize the names of the auditorium as per their needs.
 eg: auditorium_2_29 to configure<br></br>
2.Subscribers can enter the day and Title for the meeting <br></br>
3.They can choose the Link type whether it is 8*8 ,meet or zoom link
 The link/ Url for the meeting<br></br>
3.Position for meeting links say for eg:1,2 or 3 

</p>




<li className='lines' id='Customize'>Speaker  Room UI customization:
<ul className='lines'>
<li className='lines'>Select and upload a Background Image </li>
<li className='lines'> 	Select a text Color</li>
<li className='lines'>Select a Background Color for the bar </li>

</ul></li><br></br>

<h4 id='announcement'>Announcement Management</h4>
<br></br>

<p className='lines'>
This module allows users to add Announcements for a particular event as the event is live.The announcement shows up on every page or custom pages as defined by the organizer.

</p>

<p className='lines'>

Organizers can add a subject or a title to their announcement.
They can also add an Announcement Message using HTML editor.



</p><br></br>

<h4 id='leaderboard'>LEADERBOARD</h4>
<br></br>

<p className='lines'>
Virtual attendees can earn badges in the Leaderboard Challenge as they participate in conference activities and network with other attendees. The top participants are eligible for a prize drawing.</p>

<p className='lines'>
Subscribers can also configure the following features :
Set a schedule for displaying the scorers from a  particular start date to end date.
Set the rules , points and prizes applicable for the scoreboard .


</p>

<li className='lines' id='Customize'>Leaderboard module also allows  the following attributes to be customized: 

<ul className='lines'>
<li className='lines'>Title to display on leaderboard
 </li>
<li className='lines'> Color scheme for the text</li>
<li className='lines'>Change the different backgrounds,headers  </li>
<li className='lines'>Enable the desired fields to show up on the leaderboard  </li>
</ul></li>

<br></br>

<h4 id='reports'>Reports</h4>
<br></br>
<p className='lines'>
A subscriber can get the detailed report of the pages visited by any visitor to the site.Inorder for that we use either google analytics or detailed report through session captures.
There are 2 basic sections :<br></br>
Google analytics :The subscriber will have to choose the event he wants after which he will submit the tracker id to view the analytic report .
<br></br>
Basic log report :This module will display the activity log report of users entering the event front end.The subscriber can view
- Name of te user<br></br>
- Email<br></br>
- Category of the Page <br></br>
- Name of the page<br></br>
- Entry time into te page<br></br>
<br></br>
Orders :This page deals with list of subscribers who have placed an order for  add ons and carried out the transaction using payment gateway.
It will display the list of subscribers ,transaction payment details and date of transaction.

</p>
<br></br>
<div className='table-responsive-lg' id='orders'>
<table class="table table-responsive  ">
  <thead  className="tableheading">
    <tr>
      <th  className="tableheader" scope="col col-md-1">Id</th>
      <th className="tableheader" scope="col col-md-2">Subscriber</th>
      <th className="tableheader col-2 text-start" scope="col col-md-2 ">Transaction Id</th>
      <th className="tableheader" scope="col col-md-2 ">Date</th>
      <th className="tableheader" scope="col col-md-1 ">Sub Total</th>
      <th className="tableheader" scope="col col-md-1 ">Total</th>
      <th className="tableheader" scope="col col-md-1 ">Action</th>
    </tr>
  </thead>
  <tbody>
    
           <tr >
      <th className="tablecontent" scope="row">2</th>
      <td className="tablecontent ">Rashmi K</td>
      <td className="tablecontent text-start"></td>
      <td className="tablecontent">05-01-2022 11:39:01am</td>
      <td  className="tablecontent"> $340</td>
      <td  className="tablecontent"> $340</td>
      <td  className="tablecontent"> </td>
    </tr>
       
    
  </tbody>
</table></div>
<br></br>
<p className='lines'>
We can even get the detailed invoice form of it on click of details on te side button.
</p>

<div id='Update' className='pb-5 '><img src={speaker1} height="400px" width='80%'></img></div>
<p className='lines' id='subscription'>
Subscriptions: Lists out all the upgraded subscriptions of a user and the payment detai;ls along with the date and the type of subscription Plan.
Subscribers List

</p>
<br></br>
<table class="table  ">
  <thead  className="tableheading">
    <tr>
      <th  className="tableheader" scope="col col-md-1">Id</th>
      <th className="tableheader" scope="col col-md-2">Subscriber</th>
      <th className="tableheader col-2 text-start" scope="col col-md-2 ">Transaction Id</th>
     

      <th className="tableheader" scope="col col-md-1 ">Total</th>
      <th className="tableheader" scope="col col-md-2 ">Date</th>
      <th className="tableheader" scope="col col-md-1 ">Plan</th>
    </tr>
  </thead>
  <tbody>
    
           <tr >
      <th className="tablecontent" scope="row">22</th>
      <td className="tablecontent ">Rashmi K</td>
      <td className="tablecontent text-start"></td>
      <td className="tablecontent">$1000</td>
      <td  className="tablecontent"> 19-02-2022 04:55:39pm</td>
      <td  className="tablecontent"> 
Premium (Monthly)
</td>
     
    </tr>

    <tr >
      <th className="tablecontent" scope="row">22</th>
      <td className="tablecontent ">Rashmi K</td>
      <td className="tablecontent text-start"></td>
      <td className="tablecontent">$500</td>
      <td  className="tablecontent">
05-01-2022 11:37:02am

</td>
      <td  className="tablecontent"> 
Premium (Monthly)
</td>
     
    </tr>

 
       
    
  </tbody>
</table>




</div>
</div>



   </div>

</div>
</div>)



}

export default Speaker;