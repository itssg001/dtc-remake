import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Purpose from './components/Purpose/Purpose';
import Communities from './components/Communities/Communities';
import About from './components/About/About';

 const App = () => {
  return (
  
    <div>
      
      <Hero />
      <Purpose />
      <Communities />
      <About />
    </div>
 
)
 } 

export default App
