import React from "react";
import { Link } from "react-router-dom";
import "./Programs.css";

function Programs() {
  return (
    <div className="programs">
      <h2>Our Departments</h2>
      <div className="program-grid">
        <Link to="/departments/computer-science" className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Alumni-Meet-2-scaled.jpg" 
            alt="Computer Science"
          />
          <h3>Computer Science</h3>
        </Link>

        <Link to="/departments/mechanical" className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Industry-Visit-to-Kasturi-Foundry.jpg" 
            alt="Mechanical"
          />
          <h3>Mechanical</h3>
        </Link>

        <Link to="/departments/electrical" className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/3-1-1-1-scaled.jpg" 
            alt="Electrical"
          />
          <h3>Electrical</h3>
        </Link>

        <Link to="/departments/chemical" className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Industry-Visit-to-Kasturi-Foundry.jpg" 
            alt="Chemical"
          />
          <h3>Chemical</h3>
        </Link>

        <Link to="/departments/architecture" className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Industry-Visit-to-Kasturi-Foundry.jpg" 
            alt="Architecture"
          />
          <h3>Architecture</h3>
        </Link>

        <Link to="/departments/civil" className="program-card">
          <img
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/your-civil-image.jpg"
            alt="Civil"
          />
          <h3>Civil</h3>
        </Link>
      </div>
    </div>
  );
}

export default Programs;
