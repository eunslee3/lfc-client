import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <NavLink href="/" className="logo">
            <img className='nav-logo' src={process.env.PUBLIC_URL + '/logo.jpg'} alt='lawrence fight club logo'/>
            <p>Lawrence Fight Club</p>
        </NavLink>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <NavLink className='navlink'>
            <p href="/">Home</p>
          </NavLink>
          <NavLink className='navlink'>
            <p href="/programs">Programs</p>
          </NavLink>
          <NavLink className='navlink'>
            <p href="/about">Instructors</p>
          </NavLink>
          <NavLink className='navlink'>
            <p href="/about">Schedule</p>
          </NavLink>
          <NavLink className='navlink'>
            <p href="/contact">Contact Us</p>
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar