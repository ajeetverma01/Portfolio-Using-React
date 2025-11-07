import React from "react";
import "./CSS/contact.css";

const Contact = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/ajeetverma01",
      color: "#0a66c2",
    },
    {
      name: "GitHub",
      icon: "bi-github",
      url: "https://github.com/ajeetverma01",
      color: "#24292e",
    },
    {
      name: "Instagram",
      icon: "bi-instagram",
      url: "https://instagram.com/ajee.t__",
      color:
        "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    },
    {
      name: "LeetCode",
      icon: "bi-code-slash",
      url: "https://leetcode.com/u/ajeet_verma01",
      color: "#f89f1b",
    },
    {
      name: "HackerRank",
      icon: "bi-terminal",
      url: "https://www.hackerrank.com/ajeetverma01",
      color: "#1ba94c",
    },
    {
      name: "Threads",
      icon: "bi-at",
      url: "https://www.threads.net/@ajee.t__",
      color: "#000",
    },
  ];

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
            <a href="mailto:av401402@gmail.com" className="contact-link">
              av401402@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-phone-fill me-2 text-success"></i>
            +91 6389695460
          </p>

          <div className="social-links d-flex flex-wrap justify-content-center gap-3 mt-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{
                  background:
                    social.color.startsWith("linear") ? social.color : social.color,
                }}
                title={social.name}
              >
                <i className={`bi ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Static Form */}
        <div className="form-card shadow-lg p-4 animate-float">
          <h4 className="fw-bold mb-3 text-center">Send Your Thoughts</h4>
          <form className="contact-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control custom-input"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control custom-input"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="button" className="btn btn-send w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
