import React, { useState } from "react";
import "./CSS/contact.css";

const Contact = () => {
  const socials = [
    { name: "LinkedIn", icon: "bi-linkedin", url: "https://www.linkedin.com/in/ajeetverma01", color: "#0a66c2" },
    { name: "GitHub", icon: "bi-github", url: "https://github.com/ajeetverma01", color: "#24292e" },
    { name: "Instagram", icon: "bi-instagram", url: "https://instagram.com/ajee.t__", color: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" },
    { name: "LeetCode", icon: "bi-code-slash", url: "https://leetcode.com/u/ajeet_verma01", color: "#f89f1b" },
    { name: "HackerRank", icon: "bi-terminal", url: "https://www.hackerrank.com/ajeetverma01", color: "#1ba94c" },
    { name: "Threads", icon: "bi-at", url: "https://www.threads.net/@ajee.t__", color: "#000" },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [modalMessage, setModalMessage] = useState(""); // Message text
  const [modalType, setModalType] = useState(""); // "success" or "error"
  const [showModal, setShowModal] = useState(false); // modal visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": "contact", ...formData }).toString(),
    })
      .then(() => {
        setModalMessage("Thanks! Your message has been sent.");
        setModalType("success");
        setShowModal(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setModalMessage("Oops! Something went wrong. Please try again.");
        setModalType("error");
        setShowModal(true);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="contact-container py-5">
      <div className="text-center mb-5 animate-fadeIn">
        <h2 className="contact-title">Let’s Team Up!</h2>
        <p className="contact-subtitle">Got something cool in mind? Let’s code it into existence.</p>
      </div>

      <div className="container contact-content">
        {/* Left Side: Contact Info */}
        <div className="contact-card animate-float shadow-lg p-4 text-center">
          <h4 className="fw-bold mb-3">Reach Out Anytime</h4>
          <p>
            <i className="bi bi-envelope-fill me-2 text-info"></i>
            <a href="mailto:av401402@gmail.com" className="contact-link">av401402@gmail.com</a>
          </p>
          <p>
            <i className="bi bi-phone-fill me-2 text-success"></i> +91 6389695460
          </p>
          <div className="social-links d-flex flex-wrap justify-content-center gap-3 mt-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ background: social.color.startsWith("linear") ? social.color : social.color }}
                title={social.name}
              >
                <i className={`bi ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="form-card shadow-lg p-4 animate-float">
          <h4 className="fw-bold mb-3 text-center">Send Your Thoughts</h4>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="form-control custom-input"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"    
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="form-control custom-input"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"  
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="form-control custom-input"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"  
              ></textarea>
            </div>

            <button type="submit" className="btn btn-send w-100">Send Message</button>
          </form>
        </div>
      </div>

      {/* Modal Alert */}
      {showModal && (
        <div className="modal-overlay">
          <div className={`modal-box ${modalType}`}>
            <p>{modalMessage}</p>
            <button className="modal-ok-btn" onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
