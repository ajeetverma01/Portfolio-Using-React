import React from "react";
import "./CSS/experience.css";

const calculateDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (now.getDate() < start.getDate()) {
    months--;
  }

  if (months <= 0) return "< 1 month";
  if (months === 1) return "1 month";

  return `${months} months`;
};

const experienceData = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    shortName: "TCS",
    role: "Graduate Trainee – TCS Ignite",
    duration: "Jan 2026 – Present",
    startDate: "2026-01-21",
    employment: "Full Time",
    location: "India",
    status: "Current",
    description:
      "Working as a Graduate Trainee in the TCS Ignite Program, gaining hands-on exposure to enterprise software development, Java-based applications, and modern web technologies",
    skills: ["TCS Ignite", "GIS Mapping", "Enterprise Environment"],
    featured: true,
  },
  {
    id: 2,
    company: "Wipro",
    shortName: "W",
    role: "Trainee – Digital Workspace Services",
    duration: "Aug 2025 – Sep 2025",
    experienceDuration: "2 months",
    employment: "Training",
    location: "Remote",
    status: "Completed",
    description:
      "Completed training in enterprise IT solutions, application packaging, PowerShell automation, SCCM deployment, and workplace technologies.",
    skills: ["PowerShell", "SCCM", "Application Packaging"],
  },
  {
    id: 3,
    company: "Sipher Web Academy",
    shortName: "S",
    role: "Frontend Development Intern",
    duration: "July 2025",
    experienceDuration: "10 days",
    employment: "Internship",
    location: "Remote",
    status: "Completed",
    description:
      "Completed an intensive frontend development bootcamp covering HTML5, CSS3, and JavaScript fundamentals with hands-on project work.",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* Heading */}
        <div className="experience-heading">
          <span className="experience-eyebrow">CAREER JOURNEY</span>

          <h2>
            Professional <span>Experience</span>
          </h2>

          <p>
            My professional journey, practical exposure, and continuous
            learning along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <article
              className={`experience-entry ${
                item.featured ? "current-experience" : ""
              }`}
              key={item.id}
            >
              <div className="timeline-indicator">
                <span className="timeline-dot"></span>
                {index !== experienceData.length - 1 && (
                  <span className="timeline-connector"></span>
                )}
              </div>

              <div className="experience-card">

                {/* Card Header */}
                <div className="experience-card-header">
                  <div className="company-identity">
                    <div className={`company-mark mark-${item.shortName.toLowerCase()}`}>
                      {item.shortName}
                    </div>

                    <div className="company-details">
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                  </div>

                  <span
                    className={`experience-status ${
                      item.featured ? "status-current" : "status-completed"
                    }`}
                  >
                    <span className="status-dot"></span>
                    {item.status}
                  </span>
                </div>

                {/* Metadata */}
                <div className="experience-meta">
                  <span>
                    <i className="bi bi-calendar3"></i>
                    {item.duration}
                  </span>

                  <span>
                    <i className="bi bi-clock"></i>
                    {item.featured
                      ? calculateDuration(item.startDate)
                      : item.experienceDuration}
                  </span>

                  <span>
                    <i className="bi bi-briefcase"></i>
                    {item.employment}
                  </span>

                  <span>
                    <i className="bi bi-geo-alt"></i>
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <div className="experience-description">
                  <p>{item.description}</p>
                </div>

                {/* Skills */}
                <div className="experience-tags">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="experience-footer-note">
          <span></span>
          <p>Every experience adds something new to the journey.</p>
          <span></span>
        </div>

      </div>
    </section>
  );
};

export default Experience;