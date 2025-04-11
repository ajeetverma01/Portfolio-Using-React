import React from "react";
import "./CSS/contact.css";

const Contact = () => {
  return (
    <section className="container my-5 contact-section">
      <h2 className="text-center mb-4 contact-heading">📞 Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg border-0 p-4 text-center contact-card">
            <h5 className="fw-bold">Get in Touch</h5>
            <p className="text-muted">Feel free to reach out via email or connect on social media.</p>
            
            <div className="mt-4 contact-info">
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <strong>Email:</strong>{" "}
                <a href="mailto:av401402@gmail.com" className="contact-link">av401402@gmail.com</a>
              </p>
              <p>
                <i className="bi bi-phone-fill me-2"></i>
                <strong>Phone:</strong> +91 6389695460
              </p>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4 social-icons">
              <a href="https://www.linkedin.com/in/ajeetverma01" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-circle p-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/ajeetverma01" target="_blank" rel="noopener noreferrer" className="btn btn-dark rounded-circle p-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://instagram.com/ajeet_me" target="_blank" rel="noopener noreferrer" className="btn btn-info text-white rounded-circle p-3">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
