import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,MemoryRouter , Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './homepage'

ReactDOM.render(
  <BrowserRouter>

  
<App/>

   
  </BrowserRouter>,
  document.getElementById('root')
);



