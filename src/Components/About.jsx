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
import myPhoto from "../assets/myPhoto.jpg";
import "./CSS/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2
        className="about-title shimmer"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        {/* Photo Section */}
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={myPhoto} alt="Ajeet Verma" />
          <div className="photo-glow"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="about-text glass-box"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hi, I'm <span className="highlight">Ajeet Verma</span> — a{" "}
            <span className="highlight">Full Stack Developer</span> and{" "}
            <span className="highlight">Java Programmer</span> who loves turning
            complex ideas into seamless digital experiences.
          </p>

          <p>
            I build <span className="highlight">responsive web apps</span> that
            blend performance and design — clean UI, optimized logic, and a
            touch of creativity. My focus is on writing efficient code while
            keeping the experience simple and intuitive.
          </p>

          <p>
            I work mainly with <span className="highlight">React, Node.js, MySQL,</span>
            and <span className="highlight">Java</span>. I enjoy exploring new
            technologies and improving my problem-solving mindset through
            real-world projects and coding challenges.
          </p>

          <blockquote className="about-quote">
            “Code never lies, but it often laughs at your assumptions.”
          </blockquote>
        </motion.div>
      </div>
      

      


      {/* What I Do Section */}
      <motion.div
  className="what-i-do"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }}
>
  <motion.div
    className="what-card glass-box"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <FaCode className="what-icon" />
    <h3>Frontend Development</h3>
    <p>
      I create responsive and engaging interfaces using React, HTML, CSS, and JavaScript.
      My focus is on clarity, performance, and user comfort.
    </p>
  </motion.div>

  <motion.div
    className="what-card glass-box"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <FaLaptopCode className="what-icon" />
    <h3>Backend & Databases</h3>
    <p>
      I work with Node.js, Express.js, and MySQL to build secure and efficient backends
      that keep everything running smoothly.
    </p>
  </motion.div>

  <motion.div
    className="what-card glass-box"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <FaCogs className="what-icon" />
    <h3>Java Full-Stack</h3>
    <p>
      I build structured Java applications using Swing, JDBC, and MySQL —
      focused on logic, simplicity, and reliability.
    </p>
  </motion.div>

  <motion.div
    className="what-card glass-box"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <FaLightbulb className="what-icon" />
    <h3>Problem Solving</h3>
    <p>
      I solve DSA problems on LeetCode and HackerRank to stay sharp.
      Debugging teaches patience — and I enjoy that challenge.
    </p>
  </motion.div>

  <motion.div
    className="what-card glass-box"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <FaCloudUploadAlt className="what-icon" />
    <h3>Deployment & Optimization</h3>
    <p>
      I handle smooth deployments, server setups, and performance tweaks
      to make apps fast, stable, and easy to manage.
    </p>
  </motion.div>

  <motion.div
    className="what-card glass-box"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <FaRocket className="what-icon" />
    <h3>Continuous Learning</h3>
    <p>
      I keep exploring new technologies and tools.
      Growth is constant — and I enjoy the process.
    </p>
  </motion.div>
</motion.div>





      <motion.p
        className="about-fun"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        “There are only two hard things in programming: naming things, cache
        invalidation, and off-by-one errors.”
      </motion.p>
    </section>
  );
};

export default About;
