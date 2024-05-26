import React from 'react'
import './navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar-wrapper  flexCenter'>
       <div className="navbar-container">
            <ul className="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
       </div>
    </div>
  )
}
export default  Navbar