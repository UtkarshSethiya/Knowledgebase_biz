import './pricing.css';

import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import Plan from './plan';

import feature1 from "./subscription/dfdfd 1.png";
import feature2 from "./subscription/tea-cup-png-photos 1 (2).png";
import feature3 from "./subscription/000000 1.png";
import feature4 from "./subscription/78788 1.png";
import feature5 from "./subscription/66666 1.png";

import facebookLike from "./subscription/Facebook Like.png";
import graduationCup from "./subscription/Graduation Cap.png";
import prize from "./subscription/Prize.png";
import trophy from "./subscription/Trophy.png";

function Pricing(){


  
    return(<div>
        <div class="container-fluid row navbar">
    <div className='col-3  topleft navbar  '>
    <a class="navbar-brand" href="https://bizconnectevents.com/" ><img className='logo' src={logo} height="62px" width="124px"></img>   </a>
    <Link class="navbar-brand home " to='/home'> Home</Link>
    
    </div>
    
    <div className='col middle  '  > </div>

    <div className='col-3 navbar  subscribe'>
 
    
   <Link  className="topbuttons btn " to="/calculator"><i class="bi bi-calculator-fill"></i> Calculator</Link>
 
    <button className="btn subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>
        
        <div>
        <h1 class="bg-success text-white py-3 text-center py-lg-5 pricing">
        PRICING
      </h1>
        <div className="text-center p-lg-5 p-4">
        <h1 className='headi'>Monthly Subscription Cost</h1>
        <p className="text-success">Get 20% discount for Annual Subscription</p>
        <p>Bill Annually - Save 20%</p>
     
        <div className="d-inline-block">
          <label className="toggle" for="billAnnually">
            <input type="checkbox" className="toggle__input" id="billAnnually" />
            <span className="toggle-track d-flex m-auto">
              <span className="toggle-indicator">
                <span className="checkMark"> </span>
              </span>
            </span>
          </label>
        </div>
      </div>

  

      <div class="d-flex px-lg-5 mx-lg-5 py-lg-3 flex-wrap">
        <div class="card images-container-1">
          <img src={feature1} class="card-img-top image-1" alt="Features" />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <h5 class="card-title card-title-features card-title-features-1">
                <svg
                  width="24"
                  height="24"
                  class="features-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 18.8679L19.2102 23.375L17.2968 14.8804L23.6668 9.16502L15.2785 8.42794L12.0002 0.416687L8.72183 8.42794L0.333496 9.16502L6.7035 14.8804L4.79016 23.375L12.0002 18.8679Z"
                    fill="black"
                  />
                </svg>
                Free
              </h5>
            </div>
            <p class="card-text card-text-features"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
        <div class="card images-container-2">
          <img src={feature2} class="card-img-top image-2" alt="Features" />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <img src={facebookLike} class="features-icon" alt="" />
              <h5 class="card-title card-title-features">Regular</h5>
            </div>
            <p class="card-text card-text-features">
              For small conferences and workshops with 50 attendees per month
              with a Auditorium and booth included along with the choice of your
              event name in bizconnect URL.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
        <div class="card images-container-3">
          <img src={feature3} class="card-img-top image-3" alt="Features" />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <img src={graduationCup} class="features-icon" alt="" />
              <h5 class="card-title card-title-features">Perfect</h5>
            </div>
            <p class="card-text card-text-features">
              For small interactive events and webinars with 200 attendees per
              month. Engage with your audience and host them on the platform in
              any language of your choice.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
        <div class="card images-container-4">
          <img src={feature4} class="card-img-top image-4" alt="Features" />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <img src={prize} class="features-icon" alt="" />
              <h5 class="card-title card-title-features">Custom</h5>
            </div>
            <p class="card-text card-text-features">
              For regular events and fairs with 500 attendees per month. Expand
              your connections by networking with attendees that match your
              interests.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
        <div class="card images-container-5">
          <img src={feature5} class="card-img-top image-5" alt="Features" />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <img src={trophy} class="features-icon" alt="" />
              <h5 class="card-title card-title-features">Features</h5>
            </div>
            <p class="card-text card-text-features">
              For large events, expos and summits with 1000 attendees per month.
              Build the most visually striking event with moving banners and
              customize it in any way you want. Talk to us to explore the
              unlimited possibilities!
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
      </div>




      <div className="hide px-lg-5 mx-lg-5">

        <div className="row section">
          <div className="col-12">
            <i className="bi bi-globe2"></i>
            Event and Attendees
          </div>
        </div>

        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom border-top">
            Number of Single day event
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Unlimited
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Unlimited
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Unlimited
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Talk with us
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Number of attendees
          </div>
          <div className="col no_of_sing border-end border-bottom">50 / Month</div>
          <div className="col no_of_sing border-end border-bottom">200 /Month</div>
          <div className="col no_of_sing border-end border-bottom">500 /Month</div>
          <div className="col no_of_sing border-end border-bottom">1000 /Month</div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Additional attendees not per day (it should no be per month)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            Every additional 1-25 users $20
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Every additional 1-25 users $20
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Every additional 1-25 users $20
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Max no. of Event Days
          </div>
          <div className="col no_of_sing border-end border-bottom">2</div>
          <div className="col no_of_sing border-end border-bottom">5</div>
          <div className="col no_of_sing border-end border-bottom">10</div>
          <div className="col no_of_sing border-end border-bottom">Custom</div>
        </div>

        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Language Transcript / Translation (terms applied)
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>

  

        <div className="row section">
          <div className="col-12">
            <i className="bi bi-globe2"></i> URL and Whitelabels Section
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom border-top">
            URL
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            bizconnect.events
           
            /youreventname
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            bizconnect.events
            
            /youreventname
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            bizconnect.events
          
            /youreventname
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            bizconnect.events
       
            /youreventname
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Whitelabel URL
           
            per event (eventname.yourdomain.com)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">$200/Event</div>
          <div className="col no_of_sing border-end border-bottom">$200/Event</div>
          <div className="col no_of_sing border-end border-bottom">$200/Event</div>
        </div>
        <div className="row">
          <div
            className="col even no_of_sing border-end border-bottom one-time-whitelabel"
          >
            One Time Whitelabel URL
         
            (chooseyourname.yourdomain.com
      
            /youreventname)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">$500/Event</div>
          <div className="col no_of_sing border-end border-bottom">$500/Event</div>
        </div>

        <div className="row section">
          <div className="col-12">
            <i className="bi bi-badge-3d-fill"></i> 3D & 360° Walkthrus
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom border-top">
            Walkthrough (Exterior - Entrance)
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Default
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Default Free / Branded $ 100
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Default Free / Branded $ 100
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Default Free / Branded $ 100
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Walkthrough (Exterior - Entrance) (Add Yours)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">Cost</div>
          <div className="col no_of_sing border-end border-bottom">Cost</div>
          <div className="col no_of_sing border-end border-bottom">Cost</div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Branded Lobby Walkthrough ( Max to 3 doors )
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">$100/Event</div>
          <div className="col no_of_sing border-end border-bottom">$100/Event</div>
          <div className="col no_of_sing border-end border-bottom">$100/Event</div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            360 degree
          </div>
          <div className="col no_of_sing border-end border-bottom">-</div>
          <div className="col no_of_sing border-end border-bottom">-</div>
          <div className="col no_of_sing border-end border-bottom">-</div>
          <div className="col no_of_sing border-end border-bottom">
            Talk with us
          </div>
        </div>

        <div className="row section">
          <div className="col-12">
            <i className="bi bi-telephone-fill"></i> Calls (Video & Audio) &
            <i className="bi bi-chat-dots-fill"></i> Chat
          </div>
        </div>

        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom border-top">
            Chat (Single) (Built in or add third party (embed iFrame)
          </div>
          <div className="col no_of_sing border-end border-bottom border-top"></div>
          <div className="col no_of_sing border-end border-bottom border-top">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Video Call (Single) (Built in or add third party URL)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            One2One Chat (Built in or add third party embed iFrame)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Group Chat (emoji & GIF expressions) (Built in or add third party
            embed iFrame))
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>

        <div className="row section">
          <div className="col-12"><i className="bi bi-speaker-fill"></i> Lobby</div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom border-top">
            Templates
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            2
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            3
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            5
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Special Templates
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">Static</div>
          <div className="col no_of_sing border-end border-bottom">
            Default Templates
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Default Templates
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Default Templates
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Default Templates
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Zoom Out Hanging Banner
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Yes Based on Template Chosen
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Yes Based on Template Chosen
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Yes Based on Template Chosen
          </div>
          <div className="col no_of_sing border-end border-bottom">
            Yes Based on Template Chosen
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Static/GIF Hanging Banner
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Buy Custom Landing Template
          </div>
          <div className="col no_of_sing border-end border-bottom">$100</div>
          <div className="col no_of_sing border-end border-bottom">$100</div>
          <div className="col no_of_sing border-end border-bottom">$100</div>
          <div className="col no_of_sing border-end border-bottom">
            Special template
          </div>
        </div>

        <div className="row section">
          <div className="col-12"><i className="bi bi-globe2"></i> Auditorium</div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom border-top">
            Number of Auditoriums (Multiple Tracks) (Select your live streaming
            - YouTube, Vimeo (Add URL player) or request )
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            1
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Multiple
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Multiple
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Multiple
          </div>
        </div>

        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">Banner</div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            As per template
          </div>
          <div className="col no_of_sing border-end border-bottom">
            As per template
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Banner GIF
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            As per template
          </div>
          <div className="col no_of_sing border-end border-bottom">
            As per template
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom diy-speakers">
            DIY Speakers/Session Management/Agenda
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Speakers Lounge
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Language Interpreter - (English + Your choice) (Interpreter cost not
            included)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">$200/Event</div>
          <div className="col no_of_sing border-end border-bottom">$200/Event</div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Q&A (Text Form)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Buy Custom Auditorium Template
          </div>
          <div className="col no_of_sing border-end border-bottom">$75</div>
          <div className="col no_of_sing border-end border-bottom">$75</div>
          <div className="col no_of_sing border-end border-bottom">$75</div>
          <div className="col no_of_sing border-end border-bottom">
            Special Template
          </div>
        </div>

        <div className="row section">
          <div className="col-12"><i className="bi bi-globe2"></i> Exhibition</div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom border-top">
            Halls
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            1
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            2
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            5
          </div>
          <div className="col no_of_sing border-end border-bottom border-top"></div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Exhibition Booth
          </div>
          <div className="col no_of_sing border-end border-bottom">1</div>
          <div className="col no_of_sing border-end border-bottom">3</div>
          <div className="col no_of_sing border-end border-bottom">5</div>
          <div className="col no_of_sing border-end border-bottom">
            Talk with Us
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Extra Booth
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">$100/Event</div>
          <div className="col no_of_sing border-end border-bottom">$100/Event</div>
          <div className="col no_of_sing border-end border-bottom">
            Talk with Us
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Per Chat
          </div>
          <div className="col no_of_sing border-end border-bottom">$25</div>
          <div className="col no_of_sing border-end border-bottom">$8</div>
          <div className="col no_of_sing border-end border-bottom">$8</div>
          <div className="col no_of_sing border-end border-bottom">$8</div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Per Video
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">$10</div>
          <div className="col no_of_sing border-end border-bottom">$10</div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Buy Custom Hall Template
          </div>
          <div className="col no_of_sing border-end border-bottom">$75</div>
          <div className="col no_of_sing border-end border-bottom">$75</div>
          <div className="col no_of_sing border-end border-bottom">$75</div>
          <div className="col no_of_sing border-end border-bottom">
            Special template
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Buy Custom Booth Template
          </div>
          <div className="col no_of_sing border-end border-bottom">$100</div>
          <div className="col no_of_sing border-end border-bottom">$100</div>
          <div className="col no_of_sing border-end border-bottom">$100</div>
          <div className="col no_of_sing border-end border-bottom">
            Special template
          </div>
        </div>

        <div className="row section">
          <div className="col-12">
            <i className="bi bi-people-fill"></i
            ><i className="bi bi-people-fill"></i> Engagement
          </div>
        </div>

        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom border-top">
            Leaderboard
          </div>
          <div className="col no_of_sing border-end border-bottom border-top"></div>
          <div className="col no_of_sing border-end border-bottom border-top"></div>
          <div className="col no_of_sing border-end border-bottom border-top">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Business card exchange
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Free Games (From Deafult)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">1</div>
          <div className="col no_of_sing border-end border-bottom">2</div>
          <div className="col no_of_sing border-end border-bottom">3</div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Games with Leaderboard
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">$50/Event</div>
          <div className="col no_of_sing border-end border-bottom">$50/Event</div>
          <div className="col no_of_sing border-end border-bottom">
            Talk with us
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Photo Booth
          </div>
          <div className="col no_of_sing border-end border-bottom">$100/Month</div>
          <div className="col no_of_sing border-end border-bottom">$100/Month</div>
          <div className="col no_of_sing border-end border-bottom">$100/Month</div>
          <div className="col no_of_sing border-end border-bottom">$100/Month</div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Photo Gallery
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Announcement
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Download (event Briefcase)
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>

        <div className="row section">
          <div className="col-12"><i className="bi bi-people-fill"></i> Networking</div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom border-top">
            Templates
          </div>
          <div className="col no_of_sing border-end border-bottom border-top"></div>
          <div className="col no_of_sing border-end border-bottom border-top"></div>
          <div className="col no_of_sing border-end border-bottom border-top">
            2
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Talk to Us
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Business card exchange
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            User profile
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Networking Room
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">1</div>
          <div className="col no_of_sing border-end border-bottom">2</div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">
            Buy Custom Networking Template
          </div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">$75</div>
          <div className="col no_of_sing border-end border-bottom">
            Special template
          </div>
        </div>

        <div className="row section">
          <div className="col-12">
            <i className="bi bi-person-lines-fill"></i> Support
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom border-top">
            Onboarding Executive (Tech Support)
          </div>
          <div className="col no_of_sing border-end border-bottom border-top"></div>
          <div className="col no_of_sing border-end border-bottom border-top">
            "1st Event Free Tech Support Post 1st Event - Per hr $ 75"
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            "1st Event Free Tech Support Post 1st Event - Per hr $ 75"
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Talk to us
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom">Mails</div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">Chat</div>
          <div className="col no_of_sing border-end border-bottom"></div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
          <div className="col no_of_sing border-end border-bottom">
            <i className="bi bi-check"></i>
          </div>
        </div>

        <div className="row section">
          <div className="col-12">
            <i className="bi bi-globe2"></i> Event Production
          </div>
        </div>
        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom border-top">
            Video Player
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Integrate Yours
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Integrate Yours
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Integrate Yours
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            Integrate Yours
          </div>
        </div>
        <div className="row">
          <div className="col even no_of_sing border-end border-bottom">
            Show Running
          </div>
          <div className="col no_of_sing border-end border-bottom">DIY</div>
          <div className="col no_of_sing border-end border-bottom">DIY</div>
          <div className="col no_of_sing border-end border-bottom">DIY</div>
          <div className="col no_of_sing border-end border-bottom">DIY</div>
        </div>

        <div className="row section">
          <div className="col-12"><i className="bi bi-currency-dollar"></i> Cost</div>
        </div>

        <div className="row">
          <div className="col odd no_of_sing border-end border-bottom border-top">
            Video Player
          </div>
          <div
            className="col no_of_sing border-end border-bottom border-top cost-adujust"
          >
            $700
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            $1000
          </div>
          <div className="col no_of_sing border-end border-bottom border-top">
            $$
          </div>
        </div>
        <div
          className="d-flex mt-3 justify-content-center align-items-center text-center"
        >
          <h6 className="note p-2">
            <b className="text-danger">**</b>NOTE:
            <pre></pre>
            <b className="text-danger">**</b> Buy special templates with additional
            cost
            <pre></pre>
            <b className="text-danger">**</b> More free Templates will be added
            every month
          </h6>
        </div>
      </div>
</div></div>
   );
}

export default Pricing;