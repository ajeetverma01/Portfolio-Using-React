import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CSS/navbar.css";
import Swal from "sweetalert2";
import logo from "../assets/logo.png"; // Ensure your logo is inside the "assets" folder

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault(); // Prevent navigation
    Swal.fire({
      title: "🚀 Coming Soon!",
      text: "My resume link is under process. Stay tuned!",
      icon: "info",
      confirmButtonText: "Okay",
      confirmButtonColor: "#ffcc00",
      background: "#1b1b1b",
      color: "#fff",
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Logo & Name */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
          Ajeet Verma
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`navbar-toggler ${menuOpen ? "open" : ""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✖" : "☰"} {/* Toggle between Hamburger and Cross */}
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`} onClick={() => setMenuOpen(true)}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active-link" : ""}`} onClick={() => setMenuOpen(true)}>About</Link>
            <Link to="/projects" className={`nav-link ${location.pathname === "/projects" ? "active-link" : ""}`} onClick={() => setMenuOpen(true)}>Projects</Link>
            <Link to="/certificate" className={`nav-link ${location.pathname === "/certificate" ? "active-link" : ""}`} onClick={() => setMenuOpen(true)}>Certificate</Link>
            <Link to="/skills" className={`nav-link ${location.pathname === "/skills" ? "active-link" : ""}`} onClick={() => setMenuOpen(true)}>Skills</Link>
            <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`} onClick={() => setMenuOpen(true)}>Contact</Link>
            <a href="#" className="nav-link resume-link" onClick={handleResumeClick}>
              Resume
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
