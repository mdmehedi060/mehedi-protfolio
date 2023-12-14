import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1349px] mx-auto bg-black'>
    <ThemeProvider><RouterProvider router={router} /></ThemeProvider>
       
    </div>
   
  </React.StrictMode>,
)
