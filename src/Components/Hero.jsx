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

<span className="particle"><i className="fa fa-code"></i></span>
<span className="particle"><i className="fa fa-laptop-code"></i></span>
<span className="particle"><i className="fa fa-database"></i></span>
<span className="particle"><i className="fa fa-network-wired"></i></span>
<span className="particle"><i className="fa fa-terminal"></i></span>
<span className="particle"><i className="fa fa-mobile-alt"></i></span>

      <div className="container">
        {/* Right Section - Image */}
        <div className="hero-image">
          <img src={profileImg} alt="Ajeet Verma" />
        </div>

        {/* Left Section - Text */}
        <div className="hero-content animated">
          <h1 className="hero-title">
            Hi, I'm <span>Ajeet Verma</span>
          </h1>
          <p className="hero-subtitle hero-paragraph">
            I build elegant, scalable, and user-focused applications using Java Full Stack and MERN technologies. Focused on performance, design, and solving real-world problems.
          </p>
          <div className="hero-buttons">
            <Link className="btn btn-primary" to="/projects">View Projects</Link>
            <Link className="btn btn-outline" to="/about">About Me</Link>
            <Link className="btn btn-primary" to="/contact">Let's Talk</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
