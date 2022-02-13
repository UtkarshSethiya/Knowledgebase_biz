import './request.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";
import requestimage from './requestimages/image 9.png';
import registered from './requestimages/registered 1.png'
function Request(){

return(

<div className='row '>
<div className="container-fluid row navbar">
    <div className='col-3  topleft navbar  '>
    <a className="navbar-brand" href="https://bizconnectevents.com/" ><img className='logo' src={logo} height="62px" width="124px"></img>   </a>
    <Link className="navbar-brand home " to='/home'> Home</Link>
    
    </div>
    
    <div className='col middle  '  > </div>

    <div className='col-4 navbar  subscribe'>
 
    <Link className="topbuttons btn" to="/pricing/pricing"><i className="bi bi-cash-coin"></i> Pricing</Link>
   <Link  className="topbuttons btn " to="/calculator"><i className="bi bi-calculator-fill"></i> Calculator</Link>
 
    <button className="btn subscribe btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>

<h1   className="  fonts text-white py-3 text-center py-lg-5 pricing submit-request " >
      SUBMIT REQUEST
     </h1>
  

     <div className="d-flex justify-content-around align-items-center flex-wrap-reverse content-of-form mt-lg-5 pt-lg-5">
     
    
       <div className="form-out-side">
       <form className="form" id="form">
        <h1 id='sub' className=" border-bottom pb-1 fonts backgroundcolor  "   >Registration Form</h1>
        <div className="row">
          <div className="form-group col-md-6">
            <label className='fonts' for="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="" />
          </div>
          <div className="form-group col-md-6">
            <label className='fonts' for="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label className='fonts' for="Email">Email ID</label>
            <input type="email" className="form-control" id="Email" placeholder=""/>
          </div>
          <div className="form-group col-md-6">
            <label className='fonts' for="phoneNumber">Phone Number</label>
            <input type="tel" className="form-control" id="phoneNumber" placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label className='fonts' for="queryType">Query Type </label>
          <input type="text" className="form-control" id="queryType" placeholder=" " />
        </div>
        
        <div className="row">
          <div className="form-group col-md-4">
            <label className='fonts' for="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select name="inputState" id="inputState" className="form-control">
             <option value="Andhra Pradesh">Andhra Pradesh</option>
             <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
             <option value="Arunachal Pradesh">Arunachal Pradesh</option>
             <option value="Assam">Assam</option>
             <option value="Bihar">Bihar</option>
             <option value="Chandigarh">Chandigarh</option>
             <option value="Chhattisgarh">Chhattisgarh</option>
             <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
             <option value="Daman and Diu">Daman and Diu</option>
             <option value="Delhi">Delhi</option>
             <option value="Lakshadweep">Lakshadweep</option>
             <option value="Puducherry">Puducherry</option>
             <option value="Goa">Goa</option>
             <option value="Gujarat">Gujarat</option>
             <option value="Haryana">Haryana</option>
             <option value="Himachal Pradesh">Himachal Pradesh</option>
             <option value="Jammu and Kashmir">Jammu and Kashmir</option>
             <option value="Jharkhand">Jharkhand</option>
             <option value="Karnataka">Karnataka</option>
             <option value="Kerala">Kerala</option>
             <option value="Madhya Pradesh">Madhya Pradesh</option>
             <option value="Maharashtra">Maharashtra</option>
             <option value="Manipur">Manipur</option>
             <option value="Meghalaya">Meghalaya</option>
             <option value="Mizoram">Mizoram</option>
             <option value="Nagaland">Nagaland</option>
             <option value="Odisha">Odisha</option>
             <option value="Punjab">Punjab</option>
             <option value="Rajasthan">Rajasthan</option>
             <option value="Sikkim">Sikkim</option>
             <option value="Tamil Nadu">Tamil Nadu</option>
             <option value="Telangana">Telangana</option>
             <option value="Tripura">Tripura</option>
             <option value="Uttar Pradesh">Uttar Pradesh</option>
             <option value="Uttarakhand">Uttarakhand</option>
             <option value="West Bengal">West Bengal</option>
             </select>
          </div>
          <div className="form-group col-md-4">
            <label className='fonts' for="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
         <label className='fonts' for="description">Description</label>
         <textarea className="form-control" rows="11" id="description" rows="3"></textarea>
       </div>
        <div className="form-group d-flex justify-content-between align-items-center ">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" required id="gridCheck" />
            <label className='fonts' className="form-check-label" for="gridCheck">
             I Agree to terms and conditions
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
     </div>
    
      <div>
       <h2 className="text-center fonts">Register Here</h2>
       <div className="d-flex justify-content-around align-items-center  " >
        <a href="#form">
         <img src={registered}  className="" width="70px" alt="" />
        </a>
       </div>
       <div><img src={requestimage}  className="img-fluid img-1" draggable="false" alt="" /></div>
      </div></div></div>

);


}

export default Request;