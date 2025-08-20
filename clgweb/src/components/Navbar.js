import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrHbxrzDTwiOlGkCNOLuMuQD5pu9t4SqTLw&s" 
          alt="College Logo" 
        />
        <h3>DYPCET</h3>
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="apply-btn">Apply Now</button>
    </nav>
  );
}

export default Navbar;
