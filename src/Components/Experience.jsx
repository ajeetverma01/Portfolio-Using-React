import React from "react";

const Experience = () => {
  // Utility function (keep it above your component or in utils)
  function getExperienceDuration(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    let months =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());

    // Adjust if the current day is before the joining day
    if (now.getDate() < start.getDate()) {
      months--;
    }

    if (months <= 0) return "< 1 month";
    if (months === 1) return "1 month";
    return `${months} months`;
  }

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="content-wrapper">
          <div className="header-section">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              My professional journey and continuous learning path
            </p>
          </div>

          <div className="timeline-wrapper">
            {/* TCS Experience - Current */}
            <div className="timeline-block">
              <div className="timeline-line active-line"></div>

              <div className="experience-item current-role">
                <div className="item-header">
                  <div className="logo-container">
                    <div className="company-logo tcs-logo">
                      <span className="logo-letter">TCS</span>
                      <div className="logo-border"></div>
                    </div>

                    <div className="current-indicator">
                      <span className="indicator-dot"></span>
                      <span className="indicator-text">Currently Working Here</span>
                    </div>
                  </div>

                  <div className="role-details">
                    <h3 className="role-title">Graduate Trainee – TCS Ignite</h3>
                    <p className="company-name">Tata Consultancy Services</p>

                    <div className="meta-info">
                      <span className="meta-item">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Jan 2026 – Present
                      </span>

                      <span className="meta-divider">•</span>

                      <span className="meta-item">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {getExperienceDuration("2026-01-21")}
                      </span>

                      <span className="meta-divider">•</span>

                      <span className="meta-item employment-badge">
                        Full Time · Chennai
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item-description">
                  <p>
                    Working as a Graduate Trainee in the TCS Ignite Program, gaining hands-on
                    exposure to enterprise software development, Java-based applications,
                    and modern web technologies.
                  </p>
                </div>
              </div>
            </div>


            {/* Wipro Experience */}
            <div className="timeline-block">
              <div className="timeline-line"></div>
              <div className="experience-item">
                <div className="item-header">
                  <div className="logo-container">
                    <div className="company-logo wipro-logo">
                      <span className="logo-letter">W</span>

                      <div className="logo-border"></div>
                    </div>
                  </div>
                  <div className="role-details">
                    <h3 className="role-title">Trainee – Digital Workspace Services</h3>
                    <p className="company-name">Wipro</p>
                    <div className="meta-info">
                      <span className="meta-item">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Aug 2025 - Sep 2025
                      </span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        2 months
                      </span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item employment-badge">Training · Full Time · Remote</span>
                    </div>
                  </div>
                </div>
                <div className="item-description">
                  <p>Completed training in enterprise IT solutions, application packaging, PowerShell automation, SCCM deployment, and workplace technologies.</p>
                </div>
              </div>
            </div>

            {/* Sipher Web Academy Internship */}
            <div className="timeline-block">
              <div className="timeline-line last-line"></div>
              <div className="experience-item">
                <div className="item-header">
                  <div className="logo-container">
                    <div className="company-logo sipher-logo">
                      <span className="logo-letter">S</span>
                      <div className="logo-border"></div>
                    </div>
                  </div>
                  <div className="role-details">
                    <h3 className="role-title">Frontend Development Intern</h3>
                    <p className="company-name">Sipher Web Academy</p>
                    <div className="meta-info">
                      <span className="meta-item">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        July 2025
                      </span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        10 days
                      </span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item employment-badge">Internship · Remote</span>
                    </div>
                  </div>
                </div>
                <div className="item-description">
                  <p>Completed intensive frontend development bootcamp covering HTML5, CSS3, and JavaScript fundamentals with hands-on project work.</p>
                </div>
              </div>
            </div>

            <div className="timeline-end">
              <div className="end-marker"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .experience-section {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%);
          padding: 100px 20px 80px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .experience-container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header */
        .header-section {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        /* Timeline */
        .timeline-wrapper {
          position: relative;
        }

        .timeline-block {
          position: relative;
          padding-left: 70px;
          padding-bottom: 50px;
        }

        .timeline-line {
          position: absolute;
          left: 31px;
          top: 60px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #334155, rgba(51, 65, 85, 0.3));
        }

        .timeline-line.active-line {
          background: linear-gradient(to bottom, #3b82f6, #334155);
        }

        .timeline-line.last-line {
          background: linear-gradient(to bottom, #334155, transparent);
        }

        /* Experience Item */
        .experience-item {
          position: relative;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(51, 65, 85, 0.6);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
          animation: slideIn 0.6s ease-out backwards;
        }

        .timeline-block:nth-child(1) .experience-item { animation-delay: 0.1s; }
        .timeline-block:nth-child(2) .experience-item { animation-delay: 0.2s; }
        .timeline-block:nth-child(3) .experience-item { animation-delay: 0.3s; }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .experience-item:hover {
          background: rgba(30, 41, 59, 0.7);
          border-color: rgba(71, 85, 105, 0.8);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: -70px;
          top: 32px;
          width: 14px;
          height: 14px;
          background: #334155;
          border: 3px solid #1e293b;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .experience-item:hover::before {
          background: #3b82f6;
          border-color: #1e40af;
          box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.2);
        }

        /* Current Role Styling */
        .current-role {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(30, 41, 59, 0.7);
        }

        .current-role::before {
          background: #3b82f6;
          border-color: #1e40af;
          box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.2);
          animation: currentPulse 2s ease-in-out infinite;
        }

        @keyframes currentPulse {
          0%, 100% {
            box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0.1);
          }
        }

        /* Item Header */
        .item-header {
          display: flex;
          gap: 24px;
          margin-bottom: 20px;
        }

        /* Logo Container */
        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .company-logo {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .experience-item:hover .company-logo {
          transform: scale(1.08);
        }

        .logo-letter {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          position: relative;
          z-index: 2;
        }

        .logo-border {
          position: absolute;
          inset: -2px;
          border-radius: 18px;
          background: conic-gradient(from 0deg, transparent, currentColor, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: rotate 3s linear infinite;
        }

        .experience-item:hover .logo-border {
          opacity: 0.6;
        }

        @keyframes rotate {
          to { transform: rotate(360deg); }
        }

        .tcs-logo {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          border: 2px solid rgba(59, 130, 246, 0.4);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
        }

        .tcs-logo .logo-border {
          color: #3b82f6;
        }

        .wipro-logo {
          background: linear-gradient(135deg, #6d28d9, #8b5cf6);
          border: 2px solid rgba(139, 92, 246, 0.4);
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
        }

        .wipro-logo .logo-border {
          color: #8b5cf6;
        }

        .sipher-logo {
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          border: 2px solid rgba(6, 182, 212, 0.4);
          box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
        }

        .sipher-logo .logo-border {
          color: #06b6d4;
        }

        /* Current Indicator */
        .current-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          white-space: nowrap;
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
          animation: dotPulse 2s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        .indicator-text {
          font-size: 0.75rem;
          font-weight: 600;
          color: #93c5fd;
          letter-spacing: 0.3px;
        }

        /* Role Details */
        .role-details {
          flex: 1;
        }

        .role-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .company-name {
          font-size: 1.05rem;
          color: #cbd5e1;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .meta-info {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .meta-icon {
          width: 16px;
          height: 16px;
          stroke-width: 2;
          color: #64748b;
        }

        .meta-divider {
          color: #475569;
        }

        .employment-badge {
          padding: 4px 10px;
          background: rgba(51, 65, 85, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 6px;
          font-weight: 500;
        }

        /* Item Description */
        .item-description {
          padding: 20px;
          background: rgba(15, 23, 42, 0.5);
          border-left: 3px solid rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }

        .item-description p {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #cbd5e1;
        }

        /* Timeline End */
        .timeline-end {
          position: relative;
          padding-left: 70px;
        }

        .end-marker {
          position: absolute;
          left: 26px;
          width: 12px;
          height: 12px;
          background: #1e293b;
          border: 2px solid #334155;
          border-radius: 50%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .experience-section {
            padding: 80px 16px 60px;
          }

          .section-title {
            font-size: 2.3rem;
          }

          .timeline-block {
            padding-left: 50px;
            padding-bottom: 40px;
          }

          .timeline-line {
            left: 21px;
            top: 50px;
          }

          .experience-item {
            padding: 24px 20px;
          }

          .experience-item::before {
            left: -50px;
            top: 24px;
            width: 12px;
            height: 12px;
          }

          .item-header {
            flex-direction: column;
            gap: 16px;
          }

          .company-logo {
            width: 70px;
            height: 70px;
          }

          .logo-letter {
            font-size: 1.7rem;
          }

          .role-title {
            font-size: 1.3rem;
          }

          .current-indicator {
            align-self: flex-start;
          }

          .meta-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .meta-divider {
            display: none;
          }

          .item-description {
            padding: 16px;
          }

          .end-marker {
            left: 16px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }

          .company-logo {
            width: 60px;
            height: 60px;
          }

          .logo-letter {
            font-size: 1.5rem;
          }

          .role-title {
            font-size: 1.2rem;
          }

          .indicator-text {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;