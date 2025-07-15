import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-zinc-900">
      <div className="logo-container">
        <Link to="">
        <button className='logo-btn'>
        <img src="/logoo.png" alt="Japanee Logo" className="logo-image" />
        </button>
        </Link>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
      
        <li><a href="/Products">Products</a></li>
       
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Service</a></li>
        <li><a href="/#contact">Contact Us</a></li>
        <li>
       <Link to="/cart">
      <img src="/Cart.png" alt="Cart" className="cart-icon rounded-full" />
       </Link>
      </li>


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