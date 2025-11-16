import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import AdminLogin from './components/Admin/AdminLogin.jsx'; 
import Dashboard from './components/Admin/Dashboard.jsx';


const router = createBrowserRouter([
 {
    path: '/',
    element: <Layout/>,
    children: [
       {
        path: "",
        element: <Home />
       },
       {
        path: "about",
        element: <About/>
       },
       {
        path: "contact",
        element: <Contact/>
       },
       {
        path: "admin-login",
        element: <AdminLogin />
       },
       {
        path: "admin-dashboard",
        element: <Dashboard />
       }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
