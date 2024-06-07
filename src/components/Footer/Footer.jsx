import React from 'react'
import './footer.css'
const Footer = () => {
  return (
  <section className="f-wrapper">
    <div className="f-container ">
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
      <div className="scanner">
        <h4 className="secondaryText">
          Scan For Events
        </h4>
        <img src="2.png" height={100}   width={100} alt="" />
      </div>
    </div>
    <br />
    <hr />
     <h5 className='copyright'>2024@ All Copyrights Reserved</h5>
  </section>
  )
}

export default Footer  

