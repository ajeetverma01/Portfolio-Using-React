import React, { useState, useEffect } from "react";
import "./CSS/resume.css";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`resume-section ${isVisible ? 'visible' : ''}`} id="resume">
      <div className="resume-container">
        {/* Animated Background Elements */}
        <div className="background-elements">
          <div className="glow-circle circle-1"></div>
          <div className="glow-circle circle-2"></div>
          <div className="glow-circle circle-3"></div>
        </div>

        <div className="resume-content">
          {/* Header with animated title */}
          <div className="resume-header">
            <h2 className="resume-title">
              <span className="title-text">My Resume</span>
              <span className="title-glow"></span>
            </h2>
            <p className="resume-subtitle">
              You can view or download my latest resume below
            </p>
          </div>

          {/* Main Resume Card with Glassmorphism */}
          <div className="resume-card">
            <div className="card-glow"></div>
            
            {/* PDF Viewer */}
            <div className="resume-viewer">
              <div className="viewer-header">
                <div className="window-controls">
                  <span className="control-dot red"></span>
                  <span className="control-dot yellow"></span>
                  <span className="control-dot green"></span>
                </div>
                <span className="file-name">Ajeet_Verma_Resume.pdf</span>
              </div>
              
              <div className="pdf-container">
                <iframe
                  src="/certificates/Main-Resume.pdf"
                  title="Ajeet Verma Resume"
                  className="resume-pdf"
                />
                <div className="pdf-overlay"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="resume-actions">
              <a
                href="/certificates/Main-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn view-btn"
              >
                <span className="btn-icon">👁️</span>
                View Fullscreen
                <span className="btn-glow"></span>
              </a>
              
              <a
                href="/certificates/Main-Resume.pdf"
                download="Ajeet_Verma_Resume.pdf"
                className="action-btn download-btn"
              >
                <span className="btn-icon">📥</span>
                Download Resume
                <span className="btn-glow"></span>
              </a>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">💼</div>
              <h4>Professional</h4>
              <p>Updated regularly</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📄</div>
              <h4>PDF Format</h4>
              <p>Easy to view & print</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🔄</div>
              <h4>Latest Version</h4>
              <p>Current as of 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;