
import './App.css';
import Header from './components/header';
import Request from './components/request';
import Calculator from './components/calculator';
import Home from './components/home';
import Footer from './components/footer';
import Medium from './components/calculator_medium';
import Small from './components/calculator_small';
import Custom from './components/calculator_custom';
import ScrollToTop from './components/scroll';
import Pricing from './components/pricing/pricing';



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  

  return (
    <div className="App">




<ScrollToTop>
<Routes>

      <Route path="home"  element={<Calculator/>}  />
      <Route path="calculator" element={<Calculator />} />
 
     <Route path="calculator_medium"  element={<Medium/>}  />
     <Route path="calculator_small"  element={<Small/>}  />
     <Route path="calculator_custom"  element={<Custom/>}  />
     <Route path="/pricing/pricing"  element={<Pricing/>}  />
    
    
    </Routes>


    </ScrollToTop>
   <pre></pre>
  <Footer/>

</div>






 
    );
  
}

export default App;
