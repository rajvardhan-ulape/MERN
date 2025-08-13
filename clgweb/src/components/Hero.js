import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Welcome to DYPCET</h1>
        <p>Empowering Education for the Future</p>
        <div className="hero-buttons">
          <a href="/apply" className="btn">Apply Now</a>
          <a href="/brochure.pdf" className="btn btn-outline">Download Brochure</a>
        </div>
      </div>
    </section>
  );
}
