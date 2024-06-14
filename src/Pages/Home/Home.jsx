import React from 'react'

import About from '../../components/About/About';
import Communities from '../../components/Communities/Communities';
import Hero from '../../components/Hero/Hero';
import Purpose from '../../components/Purpose/Purpose';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
  <>
   <Hero />
      <Purpose />
      <Communities />
      <About />
      
  </>
  )
}

export default Home