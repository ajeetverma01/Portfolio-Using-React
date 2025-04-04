import React from "react";
import "./CSS/Hero.css";
import { Link } from "react-router-dom";
import profileImg from "../assets/logo.png"; // Add your image inside "assets" folder

const Hero = () => {
  return (
    <>    <section className="hero">
      <div className="container">
      <div className="hero-image">
          <img src={profileImg} alt="Ajeet Verma" />
        </div>
        {/* Left Section - Text */}
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span>Ajeet Verma</span></h1>
          <p className="hero-subtitle">
            A passionate <strong>Software and Web Developer</strong> specialized in Java Full stack technology.
          </p>
          <div className="hero-buttons">
            <Link className="btn btn-warning btn-lg fw-bold shadow" to={"/projects"}>My Projects</Link>
            <Link className="btn btn-outline-light btn-lg fw-bold shadow" to={"/Contact"}>Contact Me</Link>
            
          </div>
        </div>

        {/* Right Section - Image */}
        
      </div>
    </section>
    </>

  );
};

export default Hero;
