import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import JapaneeLogo from '../../Components/JapaneeLogo/JapaneeLogo'; // Adjust the path if your structure is different
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar bg-zinc-950'>
      <div className="logo-container">
        <JapaneeLogo />
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      <Link to="/signin">
        <button className="sign-in-btn">
          <FaSignInAlt style={{ marginRight: '8px' }} />
          Sign In
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;