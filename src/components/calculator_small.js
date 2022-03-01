
import './calculator.css';
import money from './images/Money Bag.png'
import Header from './header';
import React, { useState} from 'react';
import { Link } from "react-router-dom";
import quest from './images/quest.png';
import logo from './images/logo.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { jsPDF } from "jspdf";
import Calculator from './calculator';
import Calheader from './calculatorheader';
import Table from './calculator_table';
import { Tab } from 'bootstrap';
/*<input class="form-check-input" type="checkbox" value="" id="three" onChange={setthreenumber}></input>*/
function Small(){
    const[no,setno]=useState(1);
    const[attend,setattend]=useState(200);
    const[exhibitor,setexhibitor]=useState(3);
    const[customhall,setcustomhall]=useState(2);
    const[custombooth,setcustombooth]=useState(0);
    const[whitelabel,setwhitelabel]=useState(0);
    const[customlanding,setcustomlanding]=useState(0);
    const[customlobby,setcustomlobby]=useState(0);
    const[three,setthree]=useState(0);
    const[auditorium,setauditorium]=useState(0);
    const[games,setgames]=useState(1);
    const[booth,setbooth]=useState(0);
    const[hour,sethour]=useState(0);
    



    function India(){
      let india = document.getElementById('selectform');
     if(india.value=='IN'){
     document.getElementById('gstnumber').style.display='block'
     }
     else{
      document.getElementById('gstnumber').style.display='none'
     }
     
    }

function previousfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
  let step3= document.getElementById('step3');  
  let step4= document.getElementById('step4');  
  let step8= document.getElementById('step8');  
  let stepquotation= document.getElementById('stepquotation');  

   if(step4.style.display!='none'){
    step3.style.display='block';
    step4.style.display='none';
    step8.style.display='none';
    document.getElementById('previous').style.visibility='hidden';
  }
  else if(step8.style.display!='none'){
    step3.style.display='none';
    step4.style.display='block';
    step8.style.display='none';
    stepquotation.style.display='none';
  }
  else if(stepquotation.style.display!='none'){
    step3.style.display='none';
    step4.style.display='none';
    step8.style.display='block';
    stepquotation.style.display='none';
    document.getElementById('next').style.display='block'
  }
}


    function nextfunction(){
  
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

    let step3= document.getElementById('step3');  
    let step4= document.getElementById('step4');  
    let step8= document.getElementById('step8');  
    let stepquotation= document.getElementById('stepquotation');  
    if(step3.style.display!='none'){
      step3.style.display='none';
      step4.style.display='block';
      document.getElementById('previous').style.visibility='visible';

    }
    else if(step4.style.display!='none'){
      step3.style.display='none';
      step4.style.display='none';
      step8.style.display='block';
   
      
    }
    else if(step8.style.display!='none'){
      step3.style.display='none';
      step4.style.display='none';
      step8.style.display='none';
      stepquotation.style.display='block';
      document.getElementById('next').style.display='none'
    }
    
  
    }
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = dd + '/' + mm + '/' + yyyy;
     
    

    function eventnumber(event){
        setno(event.target.value)
        
    }
    
    
    
    function attendenumber(event){
        setattend(event.target.value);
     document.getElementById("attend").addEventListener("change",function(evt){
       
        if(document.getElementById("attend").value<200){
            document.getElementById("attend").value=200;
            
           event.preventDefault();
         }
         if(document.getElementById("attend").value>500){
            document.getElementById("attend").value=500;
            
           event.preventDefault();
         }
         if((document.getElementById("attend").value%25)!=0){
            document.getElementById("attend").value=document.getElementById("attend").value-(document.getElementById("attend").value%25)+25;
         }
         setattend(document.getElementById("attend").value);
     })
     
    }
    
    
    function exhibitornumber(event){
        setexhibitor(event.target.value);
        document.getElementById("exhibitor").addEventListener("change",function(evt){
            if(document.getElementById("exhibitor").value<3){
                document.getElementById("exhibitor").value=3;
                
               event.preventDefault();
             }
             if(document.getElementById("exhibitor").value>100){
                document.getElementById("exhibitor").value=100;
                
               event.preventDefault();
             }
             if((document.getElementById("exhibitor").value%3)!=0){
                document.getElementById("exhibitor").value=document.getElementById("exhibitor").value-(document.getElementById("exhibitor").value%3)+1;
             }
    
             setexhibitor(document.getElementById("exhibitor").value);
    
        })
    }
    function customhallnumber(event){
        setcustomhall(event.target.value);
        document.getElementById("customhall").addEventListener("change",function(evt){
            if(document.getElementById("customhall").value<=2){
                document.getElementById("customhall").value=2;
                customhallcost=0;
               event.preventDefault();
             }
             if(document.getElementById("customhall").value>50){
                document.getElementById("customhall").value=50;
                
               event.preventDefault();
             }
             
              
             setcustomhall(document.getElementById("customhall").value);
    
        })
        
    }
    function customboothnumber(event){
        setcustombooth(event.target.value);
    }
    
    function whitelabelnumber(){
        if(document.getElementById("flexCheckChecked").checked==false){
            setwhitelabel(0)
          };
          if(document.getElementById("flexCheckChecked").checked==true){
           setwhitelabel(1);
          }
    }
    function customlandingnumber(event){
        setcustomlanding(event.target.value);
    }
    function customlobbynumber(event){
        setcustomlobby(event.target.value);
    }
    
    function setthreenumber(event){
       setthree(event.target.value)
    }
    function gamesnumber(event){
        setgames(event.target.value);
        document.getElementById("game").addEventListener("change",function(evt){
            if(document.getElementById("game").value<=1){
                document.getElementById("game").value=1;
                customhallcost=0;
               event.preventDefault();
             }
             if(document.getElementById("game").value>50){
                document.getElementById("game").value=50;
                
               event.preventDefault();
             }
             
              
             setgames(document.getElementById("game").value);
            })
    }
    function boothnumber(event){
        setbooth(event.target.value);
    }
    function auditoriumnumber(event){
        setauditorium(event.target.value)
    }
    
    function hournumber(event){
        sethour(event.target.value)
    }
    
    /*radio button functions*/
    
   /*Quotation function*/
    
   function disappear(){
    document.getElementById('qotation').style.display='none'
    
}
function disapppearbutton(){
    document.getElementById('buttn').style.display='inline-block'
    document.getElementById('buttn').style.textAlign='center'
    document.getElementById('spiner').style.display='none'
}
const pdfDownload = e => {
    
    e.preventDefault()
    document.getElementById('buttn').style.display='none'
    document.getElementById('spiner').style.display='inline-block'
   
    document.getElementById('qotation').style.display='block'
    document.getElementById('qotation').style.marginLeft='50px'
    let doc = new jsPDF("landscape", 'pt', 'A4',true);
    /*doc.addImage(logo, 'PNG', 0, 0, 0, 0, undefined,'FAST');*/
    doc.html(document.getElementById('qotation'), {
      callback: () => {
      
        doc.save('Bizonnect_Quotation_Small.pdf');
      }
    });
    document.getElementById('qotform').style.display='none';
    setTimeout(disappear,1);
    setTimeout(disapppearbutton,3000)
  
   
}
function getqotform(){
    document.getElementById('qotform').style.display='block';
    document.getElementById('buttn').style.display='none';
}


const[disable,setdisable]=useState(true);
const[fullname,setfullname]=useState();
const[gst,setgst]=useState();
const[mail,setemail]=useState();


function gstnumber(event){
  setgst(event.target.value)
}
function getemail(event){
  setemail(event.target.value)
}


function getname(event){
  setfullname(event.target.value)
}

function checkname(event){
  let myinput=  document.getElementById('inputcity');
  let mymobile=  document.getElementById('inputmobile');
  let mymail=  document.getElementById('inputemail');

  if(myinput && myinput.value){
      setdisable(false)
    document.getElementById('buttn2').style.opacity='1';
  }

 
  
  if(mymail && mymail.value){
    setdisable(false)
    document.getElementById('buttn2').style.opacity='1';
  }
  if (mymobile && mymobile.value){
    setdisable(false)
  document.getElementById('buttn2').style.opacity='1';
}

  else {
    setdisable(true);
    document.getElementById('buttn2').style.opacity='0.2'
  }
}

/*IN WORDS NUMBER*/

    
    /*Cost of all features*/
    
    let attendcost=((attend-200)/25)*20;
    let exhibitorcost=(exhibitor-3)*100;
    let customhallcost=(customhall-2)*100;
    let customboothcost=(custombooth)*100;
    let whitelabelcost=whitelabel*250;
    let customlandingcost=(customlanding)*200;
    let threecost=three*300;
    let customlobbycost=(customlobby)*200;
    let auditoriumcost=(auditorium)*200;
    let gamescost=(games-1)*50;
    let boothcost=booth*100;
    let hourcost=(hour)*75
    let plantype="Small"
    let plancost=700
    var converter = require('number-to-words');

    


    
    
    /*let total=( parseInt((attend-200)/25)*20) + parseInt((exhibitor-3)*100)+ parseInt((customhall)*100) + parseInt((custombooth)*100)+  parseInt(whitelabel )+ parseInt((customlanding)*200)+ parseInt(three)+ parseInt((customlobby)*200)+parseInt((auditorium)*200)+ parseInt((games-1)*50)+ parseInt(booth*100)+  parseInt((hour)*75);*/
    let total=700+attendcost+exhibitorcost +customhallcost+customboothcost+whitelabelcost+customlandingcost+threecost+customlobbycost+auditoriumcost+gamescost+boothcost+hourcost;   
   let totalwords= converter.toWords(total);

    return(
            <div className="row ">
                 <Calheader/>
            
           
          
                <div className="col-md-1"></div>
                
                  
               
                
                
                
                
                
                <div className="col-md-10 ">
              
               
                <div id='step3'>
                <div className=''><Link to='/calculator' className='back '><i class="bi bi-arrow-left-square"></i></Link></div>
                   <pre></pre> <h3 className='fheading'>Step 3 : Select your volume <pre></pre> </h3>
                    <div className='row  '>
                <div className="col-md-7   ">
                    
                   
                    <pre></pre>
                    <h5 >Attendees Volume <Tippy className='tippy' content="Choose the number of attendees for the event!"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </h5>
                   
                  
                   
                   
                    
                    <div className=" row  ">
                            
                            <p>Define the volume of attendees per month for all your events <Tippy className='tippy' content="For Small Plan Attendes upto 200 are free beyond that, every additional 1-25 users $20 wil be charged "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                        <span className='col-1 zero'>200</span>
                        <div className='col-6'><input type="range" min="200" max="500" step="25" value={attend}  onChange={attendenumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1 '>500</span>
                       <div className='col-1'></div>
                        <div className='col '>
                        <input className=' inputbox value' id='attend'  type='number'min="200" max="500" step="25" value={attend}  onChange={attendenumber} ></input><pre></pre>
                        <h6>Cost: ${attendcost}</h6></div></div>
                             </div>

                             </div>


                     
                    <div className="row    ">
                   <div className='col-md-7'>
                    <h5>Exhibitors Volume </h5>
                    <div className='col-12'>
                     <pre></pre>
                     <p>Extra Booth($100/booth) <Tippy className='tippy' content="As you have chosen the Small plan, up to 3 booths are inclusive, you can pay if you need more 

"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
                       <div className='row'>
                      
                        <div className='col-1  zero'>3</div>
                        <div className='col-6'><input type="range" min="3" max="100" step="1" value={exhibitor} onChange={exhibitornumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>100</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input id='exhibitor'  type='number' className='value inputbox'  min="3" max="100" step="1" value={exhibitor} onChange={exhibitornumber} ></input><pre></pre>
                        <h6>Cost: ${exhibitorcost}</h6>
                    </div>
                       
                        
                        <p>Buy Custom Hall Template ($100/hall) <Tippy className='tippy' content="As you have chosen the medium plan, up to  2 halls are inclusive and charged for more than 2 halls. "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                        <span className='col-1 zero'>2</span>
                        <div className='col-6'><input type="range" value={customhall} min="2" max="50" step="1" onChange={customhallnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input id='customhall'  type='number' className='value inputbox' min="2" max="50" step="1" value={customhall}  onChange={customhallnumber} ></input><pre></pre>
                        <h6>Cost: ${customhallcost}</h6>
                        </div>
    
                      
                        
                        <p>Buy Custom Booth Template ($100/template)  <Tippy className='tippy' content=" Pick the no. of custom booths you want!"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range" min="0" max="50" step="1" value={custombooth} onChange={customboothnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox'  type='number'  value={custombooth} min="0" max="50" step="1" onChange={customboothnumber}   ></input><pre></pre>
                        <h6>Cost: ${customboothcost}</h6>
                        </div>
                            
                            </div>
                           
                    </div>
                    </div>
                    
                    </div>
                    </div>
                    <div id='step4'>
                    <div className="row step "><pre></pre>
                    <h3 className='fheading'>Step 4 : Select your Module <pre></pre></h3>

                      
                       <div className='col   '><pre></pre>
                           <h5 >White Label ($250/event) <Tippy className='tippy' content="Event URL - eventname.customerdomain.com 
You have 2 options here 1)  Per event at $ 250 
2) Talk to us One time purchase for a full year

"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </h5>
                           <p className='col'>
                           Showcase your brand! Create a white-label platform using your brand name, font, colours etc for an exclusive experience.
                           </p>
                          
                       </div>
                      <div className='col-3'><input class="form-check-input whitelabelcheck" type="checkbox" value="" id="flexCheckChecked" onChange={whitelabelnumber}></input><pre></pre>  <h6>Cost: ${ whitelabelcost}</h6>
     
     </div>
                      
                       
                        </div>
    
                        <div className="   row step ">
                            <h3 className='fheading'> Step 5: Landing/Event Microsite<pre></pre></h3><pre></pre>
                          
                               <div className='col-md-7'>
                               <div className='row'>
                            <p>Buy Custom Landing Template ($200/template) <Tippy className='tippy' content="Pay $200 for each template!
"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range" value={customlanding} min="0" max="50" step="1" onChange={customlandingnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox'  type='number' value={customlanding} min="0" max="50" step="1" onChange={customlandingnumber} ></input><pre></pre>
                        <h6>Cost: ${customlandingcost}</h6></div></div>
                             </div></div>
    
                             <div className="  row step ">
                            <h3 className='fheading'>Step 6: 3D and 360° Walkthrus <pre></pre> </h3>
                            <pre></pre>
                            <div className='col-md-7'><div className='row'>
                            <p>Branded Lobby Walkthrough ($300/Walkthrus) <Tippy className='tippy' content="Branded walkthrus exterior or interior with your logo brand and pictures"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
                            <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range" value={three} min="0" max="50" step="1" onChange={setthreenumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col '>
                        <input className='value inputbox'  type='number' value={three} min="0" max="50" step="1" onChange={setthreenumber} ></input>
                        <pre></pre>
                        <h6 className=''>Cost: ${threecost}</h6></div>
                             </div>
                              </div></div>

                            
    
    
    
                             <div className="  row  ">
                            <h3 className='fheading'>Step 7: Lobby<pre></pre></h3><pre></pre>
                            <div className='col-md-7'>
                                <div className='row'>
                            <p>Buy Custom Lobby Template ($200/template) <Tippy className='tippy' content="For each template, you are payable for $200 only!

"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>   </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range" value={customlobby} min="0" max="50" step="1" onChange={customlobbynumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox'  type='number' value={customlobby} min="0" max="50" step="1" onChange={customlobbynumber}  ></input><pre></pre>
                        <h6>Cost: ${customlobbycost}</h6></div>
                             </div></div></div>
                             </div>
                            
                           <div id='step8'>
                             <div className="  row step ">
                            <h3 className='fheading'>Step 8: Auditorium<pre></pre> </h3><pre></pre>
                            <div className='col-md-7'>
                                <div className='row'>
                            <p>Buy Custom Auditorium Template ($200/template) <Tippy className='tippy' content=" For each template, you are payable for $200 only!"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy></p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range"   value={auditorium} min="0" max="50" step="1" onChange={auditoriumnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox'  type='number' value={auditorium} min="0" max="50" step="1" onChange={auditoriumnumber} ></input><pre></pre>
                        <h6>Cost: ${auditoriumcost}</h6></div>
                             </div></div></div>
    
    
                             <div className="  row ">
                            <h3 className='fheading'>Step 9: Engagement<pre></pre> </h3>
                            <pre></pre>
                            <div className='col-md-6'>
                                <div className='row'>
                            <p>Games with Leaderboard ($50/game) <Tippy className='tippy' content="For Small plan,  1 game is inclusive and $50  for each game beyond that.

"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                            
                            <span className='col-1 zero'>1</span>
                        <div className='col-6'><input type="range" value={games } min="1" max="50" step="1" onChange={gamesnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox' id='game'  type='number' value={games } min="1" max="50" step="1" onChange={gamesnumber} ></input><pre></pre>
                        <h6>Cost: ${gamescost}</h6></div></div></div>
    
     <div className='col-md-6'><div className='row'>
                   <p>Photo Booth ($100/month) <Tippy className='tippy' content="Photo Booth chargeable for $100 per month.
"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range" value={booth} min="0" max="10" step="1" onChange={boothnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>10</span>
                       <div className='col-1'></div>
                        <div className='col'>
                        <input className='value  inputbox'  type='number' value={booth} min="0" max="10" step="1" onChange={boothnumber}  ></input><pre></pre>
                        <h6>Cost: ${boothcost}</h6></div>
    
                             </div></div></div>
    
    
                             <div className="  row step ">
                            <h3 className='fheading'>Step 10: Support  <pre></pre></h3>
                            <pre></pre> 
                            <div className='col-md-7'>
                                <div className='row'>
                            <p>Onboarding Executive (Tech support $75/hour) <Tippy className='tippy' content=" Tech Support available for $75 per month,
Free tech support for first event!
"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>     </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range" value={hour} min="0" max="50" step="1" onChange={hournumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50 hours</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox' type='number' value={hour}min="0" max="50" step="1" onChange={hournumber}  ></input><pre></pre>
                        <h6>Cost: ${hourcost}</h6></div></div>
                             </div></div>
                         
                             <pre></pre> <pre></pre> 
                             </div>
                   
                   <div id='stepquotation'   >
                            <div className='totalcontainer '> <span className='total'><img src={money} ></img>Total Cost: ${total} </span><pre></pre>
                            <Table attend={attend} attendcost={attendcost} exhibitor={exhibitor} exhibitorcost={exhibitorcost} customhall={customhall} customhallcost={customhallcost} custombooth={custombooth} customboothcost={customboothcost} whitelabel={whitelabel} whitelabelcost={whitelabelcost} customlanding={customlanding} customlandingcost={customlandingcost} customlobby={customlobby} customlobbycost={customlobbycost} three={three} threecost={threecost} auditorium={auditorium} auditoriumcost={auditoriumcost} games={games} gamescost={gamescost} booth={booth} boothcost={boothcost} hour={hour} hourcost={hourcost} total={total} plantype={plantype} plancost={plancost}/>
                             <h5 id='message'>Great,You are eligible for Small Plan!</h5>
                            
                            <pre></pre>
                             <button id='buttn' className='qotationbutton' onClick={getqotform}>Download Quotation</button>
                             <div id='spiner' class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                </div>
               
                
                <div className='row '>    <div className='col'> </div>
<div id='qotform' className='col-md-5 '>
<form class="row g-3">
<div class="col-12">
    <label for="inputCity"  class="form-label" >Full name <span style={{color:"red"}}>*</span></label>
    <input id='inputcity'  onInput={checkname ,getname} type="text" class="form-control"   placeholder='Enter Full Name' required />
  </div>
  <div className='col-12'> </div>
  
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email <span style={{color:"red"}}>*</span></label>
    <input type="email" onInput={checkname ,getemail}  class="form-control" id="inputemail" placeholder='Enter Your Email' />
  </div>
  
  <div class="col-md-6">
    <label  class="form-label">Company Name </label>
    <input type="text" class="form-control" required  placeholder='Company Name' />
  </div>
  
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Contact Number <span style={{color:"red"}}>*</span></label>
    <input  onInput={checkname} type="tel"   class="form-control" required placeholder='Contact Number ' id="inputmobile" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Country </label>
    <div class="input-group mb-3">
  <select id='selectform'  onChange={India} class="form-select" >
    <option selected>Select Country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option  id='India' value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
  </select>
  
</div>
  </div>
  <div className='col-12'></div>
  <div id='gstnumber' class="col-12">
    <label for="gstin" class="form-label">GSTIN  </label>
    <input onInput={gstnumber} type="text" class="form-control" id="gstin" />
  </div>
  <div className='col-12'>

  </div>
  <div class="col-12">
  <button type='submit' disabled={disable} id='buttn2' className='qotationbuttonmini' onClick={pdfDownload} >Submit</button>
  </div>
  
</form>

</div>
<div className='col'></div></div>
                
                
                </div>
                <div className='d-flex navigation_buttons '><button id='previous' className='navigationbuttons' onClick={previousfunction}>Previous</button> <button id='next' className='navigationbuttons' onClick={nextfunction}>Next</button>
                
                </div>
   
              
                
                 
                <div id='qotation' className='row   invoice2 '>
                   
                   <div className=' topsection '>
                       <div className=' '><img className='logo'  src={logo} height='80px' ></img>
                       
                        <p className='adress'>  To : {fullname}<br></br>{mail} <br></br>   {gst}</p></div>
                       <div className=''>  <p> Date: {today} <br></br>   Plan : <span className='total2'>Small</span> </p> </div>
                        
                      
                        </div>
                  
                 <div className='col-1'></div>
                 <div className='col-12  ' >
                  <div className='row '>
                     <div className='col  top '>Features</div>
                     <div className='col  top ' >Quantity</div>
                     <div className='col  top '>Cost</div>
                  </div>
                  <div className='row'>
                       <div className='col firstheading  features text-start '>Plan Cost </div>
                       <div className='col features' >Type:Small</div>
                       <div className='col features '>$ 700</div>
                    </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '>Attendees Volume</div>
                     <div className='col features' >{attend}</div>
                     <div className='col features '>${attendcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '>Extra Booth</div>
                     <div className='col features' >{exhibitor}</div>
                     <div className='col features'>${exhibitorcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '>Custom Hall Template </div>
                     <div className='col  features' >{customhall}</div>
                     <div className='col features '>${customhallcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '>Custom Booth Template </div>
                     <div className='col  features' >{custombooth}</div>
                     <div className='col  features'>${customboothcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '>White Label </div>
                     <div className='col features' >{whitelabel}</div>
                     <div className='col features '>${whitelabelcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '> Custom Landing Template </div>
                     <div className='col features' >{customlanding}</div>
                     <div className='col features '>${customlandingcost}</div>
                  </div>
                
                  <div className='row'>
                     <div className='col firstheading features text-start '>   Branded Lobby Walkthrough </div>
                     <div className='col features' >{three}</div>
                     <div className='col features '>${threecost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '>  Custom Lobby Template </div>
                     <div className='col features' >{customlobby}</div>
                     <div className='col features '>${customlobbycost}</div>
                  </div>

                  <div className='row'>
                     <div className='col firstheading features text-start '>  Auditorium  </div>
                     <div className='col features' >{auditorium}</div>
                     <div className='col  features'>${auditoriumcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '>  Games  with Leaderboard  </div>
                     <div className='col features' >{games}</div>
                     <div className='col features'>${gamescost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '> Photo Booth   </div>
                     <div className='col features' >{booth}</div>
                     <div className='col features'>${boothcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col firstheading features text-start '> Onboarding Executive Support   </div>
                     <div className='col features' >{hour}</div>
                     <div className='col features'>${hourcost}</div>
                  </div>
                  <div className='row'>
                      <div className='col  total2'>Total- ${total}<span className='words' >({totalwords.toUpperCase()}  DOLLARS ) </span> </div>
                     
                      
                     
                  </div>
                  </div>
                  <p >Great ,You are Eligible for Small Plan !<br></br><div className='row'><pre></pre><span className='lastline col-8'>***Quotation Validity is for 5 days from the time of Quotation generated date Please  get back to us at accounts@bizconnectevents.com for any queries 

</span></div></p>
               </div>
 
               
       
<pre></pre><pre></pre><pre></pre><pre></pre>
</div>    
                
                
                
                
                
               
                
              
            </div>
        );
}
export default Small;
