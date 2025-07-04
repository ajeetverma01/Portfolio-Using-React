import React, { useEffect } from "react";
import "./CSS/hero.css";
import { Link } from "react-router-dom";
import profileImg from "../assets/logo.png";

const Hero = () => {
  useEffect(() => {
    const content = document.querySelector(".hero-content");
    const image = document.querySelector(".hero-image");

    setTimeout(() => {
      content.classList.add("animated");
      image.classList.add("animated");
    }, 1000); // Matches animation duration
  }, []);

  return (
    <section className="hero">
      <div className="container">
        {/* Right Section - Image */}
        <div className="hero-image">
          <img src={profileImg} alt="Ajeet Verma" />
        </div>

        {/* Left Section - Text */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <strong>Ajeet Verma</strong>
          </h1>
          <p className="hero-subtitle">
            A passionate <span>Software and Web Developer</span> specialized in Java Full Stack technology.
          </p>
          <div className="hero-buttons">
            <Link className="btn btn-warning btn-lg fw-bold shadow" to="/projects">
              My Projects
            </Link>
            <Link className="btn btn-outline-light btn-lg fw-bold shadow contact-btn" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
