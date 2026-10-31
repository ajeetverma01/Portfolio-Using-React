
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineArrowDown } from "react-icons/hi";

import "./CSS/hero.css";
import profileImg from "../assets/1000221431.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">

        {/* Left: Introduction */}
        <div className="hero-content">

          <div className="hero-status">
            <span className="status-dot"></span>
            <span>Available for development opportunities</span>
          </div>

          <p className="hero-greeting">
            HELLO, I'M
          </p>

          <h1 className="hero-title">
            Ajeet <span>Verma.</span>
          </h1>

          <h2 className="hero-role">
            Java Full Stack Developer <span>&</span> Software Developer
          </h2>

          <p className="hero-description">
            I build web applications using Java, Spring Boot, React,
            and modern web technologies. I enjoy turning ideas into
            practical solutions while continuously improving my
            development skills.
          </p>

          <div className="hero-tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>PostgreSQL</span>
            <span>Spring AI</span>
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="hero-btn hero-btn-primary">
              View Projects
              <FaArrowRight />
            </Link>

            <Link to="/contact" className="hero-btn hero-btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="hero-socials">
            <span className="social-label">FIND ME ON</span>

            <a
              href="https://github.com/ajeetverma01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ajeetverma01/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

        </div>

        {/* Right: Profile */}
        <div className="hero-visual">

          <div className="hero-image-wrapper">
            <div className="hero-image-border"></div>

            <div className="hero-image">
              <img src={profileImg} alt="Ajeet Verma" />
            </div>

            <div className="hero-image-decoration">
              <FaCode />
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-icon">
              <FaCode />
            </span>

            <div>
              <strong>Developer</strong>
              <span>Building & Learning</span>
            </div>
          </div>

        </div>

      </div>

      <Link to="/about" className="hero-scroll">
        <span>CLICK TO EXPLORE MORE</span>
        <HiOutlineArrowDown />
      </Link>

    </section>
  );
};

export default Hero;
