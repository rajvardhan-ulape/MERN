import React from "react";
import "./Programs.css";

function Programs() {
  return (
    <div className="programs">
      <h2>Our Departments</h2>
      <div className="program-grid">
        <div className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Alumni-Meet-2-scaled.jpg" 
            alt="Computer Science" 
          />
          <h3>Computer Science</h3>
        </div>

        <div className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Industry-Visit-to-Kasturi-Foundry.jpg" 
            alt="Mechanical" 
          />
          <h3>Mechanical Engineering</h3>
        </div>

        <div className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/3-1-1-1-scaled.jpg" 
            alt="Electrical"
          />
          <h3>Electrical Engineering</h3>
        </div>

        <div className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/IMG-20250313-WA0026.jpg" 
            alt="Chemical" 
          />
          <h3>Chemical Engineering</h3>
        </div>

        <div className="program-card">
          <img 
            src="https://doak.dypgroup.edu.in/wp-content/uploads/2020/08/slide-5.jpg" 
            alt="Architecture" 
          />
          <h3>Architecture</h3>
        </div>
        <div className="program-card">
          <img 
            src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/civil1-scaled.jpg" 
            alt="Civil" 
          />
          <h3>Civil Engineering </h3>
        </div>
      </div>
    </div>
  );
}

export default Programs;
