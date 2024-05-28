import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Purpose from './components/Purpose/Purpose';
import Communities from './components/Communities/Communities';
 const App = () => {
  return (
  
    <div>
      
      <Hero />
      <Purpose />
      <Communities />
    </div>
 
)
 } 

export default App
