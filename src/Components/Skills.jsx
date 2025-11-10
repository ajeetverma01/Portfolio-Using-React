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
  FaDatabase,
} from "react-icons/fa";
import {
  SiMysql,
  SiBootstrap,
  SiIntellijidea,
  SiEclipseide,
  SiC,
  SiCplusplus,
  SiSqlite,
} from "react-icons/si";
import "./CSS/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, color: "rgba(248, 152, 32, 0.15)" },
        { name: "Python", icon: <FaPython />, color: "rgba(55, 118, 171, 0.15)" },
        { name: "C", icon: <SiC />, color: "rgba(144, 144, 144, 0.15)" },
        { name: "C++", icon: <SiCplusplus />, color: "rgba(0, 89, 156, 0.15)" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "rgba(227, 76, 38, 0.15)" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "rgba(38, 77, 228, 0.15)" },
        { name: "JavaScript", icon: <FaJs />, color: "rgba(247, 223, 30, 0.15)" },
        { name: "PHP", icon: <FaPhp />, color: "rgba(108, 99, 255, 0.15)" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "rgba(97, 218, 251, 0.15)" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "rgba(121, 82, 179, 0.15)" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "rgba(76, 154, 106, 0.15)" },
        { name: "Java Full Stack (Learning)", icon: <FaJava />, color: "rgba(248, 152, 32, 0.15)" },
        { name: "Hibernate", icon: <FaDatabase />, color: "rgba(89, 102, 108, 0.15)" },
        { name: "HQL", icon: <FaDatabase />, color: "rgba(142, 142, 142, 0.15)" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "rgba(0, 117, 143, 0.15)" },
        { name: "SQLite", icon: <SiSqlite />, color: "rgba(0, 59, 87, 0.15)" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGithub />, color: "rgba(51, 51, 51, 0.15)" },
        { name: "GitHub", icon: <FaGithub />, color: "rgba(34, 34, 34, 0.15)" },
        { name: "IntelliJ", icon: <SiIntellijidea />, color: "rgba(231, 111, 81, 0.15)" },
        { name: "Eclipse", icon: <SiEclipseide />, color: "rgba(93, 94, 141, 0.15)" },
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
                <div
                  key={i}
                  className="skill-item"
                  style={{
                    backgroundColor: skill.color,
                    borderLeft: "3px solid transparent",
                  }}
                >
                  <div className="skill-icon" style={{ color: "#ffd700" }}>
                    {skill.icon}
                  </div>
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
