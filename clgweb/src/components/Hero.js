import React from "react";
import "./Hero.css";
import campusImg from "../images/campus.jpg";


function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${campusImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px"
      }}
    >
      <h1>Welcome to Our Campus</h1>
    </div>
  );
}

export default Hero;
