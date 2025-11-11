import React from "react";
import "./CSS/footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-content">
          <h2>Ajeet Verma</h2>
          <p>Full Stack Developer | Java Programmer</p>
        </div>

        {/* Center Links */}
        <div className="footer-links">
          <Link to="/" className={`nav-link ${currentPath === "/" ? "active-link" : ""}`}>Home</Link>
          <Link to="/about" className={`nav-link ${currentPath === "/about" ? "active-link" : ""}`}>About</Link>
          <Link to="/projects" className={`nav-link ${currentPath === "/projects" ? "active-link" : ""}`}>Projects</Link>
          <Link to="/skills" className={`nav-link ${currentPath === "/skills" ? "active-link" : ""}`}>Skills</Link>
          <Link to="/skills" className={`nav-link ${currentPath === "/skills" ? "active-link" : ""}`}>Resume</Link>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <a href="https://github.com/ajeetverma01" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/ajeetverma01" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/ajee.t__" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Ajeet Verma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
