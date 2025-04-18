import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CSS/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false); // modal toggle
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  


  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            Ajeet Verma
          </Link>

          <button
            className={`navbar-toggler ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li><Link to="/" className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`} onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active-link" : ""}`} onClick={handleLinkClick}>About</Link></li>
              <li><Link to="/projects" className={`nav-link ${location.pathname === "/projects" ? "active-link" : ""}`} onClick={handleLinkClick}>Projects</Link></li>
              <li><Link to="/certificate" className={`nav-link ${location.pathname === "/certificate" ? "active-link" : ""}`} onClick={handleLinkClick}>Certificate</Link></li>
              <li><Link to="/skills" className={`nav-link ${location.pathname === "/skills" ? "active-link" : ""}`} onClick={handleLinkClick}>Skills</Link></li>
              <li><Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`} onClick={handleLinkClick}>Contact</Link></li>
              <a href="/certificates/Main-Resume.pdf" className="nav-link resume-link">
              Resume
            </a>
            </ul>
          </div>
        </div>
      </nav>

        
    </>
  );
};

export default Navbar;
