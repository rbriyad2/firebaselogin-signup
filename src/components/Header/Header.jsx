import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/images/logo2.png';

const Header = () => {
  return (
    <div className="mainheader">
      <div className="container">
        <nav className="header">
          <div className="logo">
            <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
