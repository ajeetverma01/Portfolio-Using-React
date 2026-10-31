import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CSS/navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Certificates", path: "/certificate" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar-main ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        <Link to="/" className="navbar-logo">
          Ajeet<span>Verma</span><small>.dev</small>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`navbar-navigation ${menuOpen ? "menu-visible" : ""}`}
          id="main-navigation"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={
                    location.pathname === link.path ? "nav-active" : ""
                  }
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="resume-nav-item">
              <Link
                to="/resume"
                className={`resume-nav ${
                  location.pathname === "/resume" ? "nav-active" : ""
                }`}
              >
                Resume <i className="bi bi-arrow-up-right"></i>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;