
import './calculator.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import calimage from './images/calimage.png';
import logo from './images/logo.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Calheader from './calculatorheader';
import Header from './header';
  
  

function Calculator(){

 
const[no,setno]=useState(1);







function eventnumber(event){
    setno(event.target.value);
    document.getElementById("eventno").addEventListener("change",function(evt){
        if(document.getElementById("eventno").value>30){
            document.getElementById("eventno").value=30;
            
           event.preventDefault();
         }
         if(document.getElementById("eventno").value<1){
            document.getElementById("eventno").value=1;
            
           event.preventDefault();
         }
         setno(document.getElementById("eventno").value);
        })
      
    
    
}





/*radio button functions*/

function twohundred(){
    document.getElementById('plan').innerHTML='';
    document.getElementById('plan').innerHTML="Selected Plan : Small plan";
    document.getElementById('medium').style.display='none';
    document.getElementById('small').style.display='block';
    document.getElementById('custom').style.display='none';
}

function fivehundred(){
    document.getElementById('plan').innerHTML='';
    document.getElementById('plan').innerHTML="Selected Plan : Medium plan";
    document.getElementById('medium').style.display='block';
    document.getElementById('small').style.display='none';
    document.getElementById('custom').style.display='none';
}
function thousand(){
    document.getElementById('plan').innerHTML='';
    document.getElementById('plan').innerHTML="Selected Plan : Custom plan";
    document.getElementById('medium').style.display='none';
    document.getElementById('small').style.display='none';
    document.getElementById('custom').style.display='block';
   
}

/*Cost of all features*/


/*let total=( parseInt((attend-200)/25)*20) + parseInt((exhibitor-3)*100)+ parseInt((customhall)*100) + parseInt((custombooth)*100)+  parseInt(whitelabel )+ parseInt((customlanding)*200)+ parseInt(three)+ parseInt((customlobby)*200)+parseInt((auditorium)*200)+ parseInt((games-1)*50)+ parseInt(booth*100)+  parseInt((hour)*75);*/



return(

   
        <div className="row "> 
       
       
<Calheader/>
            
            
            <div className='calheading'> <pre></pre> <pre></pre><pre></pre> <pre></pre><pre></pre>
            <h1 id='font'>CALCULATOR</h1>
            <pre></pre> <pre></pre><pre></pre> <pre></pre>
            </div>
           
            <pre></pre> <pre></pre> <pre></pre>
            <div className='row'>
            <div className="col-md-1 "></div>
            
              
            
            
            
            
            
            
            <div className="col-md-10  ">
    


  
            <div className="row step ">
           
          

                    <div className='col-md-7  '  > 
                    <div className='row'>
                    <h3>Step1 : Customize Your Pricing <pre></pre></h3>
           <pre></pre> <pre></pre> <pre></pre>
           
           <h5 >Number of Events  <Tippy className='tippy' content="Select number of Events required"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy></h5>
                   
                    <label for="customRange1" className="form-label">Select the number of Events</label>
                    

      
               
                    <pre></pre>
                    <div className='row'>
                    <span className='col-1'>1</span>
                    <div className='col-7'><input type="range" value={no} min="1" max="30" step="1" onChange={eventnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>30</span>
                    <div className='col-md-2' id='rangeValue'>
                        <input id='eventno' className='value' type='number' value={no} min="1" max="30" step="1" onChange={eventnumber} ></input>
                     </div>
                        </div>

                     </div>
                    
                     
                 
                     <pre></pre>   <pre></pre>      <pre></pre>   
                    
       


           
         
            <h5>Date <Tippy className='tippy' content="Select your first event date"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </h5>
            <div className='col-12 '>
<div className='row'> 
<div className='col-md-8'>
          <p className='form-label '>Define Your First Event Date</p>
          </div>
           <div className='col-md-4'>
            
                <input type='date' className='value '></input></div>
                </div> </div>
            <pre></pre>   <pre></pre>   
            

        
           <div className='col-12 '>
                <h3>Step 2 : Choose Your Plan </h3>
                <pre></pre> <pre></pre> <pre></pre>
                <h5>Select no of Attendees to get your plan <Tippy className='tippy' content="Give us the number of Attendes in the event"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy></h5>
                <div className='row' ><pre></pre>
                 <div className="form-check col-3">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={twohundred} ></input>
  <label className="form-check-label attendenumber" for="flexRadioDefault1">
    200 to 500 
  </label>
</div>
<div class="form-check col-3">
  <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={fivehundred} ></input>
  <label className="form-check-label attendenumber" for="flexRadioDefault2">
    500 to 1000 
  </label>
</div>
<div class="form-check col-3">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={thousand} ></input>
  <label className="form-check-label attendenumber" for="flexRadioDefault2">
  1000+ 
  </label>
</div>
                 </div>
                 <pre></pre><pre></pre>
               <div id='plancont'><h6   id='plan'></h6><Link id='custom' to='/calculator_custom' className=' btn btn-outline-primary btn2 '>Continue</Link> <Link id='small' to='/calculator_small' className='  btn btn-outline-primary btn2'>Continue</Link><Link id='medium' to='/calculator_medium' className='  btn btn-outline-primary btn2'>Continue</Link></div>
            
                </div>
                
              
                </div>
                <div className='col-md-5  imgcont'><img className='calimage' src={calimage}></img></div>
       
               
              
                </div>
            
                </div>
            
            
              
       
            
            </div>
           
        </div>
    );

}
export default Calculator;