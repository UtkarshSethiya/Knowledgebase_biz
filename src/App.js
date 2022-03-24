
import './App.css';

import Request from './components/request';
import Calculator from './components/calculator';
import Header from './components/header';
import Content from './components/maincontent';
import Footer from './components/footer';
import Medium from './components/calculator_medium';
import Small from './components/calculator_small';
import Custom from './components/calculator_custom';
import ScrollToTop from './components/scroll';
import Pricing from './components/pricing/pricing';
import Event from './components/content/Event';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './homepage';
import Dashboard from './components/content/Dashboard';



function App() {
  

  return (
    <div className="App">



<ScrollToTop>
  
<Routes>

<Route path="/request"  element={<Request/>}  />

      <Route path="/home"  element={<Homepage/>}  />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/"  element={<Homepage/>}  />
     <Route path="/calculator/medium"  element={<Medium/>}  />
     <Route path="/calculator/small"  element={<Small/>}  />
     <Route path="/calculator/custom"  element={<Custom/>}  />
     <Route path="/pricing/pricing"  element={<Pricing/>}  />
    <Route path='/help/dashboard'   element={<Dashboard/>} />
    <Route path='/help/EventRegistration'   element={<Event/>} />
    
    </Routes>


    </ScrollToTop>
   <pre></pre>

<Footer/>
</div>






 
    );
  
}

export default App;
