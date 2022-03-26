
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
import Network from './components/content/Network';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './homepage';
import Dashboard from './components/content/Dashboard';
import Exhibition from './components/content/Exhibition';
import Landing from './components/content/Landing';
import Speaker from './components/content/Speaker';
import Lobby from './components/content/Lobby';
import Booth from './components/content/Booth';



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
    <Route path='/help/ExhibitionhallManagement'   element={<Exhibition/>} />
    <Route path='/help/LandingPageManagement'   element={<Landing/>} />
    <Route path='/help/NetworkManagement'   element={<Network/>} />
    <Route path='/help/SpeakerRoomManagement'   element={<Speaker/>} />
    <Route path='/help/BoothManagement'   element={<Booth/>} />
    <Route path='/help/LobbyManagement'   element={<Lobby/>} />
    
    </Routes>


    </ScrollToTop>
   <pre></pre>

<Footer/>
</div>






 
    );
  
}

export default App;
