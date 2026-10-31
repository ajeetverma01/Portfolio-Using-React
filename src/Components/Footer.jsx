
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CSS/footer.css";

const Footer = () => {
  const location = useLocation();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "bi-github",
      url: "https://github.com/ajeetverma01",
    },
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://linkedin.com/in/ajeetverma01",
    },
    {
      name: "Instagram",
      icon: "bi-instagram",
      url: "https://instagram.com/ajeetverma01",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Ajeet<span>Verma</span><small>.dev</small>
            </Link>

            <p>
              Building practical applications and exploring
              modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-navigation">
            <span className="footer-label">QUICK LINKS</span>

            <div className="footer-links">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={
                    location.pathname === link.path ? "footer-active" : ""
                  }
                >
                  {link.name}
                </Link>
              ))}

            
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-connect">
            <span className="footer-label">CONNECT</span>

            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Ajeet Verma. All rights reserved.
          </p>

          <p className="footer-made">
            Designed & built with <span>♥</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
