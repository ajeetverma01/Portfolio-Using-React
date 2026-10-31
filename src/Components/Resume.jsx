import React from "react";
import "./CSS/resume.css";

const RESUME_URL = "/certificates/Ajeet_Verma_Resume.pdf";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">

        <div className="resume-header">
          <span className="resume-eyebrow">MY PROFILE</span>

          <h1 className="resume-title">
            My <span>Resume</span>
          </h1>

          <p className="resume-subtitle">
            Explore my professional background, technical skills,
            education, and experience.
          </p>
        </div>

        <div className="resume-viewer">

          <div className="viewer-header">
            <div className="window-controls">
              <span className="control-dot red"></span>
              <span className="control-dot yellow"></span>
              <span className="control-dot green"></span>
            </div>

            <span className="file-name">
              <i className="bi bi-file-earmark-pdf"></i>
              Ajeet_Verma_Resume.pdf
            </span>

            <span className="file-type">PDF</span>
          </div>

          <div className="pdf-container">
            <iframe
              src={RESUME_URL}
              title="Ajeet Verma Resume"
              className="resume-pdf"
            />
          </div>

        </div>

        <div className="resume-actions">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn view-btn"
          >
            <i className="bi bi-eye"></i>
            View Fullscreen
          </a>

          <a
            href={RESUME_URL}
            download="Ajeet_Verma_Resume.pdf"
            className="resume-btn download-btn"
          >
            <i className="bi bi-download"></i>
            Download Resume
          </a>
        </div>

        <p className="resume-note">
          <i className="bi bi-info-circle"></i>
          For the best viewing experience, you can open the PDF in a new tab.
        </p>

      </div>
    </section>
  );
};

export default Resume;