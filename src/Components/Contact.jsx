
import React, { useState } from "react";
import "./CSS/contact.css";

const Contact = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/ajeetverma01",
    },
    {
      name: "GitHub",
      icon: "bi-github",
      url: "https://github.com/ajeetverma01",
    },
    {
      name: "Instagram",
      icon: "bi-instagram",
      url: "https://instagram.com/ajeetverma01",
    },
    {
      name: "LeetCode",
      icon: "bi-code-slash",
      url: "https://leetcode.com/u/ajeet_verma01",
    },
    {
      name: "HackerRank",
      icon: "bi-terminal",
      url: "https://www.hackerrank.com/ajeetverma01",
    },
    {
      name: "Threads",
      icon: "bi-at",
      url: "https://www.threads.net/@ajeetverma01",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({
    visible: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setModal({
        visible: true,
        type: "success",
        message: "Thanks for reaching out! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setModal({
        visible: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModal({
      visible: false,
      type: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        {/* Section Heading */}
        <div className="contact-heading">
          <span className="contact-eyebrow">
            <span className="status-dot"></span>
            GET IN TOUCH
          </span>

          <h2>
            Let's start a <span>conversation.</span>
          </h2>

          <p>
            Have a project idea, collaboration opportunity, or just want
            to connect? Feel free to send me a message.
          </p>
        </div>

        {/* Main Contact Layout */}
        <div className="contact-grid">

          {/* Contact Information */}
          <aside className="contact-info">
            <div>
              <span className="contact-label">CONTACT INFORMATION</span>

              <h3>
                Let's connect and build something meaningful.
              </h3>

              <p className="contact-description">
                I'm interested in software development, Java Full Stack
                opportunities, and learning through real-world projects.
              </p>
            </div>

            <div className="contact-details">
              <a
                href="mailto:i.ajeetverma01@gmail.com"
                className="contact-detail"
              >
                <span className="detail-icon">
                  <i className="bi bi-envelope"></i>
                </span>

                <span>
                  <small>Email me</small>
                  <strong>i.ajeetverma01@gmail.com</strong>
                </span>

                <i className="bi bi-arrow-up-right detail-arrow"></i>
              </a>

              <a
                href="tel:+916389695460"
                className="contact-detail"
              >
                <span className="detail-icon">
                  <i className="bi bi-telephone"></i>
                </span>

                <span>
                  <small>Call me</small>
                  <strong>+91 6389695460</strong>
                </span>

                <i className="bi bi-arrow-up-right detail-arrow"></i>
              </a>
            </div>

            <div className="social-section">
              <span className="contact-label">FIND ME ONLINE</span>

              <div className="social-grid">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <i className={`bi ${social.icon}`}></i>
                    <span>{social.name}</span>
                    <i className="bi bi-arrow-up-right social-arrow"></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-availability">
              <span className="availability-dot"></span>
              Open to meaningful connections
            </div>
          </aside>

          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="form-heading">
              <span className="contact-label">SEND A MESSAGE</span>
              <h3>Tell me what's on your mind.</h3>
              <p>I'll try to get back to you as soon as possible.</p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />

              <div className="honeypot-field" aria-hidden="true">
                <label>
                  Don't fill this out:
                  <input name="bot-field" tabIndex="-1" />
                </label>
              </div>

              <div className="form-row">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </div>

              <div className="form-row">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </div>

              <div className="form-row">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your idea..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>

                <i className="bi bi-arrow-up-right"></i>
              </button>

              <p className="form-note">
                <i className="bi bi-shield-check"></i>
                Your information will only be used to respond to your message.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {modal.visible && (
        <div
          className="contact-modal-overlay"
          onClick={closeModal}
        >
          <div
            className={`contact-modal ${modal.type}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-message"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icon">
              <i
                className={
                  modal.type === "success"
                    ? "bi bi-check-lg"
                    : "bi bi-exclamation-lg"
                }
              ></i>
            </div>

            <h3>
              {modal.type === "success" ? "Message Sent!" : "Submission Failed"}
            </h3>

            <p id="contact-modal-message">{modal.message}</p>

            <button onClick={closeModal}>
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
