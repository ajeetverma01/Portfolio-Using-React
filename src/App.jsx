import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/scrollToTop";
import Certificate from "./Components/Certificate";
import Resume from "./Components/Resume";
import Experience from "./Components/Experience";
import SEO from "./Components/SEO";


function SEOex() {
  const location = useLocation();

  useEffect(() => {
    let title = "Ajeet Verma | Portfolio";
    let desc = "Portfolio of Ajeet Verma — Web Developer skilled in React, Node.js, Java, and full-stack development.";

    switch (location.pathname) {
      case "/about":
        title = "About | Ajeet Verma";
        break;
      case "/projects":
        title = "Projects | Ajeet Verma";
        break;
      case "/skills":
        title = "Skills | Ajeet Verma";
        break;
      case "/certificate":
        title = "Certificates | Ajeet Verma";
        break;
      case "/contact":
        title = "Contact | Ajeet Verma";
        break;
      case "/resume":
        title = "Resume | Ajeet Verma";
        break;
      default:
        title = "Ajeet Verma | Portfolio";
    }

    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
  }, [location]);

  return null;
}

// ----------------------
// Main App
// ----------------------
function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEO/>
      <SEOex />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
