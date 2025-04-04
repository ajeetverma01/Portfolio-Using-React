import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiExpress,
  SiIntellijidea,
  SiEclipseide,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import "./css/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#f89820", textColor: "#222" },
        { name: "Python", icon: <FaPython />, color: "#3776ab" },
        { name: "C", icon: <SiC />, color: "#909090" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599c" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", textColor: "#222" },
        { name: "PHP", icon: <FaPhp />, color: "#6c63ff" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61dafb", textColor: "#222" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#4c9a6a" },
        { name: "Java Full Stack (Learning)", icon: <FaJava />, color: "#f89820", textColor: "#222" },
      ],
    },
    {
      title: "Databases",
      skills: [{ name: "SQL", icon: <SiMysql />, color: "#00758f" }],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGithub />, color: "#333" },
        { name: "GitHub", icon: <FaGithub />, color: "#222" },
        { name: "IntelliJ", icon: <SiIntellijidea />, color: "#e76f51" },
        { name: "Eclipse", icon: <SiEclipseide />, color: "#5d5e8d" },

      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">🚀 My Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-title">{category.title}</h3>
            <div className="skills-list mt-4 mb-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item" style={{ backgroundColor: skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
