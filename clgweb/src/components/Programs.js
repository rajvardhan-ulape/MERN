import React from "react";
import "./Programs.css";

export default function Programs() {
  const programs = [
    { title: "Computer Engineering", image: "/images/computer.jpg" },
    { title: "Mechanical Engineering", image: "/images/mechanical.jpg" },
    { title: "Electronics Engineering", image: "/images/electronics.jpg" },
  ];

  return (
    <section className="programs">
      <h2>Our Programs</h2>
      <div className="program-grid">
        {programs.map((prog, i) => (
          <div key={i} className="program-card">
            <img src={prog.image} alt={prog.title} />
            <h3>{prog.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
