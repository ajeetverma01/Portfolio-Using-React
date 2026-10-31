import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaLightbulb,
  FaCloudUploadAlt,
  FaRocket,
} from "react-icons/fa";

import myPhoto from "../assets/a.jpeg";
import "./CSS/about.css";

const AboutMe = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const whatIDo = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React, JavaScript, HTML, and CSS, with a focus on usability and clean design.",
    },
    {
      icon: FaLaptopCode,
      title: "Backend Development",
      description:
        "Developing backend applications using Java and Spring Boot, designing REST APIs, implementing business logic, and exploring secure application architecture.",
    },
    {
      icon: FaCogs,
      title: "Database Management",
      description:
        "Working with PostgreSQL and MySQL to design relational databases, manage application data, and integrate databases with backend services.",
    },
    {
      icon: FaLightbulb,
      title: "Problem Solving",
      description:
        "Strengthening programming fundamentals and problem-solving skills through coding challenges, debugging, and practical software development.",
    },
    {
      icon: FaCloudUploadAlt,
      title: "Development Tools & Deployment",
      description:
        "Using Git, GitHub, Maven, and Docker in development workflows while exploring application deployment, testing, and development best practices.",
    },
    {
      icon: FaRocket,
      title: "Continuous Learning",
      description:
        "Exploring modern technologies, including AI integration with Spring AI, and improving my skills by building practical full-stack applications.",
    },
  ];

  return (
    <section id="about" className="about-section">

      {/* Section Heading */}
      <motion.h2
        className="about-title shimmer"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Introduction */}
      <div className="about-container">

        {/* Profile Photo */}
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={myPhoto} alt="Ajeet Verma" />
          <div className="photo-glow"></div>
        </motion.div>

        {/* About Text */}
        <motion.div
          className="about-text glass-box"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hi, I'm <span className="highlight">Ajeet Verma</span> —
            a <span className="highlight">Graduate Trainee at Tata Consultancy Services (TCS)</span>,
            focused on <span className="highlight">Java Backend Development</span>.
          </p>

          <p>
            I enjoy building practical web applications, developing backend
            systems, designing REST APIs, and creating responsive user
            interfaces. My primary technology stack includes
            <span className="highlight"> Java, Spring Boot, React, and SQL databases</span>.
          </p>

          <p>
            Through personal projects like
            <span className="highlight"> Huddle, LogSentinel AI, and Sniply</span>,
            I explore real-world software development concepts, strengthen
            my technical skills, and gain practical experience working
            across frontend and backend technologies.
          </p>

          <p>
            I believe in learning by building, understanding concepts
            beyond just writing code, and continuously improving as
            a software developer.
          </p>

          <blockquote className="about-quote">
            "Code never lies, but it often laughs at your assumptions."
          </blockquote>
        </motion.div>
      </div>

      {/* What I Do */}
      <motion.div
        className="what-i-do"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {whatIDo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              className="what-card glass-box"
              key={item.title}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <Icon className="what-icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Closing Quote */}
      <motion.p
        className="about-fun"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        "There are only two hard things in programming:
        naming things, cache invalidation, and off-by-one errors."
      </motion.p>

    </section>
  );
};

export default AboutMe;