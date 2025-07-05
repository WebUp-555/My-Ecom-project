import React from 'react';
import './Navbar.css'
import { FaSignInAlt } from 'react-icons/fa';
import{Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-zinc-950 '>
      <h2 className="logo  font-family: 'Sawarabi Gohthic'">
        Japa<span className="red  font-family: 'Sawarabi Gohthic'" >nee</span>
      </h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <Link to="/signin">
      <button className="sign-in-btn ">
        <FaSignInAlt style={{ marginRight: '8px' }} />
        Sign In
      </button>
      </Link>
    </nav>
  );
};

export default Navbar;