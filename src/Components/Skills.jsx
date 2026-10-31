
import React from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaBrain,
  FaTools,
  FaBug,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  // SiMaven,
  SiPostman,
  SiIntellijidea,
  SiSelenium,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import "./CSS/skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    subtitle: "Core languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "User interface",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Server-side development",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring Security", icon: <FaShieldAlt /> },
      { name: "Hibernate / JPA", icon: <SiHibernate /> },
      { name: "Node.js & Express", icon: <FaNodeJs /> },
      { name: "Spring AI", icon: <FaBrain /> },
    ],
  },
  {
    title: "Databases",
    subtitle: "Data management",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Development Tools",
    subtitle: "Everyday workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      // { name: "Maven", icon: <SiMaven /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "VS Code", icon: <VscCode /> },
    ],
  },
  
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading-wrapper">
          <span className="skills-label">MY TECH STACK</span>
          <h2 className="skills-heading">
            Technologies I <span>Work With.</span>
          </h2>
          <p className="skills-subtitle">
            A collection of technologies and tools I use to build,
            experiment, and improve my development skills.
          </p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div className="skills-category" key={category.title}>

              <div className="category-info">
                <span className="category-index">
                  0{index + 1}
                </span>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>
              </div>

              <div className="category-skills">
                {category.skills.map((skill) => (
                  <div className="tech-item" key={skill.name}>
                    <span className="tech-icon">
                      {skill.icon}
                    </span>
                    <span className="tech-name">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="skills-bottom">
          <span className="bottom-dot"></span>
          <p>Learning, building and growing every day.</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;