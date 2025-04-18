import React from "react";
import "./CSS/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo & Info */}
        <div className="footer-content">
          <h2>Ajeet Verma</h2>
          <p>Full Stack Developer | Java Programmer</p>
        </div>

        {/* Center Section: Quick Links */}
        <div className="footer-links">
          <Link to={"/"} className="nav-link">Home</Link>
          <Link to={"/about"} className="nav-link">About</Link>
          <Link to={"/projects"} className="nav-link">Projects</Link>
          <Link to={"/skills"} className="nav-link">Skills</Link>
          <Link to={"/certificate"} className="nav-link">Certificates</Link>
          <Link to={"/contact"} className="nav-link">Contact</Link>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="footer-social">
          <a href="https://github.com/ajeetverma01" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/ajeetverma01" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/ajeet_me" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <br />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Ajeet Verma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
