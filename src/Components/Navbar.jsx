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
            Ajeet Verma.dev
          </Link>

          <button
            className={`navbar-toggler ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>


          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li><Link to="/" className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`} onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active-link" : ""}`} onClick={handleLinkClick}>About</Link></li>
              <li><Link to="/projects" className={`nav-link ${location.pathname === "/projects" ? "active-link" : ""}`} onClick={handleLinkClick}>Projects</Link></li>
              
              <li><Link to="/skills" className={`nav-link ${location.pathname === "/skills" ? "active-link" : ""}`} onClick={handleLinkClick}>Skills</Link></li>
              <li><Link to="/experience" className={`nav-link ${location.pathname === "/experience" ? "active-link" : ""}`} onClick={handleLinkClick}>Experience</Link></li>
              <li><Link to="/certificate" className={`nav-link ${location.pathname === "/certificate" ? "active-link" : ""}`} onClick={handleLinkClick}>Certificates</Link></li>
              <li><Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`} onClick={handleLinkClick}>Contact</Link></li>
              <Link
                to="/resume"
                className= {`nav-link resume-link ${location.pathname === "/resume" ? "active-link" : ""}`}

              >
                Resume
              </Link>


            </ul>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;
