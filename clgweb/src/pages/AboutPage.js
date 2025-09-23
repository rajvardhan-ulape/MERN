import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      {/* Banner Image */}
      <div className="banner">
        <img
          src="https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/t1538554792_OJmiiK8OlI-1.jpg"
          alt="D. Y. Patil College"
          className="banner-image"
        />
      </div>

      <div className="content">
        <h1>About Us</h1>
        <p>
          D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur is a self-financing Autonomous Institute established in 1984 under the visionary leadership of Padmashree Dr. D. Y. Patil, Former Governor of Tripura, Bihar and West Bengal.
        </p>
        <p>
          UGC, New Delhi and Shivaji University, Kolhapur conferred Autonomous status to the Institute in 2020. The Institute is approved by AICTE, New Delhi, Government of Maharashtra, and affiliated to Shivaji University, Kolhapur. It is accredited by NAAC, Bangalore with ‘A’ grade (CGPA-3.08) and offers quality technical education for the past 41 years.
        </p>
        <p>
          The Institute offers eight UG programmes and two PG programmes. Two departments are recognized as research centres by Shivaji University, Kolhapur. The Architecture department is ranked among the top 13 Architecture Colleges in India by Outlook India and 21st by India Today in 2021. Three UG programmes (CSE, E&TC, and Mechanical Engineering) are NBA accredited from 2022–2025.
        </p>

        <h2>Salient Features</h2>
        <ul>
          <li>State-of-the-art infrastructure</li>
          <li>WI-FI enabled campus</li>
          <li>Laboratories equipped with latest technologies</li>
          <li>24 hours Internet connectivity</li>
          <li>Industry-backed NEP 2020 Curriculum</li>
          <li>MoUs with reputed Industries and Academic Institutes</li>
          <li>Excellent Placement Record</li>
          <li>10000+ Worldwide Alumni network</li>
          <li>Annual Student Festivals and vibrant Campus Life</li>
          <li>Bus facility available</li>
          <li>All Govt. Scholarships available</li>
          <li>Professional Chapters and Clubs</li>
          <li>Finishing School Trainings</li>
          <li>Social Internships</li>
          <li>Dedicated Professional Internship track of 6 months</li>
          <li>Industry visits and expert interaction</li>
          <li>Capstone projects</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
