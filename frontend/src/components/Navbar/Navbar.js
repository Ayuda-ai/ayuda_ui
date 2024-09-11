import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate('/');
    // remove user from session and redirect to /
    sessionStorage.removeItem('user');
  };

  return (
    <nav className="navbar">
      <Link className='navbar-link' to="/">
        <div className="navbar-logo">
          <img src="ayuda_logo.png" alt="logo" className="logo"/>
          <span>Ayuda</span>
        </div>
      </Link>
        <div className="navbar-links">
          <a href="/about">About</a>
          {isAuthenticated && (
          <Link onClick={handleLogout} className="navbar-logout">Logout</Link>
        )}
        </div>
    </nav>
  );
}

export default Navbar;
