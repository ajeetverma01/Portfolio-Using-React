import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Expense & Income Tracker",
    description: "A web app to track your income & expenses with data visualization.",
    tech: ["React", "Bootstrap", "Node.js", "Express", "SQL"],
    github: "https://github.com/ajeetverma01/Personal-Expense-and-Income-Tracker.git",
    live: null,
    isLive: false,
    icon: "💰"
  },
  {
    id: 2,
    title: "Smart Shop Manager",
    description: "A PHP & MySQL web app to manage inventory, customers, and sales.",
    tech: ["PHP", "MySQL", "Bootstrap", "JS"],
    github: "https://github.com/ajeetverma01/Smart-Shop-Manager-Using-Php.git",
    live: null,
    isLive: false,
    icon: "🛒"
  },
  {
    id: 3,
    title: "My Portfolio Website",
    description: "A personal portfolio built to showcase my projects, skills, and achievements with a modern responsive design.",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "React"],
    github: "https://github.com/ajeetverma01/Portfolio-Using-React",
    live: "https://ajeetverma.netlify.app/",
    isLive: true,
    icon: "💼"
  },
  {
    id: 4,
    title: "Bucket List",
    description: "CLI app using Java & MySQL to track personal goals.",
    tech: ["Java", "MySQL", "JDBC"],
    github: "https://github.com/ajeetverma01/Bucket-List-using-JAVA.git",
    live: null,
    isLive: false,
    icon: "📋"
  },
  {
    id: 5,
    title: "Chatting App",
    description: "Java-based real-time chatting application using sockets.",
    tech: ["Java", "Sockets", "Swing & AWT"],
    github: "https://github.com/ajeetverma01/Chatting-Application-Using-Java-and-Socket-Programming.git",
    live: null,
    isLive: false,
    icon: "💬"
  },
  {
    id: 6,
    title: "Static College Website",
    description: "A responsive website designed for my college, showcasing its features.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ajeetverma01/My-College-Web.git",
    live: "https://msitmbyajeet.netlify.app/",
    isLive: true,
    icon: "🌐"
  },
  {
    id: 7,
    title: "NoteHub using Hibernate",
    description: "A Hibernate-powered note management web app using JSP, Servlets, and SQL.",
    tech: ["HTML", "CSS", "Servlet/JSP", "Java", "SQL", "HQL", "Hibernate"],
    github: "https://github.com/ajeetverma01/NoteHub-Using-Hibernate.git",
    live: null,
    isLive: false,
    icon: "📝"
  },
  {
    id: 8,
    title: "Static School Website",
    description: "A simple, modern, and responsive website made for a school.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ajeetverma01/Static-Website-for-a-School",
    live: "https://omsaiinternational.netlify.app/",
    isLive: true,
    icon: "🏫"
  },
  {
    id: 9,
    title: "ToDo List",
    description: "A clean and responsive ToDo list app made using HTML, CSS, and JS.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ajeetverma01/To-Do-List-Maker",
    live: null,
    isLive: false,
    icon: "✅"
  },
  {
    id: 10,
    title: "Website Clones Collection",
    description: "A set of various static and responsive clones, including Nvidia and driver pages.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ajeetverma01",
    live: null,
    isLive: false,
    icon: "🔄"
  },
  {
    id: 11,
    title: "College Management System",
    description: "Java-based management system for college administration.",
    tech: ["Java", "MySQL", "Swing"],
    github: "https://github.com/ajeetverma01/college-management-system.git",
    live: "https://www.linkedin.com/posts/ajeetverma01_im-happy-to-share-this-college-management-activity-7199015708934979586-wMQk",
    isLive: true,
    icon: "🎓"
  }
];

