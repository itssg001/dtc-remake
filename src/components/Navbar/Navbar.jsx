import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar-wrapper  flexCenter'>
       <div className="navbar-container">
            <ul className="nav flexCenter">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/Signup"><button>login</button></Link></li>
            </ul>
       </div>
    </div>
  )
}
export default  Navbar