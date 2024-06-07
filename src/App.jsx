import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Purpose from './components/Purpose/Purpose';
import Communities from './components/Communities/Communities';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
 const App = () => {
  return (
  
    <div>
      
      <Hero />
      <Purpose />
      <Communities />
      <About />
      <Footer />
    </div>
 
)
 } 

export default App