const categories = ["React", "Java", "Node/Express", "PHP"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.tech.some((t) => {
            if (filter === "Node/Express") {
              return ["Node.js", "Express"].includes(t);
            }
            return t === filter;
          })
        );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Floating background orbs */}
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>

        <div className="content-wrapper">
          {/* Header */}
          <div className="header-section">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              A collection of my development work showcasing full-stack applications, web solutions, and creative implementations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="filter-container">
            <button
              className={`filter-btn ${filter === "All" ? "active" : ""}`}
              onClick={() => setFilter("All")}
            >
              All Projects
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-glow"></div>
                
                <div className="project-header">
                  <div className="project-icon">
                    <span className="icon-emoji">{project.icon}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn github-btn"
                  >
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  {project.isLive ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn live-btn"
                    >
                      <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  ) : (
                    <button className="action-btn disabled-btn" disabled>
                      <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                      </svg>
                      Not Live
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .projects-section {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(circle at top left, #0c1019, #141a28 60%, #0d1118);
          padding: 100px 20px 80px;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden;
        }

        /* Background Orbs */
        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
          pointer-events: none;
          animation: floatOrb 15s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #00cfff, transparent);
          top: -150px;
          right: -150px;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #ff4c4c, transparent);
          bottom: -100px;
          left: -100px;
          animation-delay: 5s;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header Section */
        .header-section {
          text-align: center;
          margin-bottom: 50px;
          animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
          text-shadow: 0 0 6px rgba(0, 207, 255, 0.3);
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #00cfff, #007bbf, #00cfff);
          border-radius: 5px;
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .section-subtitle {
          color: #cfd8dc;
          font-size: 1.05rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Filter Container */
        .filter-container {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
          margin-bottom: 50px;
          animation: fadeIn 0.8s ease-out 0.2s backwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .filter-btn {
          padding: 12px 28px;
          background-color: #1a1f2a;
          border: 2px solid #ff4c4c;
          border-radius: 10px;
          color: #ff6b6b;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: rgba(255, 76, 76, 0.2) 0 2px 4px,
                      rgba(0, 207, 255, 0.15) 0 7px 13px -3px,
                      #11151c 0 -3px 0 inset;
          font-family: inherit;
        }

        .filter-btn:hover {
          color: #fff;
          border-color: #ff6b6b;
          transform: translateY(-2px);
          box-shadow: rgba(255, 76, 76, 0.3) 0 4px 8px,
                      rgba(0, 207, 255, 0.25) 0 7px 13px -3px,
                      #11151c 0 -3px 0 inset;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, rgba(255, 76, 76, 0.15), rgba(0, 207, 255, 0.2));
          color: #fff;
          border-color: rgba(0, 207, 255, 0.6);
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 0 12px rgba(255, 76, 76, 0.3),
                      0 0 20px rgba(0, 207, 255, 0.25);
        }

        .filter-btn:active {
          transform: translateY(1px);
          box-shadow: #11151c 0 3px 7px inset;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
          animation: fadeIn 0.8s ease-out 0.4s backwards;
        }

        /* Project Card */
        .project-card {
          position: relative;
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(51, 65, 85, 0.6);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideUp 0.6s ease-out backwards;
          overflow: hidden;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #00cfff, #ff4c4c);
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          filter: blur(20px);
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 207, 255, 0.5);
          box-shadow: 0 20px 50px rgba(0, 207, 255, 0.15);
        }

        .project-card:hover .card-glow {
          opacity: 0.3;
        }

        /* Project Header */
        .project-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .project-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(0, 207, 255, 0.1), rgba(0, 123, 255, 0.15));
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(-5deg);
          background: linear-gradient(135deg, rgba(0, 207, 255, 0.15), rgba(0, 123, 255, 0.2));
        }

        .icon-emoji {
          font-size: 2rem;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #00cfff;
          line-height: 1.3;
          text-shadow: 0 0 3px rgba(0, 207, 255, 0.2);
        }

        .project-description {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 20px;
          min-height: 3em;
        }

        /* Tech Stack */
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .tech-badge {
          padding: 6px 12px;
          background: rgba(0, 207, 255, 0.1);
          border: 1px solid rgba(0, 207, 255, 0.3);
          border-radius: 8px;
          font-size: 0.8rem;
          color: #00cfff;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: rgba(0, 207, 255, 0.2);
          border-color: rgba(0, 207, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Project Actions */
        .project-actions {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          cursor: pointer;
        }

        .btn-icon {
          width: 18px;
          height: 18px;
          stroke-width: 2;
        }

        .github-btn {
          background: linear-gradient(135deg, #7c2ff749, #355f688f);
          color: #fff;
          border-color: rgba(51, 65, 85, 0.5);
          box-shadow: inset 0px -6px 18px -6px rgba(3, 15, 20, 0.3);
        }

        .github-btn:hover {
          background: linear-gradient(135deg, #7c2ff766, #355f68aa);
          transform: translateY(-2px);
          box-shadow: inset 0px -6px 18px -6px rgba(3, 15, 20, 0.5),
                      0 4px 12px rgba(124, 47, 247, 0.3);
        }

        .live-btn {
          background: linear-gradient(135deg, #7c2ff749, #355f688f);
          color: #fff;
          border-color: rgba(51, 65, 85, 0.5);
          box-shadow: inset 0px -6px 18px -6px rgba(3, 15, 20, 0.3);
        }

        .live-btn:hover {
          background: linear-gradient(135deg, #00cfff33, #007bff44);
          transform: translateY(-2px);
          box-shadow: inset 0px -6px 18px -6px rgba(3, 15, 20, 0.5),
                      0 0 20px rgba(0, 207, 255, 0.4);
        }

        .action-btn:active {
          transform: scale(0.96);
          box-shadow: inset 0px -12px 12px -6px rgba(3, 15, 20, 0.7);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 80px 16px 60px;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .section-subtitle {
            font-size: 0.95rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-card {
            padding: 24px;
          }

          .filter-container {
            gap: 10px;
          }

          .filter-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .project-actions {
            flex-direction: column;
          }

          .action-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
          }

          .project-header {
            flex-direction: column;
            text-align: center;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-icon {
            width: 50px;
            height: 50px;
          }

          .icon-emoji {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;