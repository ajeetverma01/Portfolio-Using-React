import React, { useEffect, useState } from "react";
import "./CSS/project.css";
import {
  FaLaptopCode,
  FaGlobe,
  FaClipboardList,
  FaComments,
  FaShoppingCart,
  FaGraduationCap
} from "react-icons/fa";

// Animated heading component
const ProjectsHeading = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <h2 className={`project-heading ${animate ? "underline-animate" : ""} text-center mb-5`}>
      My Projects
    </h2>
  );
};

const projects = [
  {
    id: 1,
    title: "Expense & Income Tracker",
    description: "A web app to track your income & expenses with data visualization.",
    github: "https://github.com/ajeetverma01/Personal-Expense-and-Income-Tracker.git",
    live: "https://github.com/ajeetverma01",
    icon: <FaLaptopCode size={40} color="#240A34" />,
  },
  {
    id: 2,
    title: "Static College Website",
    description: "A responsive website designed for my college, showcasing its features.",
    github: "https://github.com/ajeetverma01/My-College-Web.git",
    live: "https://msitmbyajeet.netlify.app/",
    icon: <FaGlobe size={40} color="#240A34" />,
  },
  {
    id: 3,
    title: "Website for a School",
    description: "Website designed for a school.",
    github: "https://github.com/ajeetverma01/Static-Website-for-a-School",
    live: "https://omsaiinternational.netlify.app/",
    icon: <FaGlobe size={40} color="#240A34" />,
  },
  {
    id: 4,
    title: "Smart Shop Manager",
    description: "A PHP and MySQL-based web app to manage inventory, customers, and sales.",
    github: "https://github.com/ajeetverma01/Smart-Shop-Manager-Using-Php.git",
    live: "https://github.com/ajeetverma01/Smart-Shop-Manager-Using-Php.git",
    icon: <FaShoppingCart size={40} color="#240A34" />,
  },
  {
    id: 5,
    title: "Bucket List",
    description: "A CLI-based application using Java and MySQL to track personal goals.",
    github: "https://github.com/ajeetverma01/Bucket-List-using-JAVA.git",
    live: "https://github.com/ajeetverma01/Bucket-List-using-JAVA.git",
    icon: <FaClipboardList size={40} color="#240A34" />,
  },
  {
    id: 6,
    title: "Chatting App",
    description: "A Java-based real-time chatting application using sockets.",
    github: "https://github.com/ajeetverma01/Chatting-Application-Using-Java-and-Socket-Programming.git",
    live: "https://github.com/ajeetverma01/Chatting-Application-Using-Java-and-Socket-Programming.git",
    icon: <FaComments size={40} color="#240A34" />,
  },
  {
    id: 7,
    title: "College Management System",
    description: "A Java-based management system for college administration.",
    github: "https://github.com/ajeetverma01/college-management-system.git",
    live: "https://www.linkedin.com/posts/ajeetverma01_im-happy-to-share-this-college-management-activity-7199015708934979586-wMQk",
    icon: <FaGraduationCap size={40} color="#240A34" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: "#001100", color: "#2C2C2C" }}>
      <div className="container justify-content-center">
        <ProjectsHeading />

        <div className="row justify-content-center">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
              <div
                className="card position-relative p-4 text-center"
                style={{
                  background: "#000800",
                  color: "#FFF8DC",
                  borderRadius: "15px",
                  width: "300px",
                  height: "300px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0 4px 8px rgba(0, 88, 50, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0px 6px 20px rgba(221, 168, 83, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)";
                }}
              >
                <h4 className="card-title mb-2" style={{ fontSize: "18px", fontWeight: "bold", color: "#98D8EF" }}>
                  {project.title}
                </h4>
                <p className="card-text mb-3" style={{ fontSize: "13px", opacity: "0.9", color: "#CBDCEB" }}>
                  {project.description}
                </p>
                <div
                  className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "rgba(238, 255, 2, 0.81)",
                    borderRadius: "50%",
                    boxShadow: "5px 15px 2px rgba(119, 126, 17, .3)",
                  }}
                >
                  {project.icon}
                </div>
                <div className="position-absolute bottom-0 start-0 m-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn d-flex align-items-center justify-content-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "2px solid #2C2C2C",
                      backgroundColor: "#9FB3DF",
                      color: "#121212",
                      transition: "background 0.3s, color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#27445D";
                      e.currentTarget.style.color = "#48A6A7";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#9FB3DF";
                      e.currentTarget.style.color = "#2C2C2C";
                    }}
                  >
                    <i className="bi bi-github" style={{ fontSize: "18px" }}></i>
                  </a>
                </div>
                <div className="position-absolute bottom-0 end-0 m-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn d-flex align-items-center justify-content-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "2px solid #2C2C2C",
                      backgroundColor: "#9FB3DF",
                      opacity: "80%",
                      color: "#121212",
                      transition: "background 0.3s, color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#27445D";
                      e.currentTarget.style.color = "#48A6A7";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#9FB3DF";
                      e.currentTarget.style.color = "#2C2C2C";
                    }}
                  >
                    <i className="bi bi-box-arrow-up-right" style={{ fontSize: "18px" }}></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href="https://github.com/ajeetverma01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              backgroundColor: "#89bc25",
              borderColor: "#89bc25",
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold"
            }}
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
