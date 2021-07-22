import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo2.jpg'
import { FaCocktail } from 'react-icons/fa';

const Navbar = ()=> {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          {/* <img className="logo" src={logo} alt="coctail logo"/> */}
          <span className="drink-icon"><FaCocktail className="i-element"/></span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar