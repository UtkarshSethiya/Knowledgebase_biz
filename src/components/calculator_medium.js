import './calculator.css';
import './pdf.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import quest from './images/quest.png';
import logo from './images/logo.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { jsPDF } from "jspdf";
import Calheader from './calculatorheader';


function Medium(){

    const[no,setno]=useState(1);
    const[attend,setattend]=useState(500);
    const[exhibitor,setexhibitor]=useState(5);
    const[customhall,setcustomhall]=useState(5);
    const[custombooth,setcustombooth]=useState(0);
    const[whitelabel,setwhitelabel]=useState(0);
    const[customlanding,setcustomlanding]=useState(0);
    const[customlobby,setcustomlobby]=useState(0);
    const[three,setthree]=useState(0);
    const[auditorium,setauditorium]=useState(0);
    const[games,setgames]=useState(2);
    const[booth,setbooth]=useState(0);
    const[hour,sethour]=useState(0);
    
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
       
        if(document.getElementById("attend").value<500){
            document.getElementById("attend").value=500;
            
           event.preventDefault();
         }
         if(document.getElementById("attend").value>1000){
            document.getElementById("attend").value=1000;
            
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
            if(document.getElementById("exhibitor").value<=5){
                document.getElementById("exhibitor").value=5;
                
               event.preventDefault();
             }
             if(document.getElementById("exhibitor").value>100){
                document.getElementById("exhibitor").value=100;
                
               event.preventDefault();
             }
             
    
             setexhibitor(document.getElementById("exhibitor").value);
    
        })
    }
    function customhallnumber(event){
        setcustomhall(event.target.value);
        document.getElementById("customhall").addEventListener("change",function(evt){
            if(document.getElementById("customhall").value<=5){
                document.getElementById("customhall").value=5;
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
    
    function setthreenumber(){
        if(document.getElementById("three").checked==false){
            setthree(0)
          };
          if(document.getElementById("three").checked==true){
           setthree(1);
          }
    }
    function gamesnumber(event){
        setgames(event.target.value);
        document.getElementById("game").addEventListener("change",function(evt){
            if(document.getElementById("game").value<=2){
                document.getElementById("game").value=2;
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
      
        doc.save('Bizonnect_Quotation_Medium.pdf');
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
    
    let attendcost=((attend-500)/25)*18;
    let exhibitorcost=(exhibitor-5)*100;
    let customhallcost=(customhall-5)*100;
    let customboothcost=(custombooth)*100;
    let whitelabelcost=whitelabel*250;
    let customlandingcost=(customlanding)*200;
    let threecost=three*300;
    let customlobbycost=(customlobby)*200;
    let auditoriumcost=(auditorium)*200;
    let gamescost=(games-2)*50;
    let boothcost=booth*100;
    let hourcost=(hour)*75
    
     
    

    
    var converter = require('number-to-words');

    
    /*let total=( parseInt((attend-200)/25)*20) + parseInt((exhibitor-3)*100)+ parseInt((customhall)*100) + parseInt((custombooth)*100)+  parseInt(whitelabel )+ parseInt((customlanding)*200)+ parseInt(three)+ parseInt((customlobby)*200)+parseInt((auditorium)*200)+ parseInt((games-1)*50)+ parseInt(booth*100)+  parseInt((hour)*75);*/
    let total=1000+attendcost+exhibitorcost +customhallcost+customboothcost+whitelabelcost+customlandingcost+threecost+customlobbycost+auditoriumcost+gamescost+boothcost+hourcost;   
    let totalwords= converter.toWords(total);
    
    return(
            <div className="row ">
                 
                 <Calheader/>
            
           
            <div className='calheading'> <pre></pre> <pre></pre><pre></pre> <pre></pre><pre></pre>
            <h1 id='font'>CALCULATOR</h1>
            <pre></pre> <pre></pre><pre></pre> <pre></pre>
            </div>
           
            <Link to='/calculator' className='back'><i class="bi bi-arrow-left-square"></i></Link>
    
                
                <div className="col-md-1"></div>
                
                   
                <div className="col-md-10 ">
                
                <p id='plantype'>Medium Plan</p>
                    <h3 className='fheading'>Step 3 : Select your volume <pre></pre> </h3>
                    <div className='row step'>
                <div className="col-md-7    ">
                    
                   
                    <pre></pre>
                    <h5 >Attendees Volume <Tippy className='tippy' content="Give us the number of Attendes in the event"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </h5>
                   
                   <div id='plancont'><h6   id='plan'></h6> <Link id='medium' to='/calculator_medium' className='  btn btn-outline-primary btn2'>Continue</Link></div>
                   
                   
                    
                    <div className=" row step ">
                            
                            <p>Define the volume of attendees per month for all your events <Tippy className='tippy' content="For Medium Plan Attendes upto 500 are free beyond that, every additional 1-25 users $18 wil be charged "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                        <span className='col-1 zero'>500</span>
                        <div className='col-6'><input type="range" min="500" max="1000" step="25" value={attend} onkeydown="return false" onChange={attendenumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1 '>1000</span>
                       <div className='col-1'></div>
                        <div className='col '>
                        <input className=' inputbox value' id='attend'  type='number'min="500" max="1000" step="25" value={attend} onkeydown="return false" onChange={attendenumber} ></input><pre></pre>
                        <h6>Cost: ${attendcost}</h6></div></div>
                             </div>

                             </div>


                     
                    <div className="row  step  ">
                   <div className='col-md-7'>
                    <h5>Exhibitors Volume </h5>
                    <div className='col-12'>
                     <pre><pre></pre></pre>
                     <p>Extra Booth($100/booth) <Tippy className='tippy' content="For Medium plan Booths upto 5 are free above 5 you will be charged "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
                       <div className='row'>
                      
                        <div className='col-1  zero'>5</div>
                        <div className='col-6'><input type="range" min="5" max="100" step="1" value={exhibitor} onChange={exhibitornumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>100</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input id='exhibitor'  type='number' className='value inputbox'  min="5" max="100" step="1" value={exhibitor} onChange={exhibitornumber} ></input><pre></pre>
                        <h6>Cost: ${exhibitorcost}</h6>
                    </div>
                       <pre></pre>
                        
                        <p>Buy Custom Hall Template ($100/hall) <Tippy className='tippy' content="For Medium plan Halls upto 5 are free above 5 you will be charged "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                        <span className='col-1 zero'>5</span>
                        <div className='col-6'><input type="range" value={customhall} min="5" max="50" step="1" onChange={customhallnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input id='customhall'  type='number' className='value inputbox' min="5" max="50" step="1" value={customhall}  onChange={customhallnumber} ></input><pre></pre>
                        <h6>Cost: ${customhallcost}</h6>
                        </div>
    
                        <pre></pre>
                        
                        <p>Buy Custom Booth Template ($100/template)  <Tippy className='tippy' content="Select no of custom booths "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
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
    
                    <div className="row step "><pre></pre>
                    <h3 className='fheading'>Step 4 : Select your Module <pre></pre></h3>
                    <pre></pre>
                      
                       <div className='col   '><pre></pre><pre></pre>
                           <h5 >White Label ($250/event) <Tippy className='tippy' content="This is the cost for 1 event.For more and yearly subscription please talk to us"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </h5>
                           <p>
                           Showcase your brand! Create a white-label platform using your brand name, font, colours etc for an exclusive experience.
                           </p>
                           
                       </div>
                      <div className='col-3'><input class="form-check-input whitelabelcheck" type="checkbox" value="" id="flexCheckChecked" onChange={whitelabelnumber}></input><pre></pre>  <h6>Cost: ${ whitelabelcost}</h6>
     
     </div>
                      
                       
                        </div>
    
                        <div className="   row step ">
                            <h3 className='fheading'> Step 5: Landing/Event Microsite<pre></pre></h3><pre></pre>
                          
                               <div className='col-md-7'>
                               <div className='row'><pre></pre><pre></pre>
                            <p>Buy Custom Landing Template ($200/template) <Tippy className='tippy' content="You will be charged $200 per template"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
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
                            <pre></pre><pre></pre><pre></pre>
                            <div className='col-5'><p>Branded Lobby Walkthrough ($300/event) <Tippy className='tippy' content="Depending on no of events 3D and 360° Walkthrus will be charged Max to 3 doors"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p></div>
                     
                    
                        <div className='col'><input class="form-check-input" type="checkbox" value="" id="three" onChange={setthreenumber}></input>
                        <pre></pre>
                        <h6>Cost: ${threecost}</h6></div>
                             </div>
    
    
    
                             <div className="  row step ">
                            <h3 className='fheading'>Step 7: Lobby<pre></pre></h3><pre></pre>
                            <div className='col-md-7'>
                                <div className='row'><pre></pre><pre></pre>
                            <p>Buy Custom Lobby Template ($200/template) <Tippy className='tippy' content=" You will be charged $200 per template"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>   </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range" value={customlobby} min="0" max="50" step="1" onChange={customlobbynumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox'  type='number' value={customlobby} min="0" max="50" step="1" onChange={customlobbynumber}  ></input><pre></pre>
                        <h6>Cost: ${customlobbycost}</h6></div>
                             </div></div></div>
    
    
                             <div className="  row step ">
                            <h3 className='fheading'>Step 8: Auditorium<pre></pre> </h3><pre></pre><pre></pre>
                            <div className='col-md-7'><pre></pre>
                                <div className='row'>
                            <p>Buy Custom Auditorium Template ($200/template) <Tippy className='tippy' content=" You will be charged $200 per template"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy></p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range"   value={auditorium} min="0" max="50" step="1" onChange={auditoriumnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox'  type='number' value={auditorium} min="0" max="50" step="1" onChange={auditoriumnumber} ></input><pre></pre>
                        <h6>Cost: ${auditoriumcost}</h6></div>
                             </div></div></div>
    
    
                             <div className="  row step ">
                            <h3 className='fheading'>Step 9: Engagement<pre></pre> </h3>
                            <pre></pre><pre></pre>
                            <div className='col-md-6'>
                                <div className='row'>
                            <p>Games with Leaderboard ($50/game) <Tippy className='tippy' content="For Medium plan games upto 2 are free above 2 you will be charged $50 "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                            
                            <span className='col-1 zero'>2</span>
                        <div className='col-6'><input type="range" value={games } min="2" max="50" step="1" onChange={gamesnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox' id='game'  type='number' value={games } min="2" max="50" step="1" onChange={gamesnumber} ></input><pre></pre>
                        <h6>Cost: ${gamescost}</h6></div></div></div>
    
     <div className='col-md-6'><div className='row'>
                   <p>Photo Booth ($100/month) <Tippy className='tippy' content="You will be charged $100 per month"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
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
                            <pre></pre> <pre></pre>
                            <div className='col-md-7'>
                                <div className='row'>
                            <p>Onboarding Executive (Tech support $75/hour) <Tippy className='tippy' content=" Tech Support, 1st Event Free Tech Support 
    Post 1st Event - Per hr $ 75"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>     </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-6'><input type="range" value={hour} min="0" max="50" step="1" onChange={hournumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50 hours</span>
                        <div className='col-1'></div>
                        <div className='col'>
                        <input className='value inputbox' type='number' value={hour}min="0" max="50" step="1" onChange={hournumber}  ></input><pre></pre>
                        <h6>Cost: ${hourcost}</h6></div></div>
                             </div></div>
    
                             <pre></pre> <pre></pre> 
                   
                   
                            <div className='totalcontainer'> <span className='total'>Total: ${total} </span><pre></pre>
                             <h5 id='message'>Great,You are eligible for Medium Plan!</h5>
                            <pre></pre>
                             <button id='buttn' className='qotationbutton' onClick={getqotform}>Get My Quotation</button>
                             <div id='spiner' class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                </div></div>
                <pre></pre> <pre></pre> <pre></pre>
                
                <div id='qotation' className='row  invoice2 '>
                   
                   <div className='row '>
                       <div className='col-2 '><img className='logo'  src={logo} height='80px' ></img>
                       
                        <p className='adress'>  To : {fullname}<br></br>{mail} <br></br>   {gst}</p></div>
                       <div className='col-4 bf'>  <p> Date: {today} <br></br>   Plan : <span className='total2'>Medium</span> </p> </div>
                        
                      
                        </div>
                  
                 <div className='col-1'></div>
                 <div className='col-7  ' >
                  <div className='row '>
                     <div className='col-4  top '>Features</div>
                     <div className='col-3  top ' >Quantity</div>
                     <div className='col-3  top '>Cost</div>
                  </div>
                  <div className='row'>
                       <div className='col-4   features'>Plan Cost </div>
                       <div className='col-3 features' >Type:Medium</div>
                       <div className='col-3 features '>$ 1000</div>
                    </div>
                  <div className='row'>
                     <div className='col-4 features'>Attendees Volume</div>
                     <div className='col-3 features' >{attend}</div>
                     <div className='col-3 features '>${attendcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'>Extra Booth</div>
                     <div className='col-3 features' >{exhibitor}</div>
                     <div className='col-3 features'>${exhibitorcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'>Custom Hall Template </div>
                     <div className='col-3 features' >{customhall}</div>
                     <div className='col-3 features '>${customhallcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'>Custom Booth Template </div>
                     <div className='col-3 features' >{custombooth}</div>
                     <div className='col-3  features'>${customboothcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'>White Label </div>
                     <div className='col-3 features' >{whitelabel}</div>
                     <div className='col-3 features '>${whitelabelcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'> Custom Landing Template </div>
                     <div className='col-3 features' >{customlanding}</div>
                     <div className='col-3 features '>${customlandingcost}</div>
                  </div>
                
                  <div className='row'>
                     <div className='col-4 features'>   Branded Lobby Walkthrough </div>
                     <div className='col-3 features' >{three}</div>
                     <div className='col-3 features '>${threecost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'>  Custom Lobby Template </div>
                     <div className='col-3 features' >{customlobby}</div>
                     <div className='col-3 features '>${customlobbycost}</div>
                  </div>

                  <div className='row'>
                     <div className='col-4 features'>  Auditorium  </div>
                     <div className='col-3 features' >{auditorium}</div>
                     <div className='col-3  features'>${auditoriumcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'>  Games with Leaderboard  </div>
                     <div className='col-3 features' >{games}</div>
                     <div className='col-3 features'>${gamescost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'> Photo Booth   </div>
                     <div className='col-3 features' >{booth}</div>
                     <div className='col-3 features'>${boothcost}</div>
                  </div>
                  <div className='row'>
                     <div className='col-4 features'> Onboarding Executive Support   </div>
                     <div className='col-3 features' >{hour}</div>
                     <div className='col-3 features'>${hourcost}</div>
                  </div>
                  <div className='row'>
                      <div className='col-10 total2'>Total- ${total}<span className='words' >({totalwords.toUpperCase()}  DOLLARS ) </span></div>
                     
                      
                     
                  </div>
                  </div>
                  <p >Great ,You are Eligible for Medium Plan !<br></br><div className='row'><pre></pre><span className='lastline col-8'>***Quotation Validity is for 5 days from the time of Quotation generated date  Please  get back to us at accounts@bizconnectevents.com for any queries 

</span></div></p>
               </div>
 
               
        <div className='row'>    <div className='col'> </div>
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
    <input type="text" class="form-control"  required placeholder='Country' id="inputCity" />
  </div>
  <div className='col-12'></div>
  <div class="col-12">
    <label for="gstin" class="form-label">GSTIN (if nationality Indian) </label>
    <input onInput={gstnumber} type="text" class="form-control" id="gstin" />
  </div>
  <div className='col-12'>

  </div>
  <div class="col-12">
  <button type='submit' disabled={disable} id='buttn2' className='qotationbuttonmini' onClick={pdfDownload} >Get My Quotation</button>
  </div>
  
</form>
</div>

<div className='col'></div>
</div>    
                
                
<pre></pre> <pre></pre><pre></pre>        
                
                
                
                
                
                
                
                
                
                
                
                
                
               

                
              
            </div>
        );
}

export default Medium;