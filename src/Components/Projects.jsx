import React, { useState } from "react";
import {
  FaLaptopCode,
  FaGlobe,
  FaShoppingCart,
  FaClipboardList,
  FaComments,
  FaGraduationCap,
  FaStickyNote,
  FaSchool,
  FaListUl,
  FaClone
} from "react-icons/fa";
import "./CSS/project.css";

const projectsData = [
  {
    id: 1,
    title: "Expense & Income Tracker",
    description: "A web app to track your income & expenses with data visualization.",
    tech: ["React", "Bootstrap", "Node.js", "Express", "SQL"],
    github: "https://github.com/ajeetverma01/Personal-Expense-and-Income-Tracker.git",
    live: "https://github.com/ajeetverma01",
    icon: <FaLaptopCode size={50} />
  },
  {
    id: 2,
    title: "Smart Shop Manager",
    description: "A PHP & MySQL web app to manage inventory, customers, and sales.",
    tech: ["PHP", "MySQL", "Bootstrap", "JS"],
    github: "https://github.com/ajeetverma01/Smart-Shop-Manager-Using-Php.git",
    live: "https://github.com/ajeetverma01/Smart-Shop-Manager-Using-Php.git",
    icon: <FaShoppingCart size={50} />
  },
  {
    id: 3,
    title: "My Portfolio Website",
  description: "A personal portfolio built to showcase my projects, skills, and achievements with a modern responsive design.",
  tech: ["HTML", "CSS", "JS", "Bootstrap", "React"],
  github: "https://github.com/ajeetverma01/Portfolio-Using-React",
  live: "https://ajeetverma.netlify.app/",
  icon: <FaLaptopCode size={50} />
   
  },
  {
    id: 4,
    title: "Bucket List",
    description: "CLI app using Java & MySQL to track personal goals.",
    tech: ["Java", "MySQL", "JDBC"],
    github: "https://github.com/ajeetverma01/Bucket-List-using-JAVA.git",
    live: "https://github.com/ajeetverma01/Bucket-List-using-JAVA.git",
    icon: <FaClipboardList size={50} />
  },
  {
    id: 5,
    title: "Chatting App",
    description: "Java-based real-time chatting application using sockets.",
    tech: ["Java", "Sockets", "Swing & AWT"],
    github: "https://github.com/ajeetverma01/Chatting-Application-Using-Java-and-Socket-Programming.git",
    live: "https://github.com/ajeetverma01/Chatting-Application-Using-Java-and-Socket-Programming.git",
    icon: <FaComments size={50} />
  },
  {
    id: 6,
    
    title: "Static College Website",
    description: "A responsive website designed for my college, showcasing its features.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ajeetverma01/My-College-Web.git",
    live: "https://msitmbyajeet.netlify.app/",
    icon: <FaGlobe size={50} />
  },
  {
    id: 7,
    title: "NoteHub",
    description: "A Hibernate-powered note management web app using JSP, Servlets, and SQL.",
    tech: ["HTML", "CSS", "Servlet/JSP", "Java", "SQL", "HQL", "Hibernate"],
    github: "https://github.com/ajeetverma01/NoteHub-Using-Hibernate.git",
    live: "https://github.com/ajeetverma01/NoteHub-Using-Hibernate.git",
    icon: <FaStickyNote size={50} />
  },
  {
    id: 8,
    title: "Static School Website",
    description: "A simple, modern, and responsive website made for a school.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ajeetverma01/Static-Website-for-a-School",
    live: "omsaiinternational.netlify.app/",
    icon: <FaSchool size={50} />
  },
  {
    id: 9,
    title: "ToDo List",
    description: "A clean and responsive ToDo list app made using HTML, CSS, and JS.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ajeetverma01/To-Do-List-Maker",
    live: "https://github.com/ajeetverma01/To-Do-List-Maker",
    icon: <FaListUl size={50} />
  },
  {
    id: 10,
    title: "Website Clones Collection",
    description: "A set of various static and responsive clones, including Nvidia and driver pages.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/ajeetverma01",
    live: "https://github.com/ajeetverma01",
    icon: <FaClone size={50} />
  },
  {
  id: 11,
   
    title: "College Management System",
    description: "Java-based management system for college administration.",
    tech: ["Java", "MySQL", "Swing"],
    github: "https://github.com/ajeetverma01/college-management-system.git",
    live: "https://www.linkedin.com/posts/ajeetverma01_im-happy-to-share-this-college-management-activity-7199015708934979586-wMQk",
    icon: <FaGraduationCap size={50} />
}
];

const categories = [
  "React",
  "Java",
  "Node/Express",
  "PHP",
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) =>
        p.tech.some((t) => {
          if (filter === "Pure CSS/Bootstrap/Tailwind") {
            return ["HTML", "CSS", "JS", "Bootstrap", "Tailwind"].includes(t);
          } else if (filter === "Node/Express") {
            return ["Node.js", "Express"].includes(t);
          } else if (filter === "Websites") {
            return ["HTML", "CSS", "JS"].includes(t);
          } else {
            return t === filter;
          }
        })
      );



  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-filter">
        <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-tile">
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link github">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-link live">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
