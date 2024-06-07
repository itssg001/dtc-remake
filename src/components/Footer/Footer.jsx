import React from 'react'
import './footer.css'
const Footer = () => {
  return (
  <section className="f-wrapper">
    <div className="f-container flexCenter">
      <div className="contact flexColStart">
          <h4 className='secondaryText'>Contact</h4>
          <span><strong>Email:</strong>dragonflytechclub@gmail.com</span>
          <span> <strong>Phone:</strong>+91 9226712049</span>
          <span> <strong>Address:</strong>Chhatrapati Shivaji Maharaj University, Navi Mumbai</span>
      </div>
      <div className="Communities flexColStart">
         <h4 className='secondaryText'>Communities</h4>
         <a href="#"><span>Programming Languages</span></a>
         <a href="#"><span>Al & ML</span></a>
         <a href="#"><span>Data Science</span></a>
         <a href="#"><span>App Development</span></a>
         <a href="#"><span>Web Development</span></a>
         <a href="#"><span>Game Development</span></a>
         <a href="#"><span>Cyber Security</span></a>
      </div>
    </div>
  </section>
  )
}

export default Footer  

