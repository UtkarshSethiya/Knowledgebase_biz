import './content.css'
import Contentheader from './Contentheader';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import landing4 from '../images/landing4.png';
import landing5 from '../images/landing5.png';


function User(){

   const Features=()=>{
      const element = document.getElementById("users");
      element.scrollIntoView();
   }







return(<div>
<Contentheader/>

<div className='row main '>
<div className='col-3'></div>
  <div className='col-md-6'>
  <div className='searchbox'>
    <br></br><br></br>
    <h2 id='headingcontent'>User Management </h2>
 <h4 className='stepcontent'>Learn how to manage Operators and Roles</h4>

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
  <div className='contentcategories' onClick={Features}>User Management</div> 
 
  </div>
</div>
<div className='col-md-9 descripton'>
   <div className='p-4'>
<h3 >User Management</h3><pre></pre>
<p className='lines'  id='users'>
User management section allows you to manage operators and roles defined by the subscriber for the event . Subscribers can add new operators or edit existing operators details.


</p>

<li className='lines' id='Customize'>The two major roles he can add are:
<ul className='lines'>
<li className='lines'>Booth Operator</li>
<li className='lines'> Event Operator </li>
</ul></li>




<li className='lines' id='Customize'>Steps to add a user ;
<ul className='lines'>
<li className='lines'>Click on  ‘Add New User’.</li>
<li className='lines'>Choose a Role of the operator </li>
<li className='lines'>Enter the Name  </li>
<li className='lines'>Enter Mobile  No</li>
<li className='lines'>Enter the Email Id</li>
<li className='lines'>Input a Password </li>
</ul></li>

<p className='lines' >

The user management panel then lists out all operators created by the subscriber.
‘Edit’  a user UI is same as add a user however with the difference of making changes or  updating existing user records .
Subscriber can even delete an operator with the delete button under the ‘action’ section of te panel.





</p>


</div>
</div>



   </div>

</div>
</div>)



}

export default User;