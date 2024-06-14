import { useState } from 'react'
import { createBrowserRouter , RouterProvider, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Purpose from './components/Purpose/Purpose';
import Communities from './components/Communities/Communities';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
const Layout = () =>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Signup",
        element:<Signup/>
      }
    ]
  }
])
 const App = () => {
  return <div><RouterProvider router={router}/></div>;
 }; 

export default App
