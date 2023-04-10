import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js" => not working coz it didnot include poper library
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Root from './Components/Root/Root';
import { Children } from 'react';
import Location from './Components/Location/Location';


const router = createBrowserRouter([
  {index: "/" , element: <Root/> , errorElement: <NotFound/> , children:[
    {path: "contact" , element: <Contact/>},
    {path: "portfolio" , element: <Portfolio/>},
    {path: "location" , element: <Location/>},
    {path: "about" , element: <About/>}

  ]  }

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  // <App />
);

