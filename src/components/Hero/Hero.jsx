import React from 'react'
import './hero.css';
import Navbar from '../Navbar/Navbar';
const Hero = () => {
  return (
    <>
    <Navbar />
    <div className='hero-wrapper'>
     
     <div className="hero-container flexColCenter">
      <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="head flexColCenter">
        <h1>Welcome to Dragonfly</h1>
        <h3>Where Tech Meets Passion</h3>
        <div className='padding'>
          <p>
          Welcome to the heart of innovation, Dragonfly, an electrifying club that ignites students' passion for innovation and exploration. It provides an exhilarating opportunity for students to immerse themselves in the world of technology, where they can unleash   theircreativity and expertise. From the captivating world of webdevelopment to the thrilling realm of programminglanguages,from  the cutting-edge domain of artificial intelligence to the mind-bending frontier of machine learning, Dragonfly empowers students to soar to new heights of technological prowess and ingenuity.
          </p>
        </div>
      </div>
      <a href="#">
        <div className="member-button">
            <button className="button">
              Be a Member
            </button>
        </div>
       </a>
    </div>
    </div>
    </>
  )
}

export default Hero