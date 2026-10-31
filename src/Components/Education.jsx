
import React from "react";
import "./CSS/education.css";

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "Integral University",
    duration: "2026 – 2028",
    score: "",
    status: "Currently Pursuing",
    icon: "bi-mortarboard",
    description:
      "Pursuing postgraduate studies in computer applications, software development, and advanced computing.",
    featured: true,
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    institution: "Dr. Ram Manohar Lohia Avadh University",
    duration: "2022 – 2025",
    score: "81.47%",
    status: "Completed",
    icon: "bi-laptop",
    description:
      "Built a foundation in programming, database management, computer science, and application development.",
  },
  {
    id: 3,
    degree: "Senior Secondary Education",
    short: "Class 12th",
    institution: "Uttar Pradesh Board",
    duration: "2022",
    score: "1st Division",
    status: "Completed",
    icon: "bi-book",
    description:
      "Completed higher secondary education under the Uttar Pradesh Board.",
  },
  {
    id: 4,
    degree: "Secondary Education",
    short: "Class 10th",
    institution: "Uttar Pradesh Board",
    duration: "2020",
    score: "1st Division",
    status: "Completed",
    icon: "bi-journal-bookmark",
    description:
      "Completed secondary education under the Uttar Pradesh Board.",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-wrapper">

        <div className="education-heading">
          <span className="education-eyebrow">
            ACADEMIC JOURNEY
          </span>

          <h2>
            My <span>Education</span>
          </h2>

          <p>
            A journey of learning, growing, and building a strong
            foundation in computer science and technology.
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <article
              className={`education-card ${item.featured ? "featured-card" : ""}`}
              key={item.id}
              style={{ "--card-index": index }}
            >
              <div className="education-card-header">
                <div className="education-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <span
                  className={`education-status ${
                    item.featured ? "status-pursuing" : "status-completed"
                  }`}
                >
                  <span></span>
                  {item.status}
                </span>
              </div>

              <div className="education-card-body">
                <span className="education-short">{item.short}</span>

                <h3>{item.degree}</h3>

                <p className="education-institution">
                  <i className="bi bi-building"></i>
                  {item.institution}
                </p>

                <p className="education-description">
                  {item.description}
                </p>
              </div>

              <div className="education-card-footer">
                <span>
                  <i className="bi bi-calendar3"></i>
                  {item.duration}
                </span>

                {item.score && (
                  <span className="education-score">
                    <i className="bi bi-award"></i>
                    {item.score}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="education-bottom">
          <span className="education-bottom-line"></span>
          <p>Learning today. Building tomorrow.</p>
          <span className="education-bottom-line"></span>
        </div>

      </div>
    </section>
  );
};

export default Education;
