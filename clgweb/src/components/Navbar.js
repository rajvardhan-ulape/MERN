import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrHbxrzDTwiOlGkCNOLuMuQD5pu9t4SqTLw&s" 
          alt="College Logo" 
        />
        <h3>DYPCET</h3>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/apply">
        <button className="apply-btn">Apply Now</button>
      </Link>
    </nav>
  );
}

export default Navbar;
