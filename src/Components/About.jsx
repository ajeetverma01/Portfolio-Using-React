import React from "react";
import "./CSS/about.css";
import myPhoto from "myPhoto.jpg"; // Replace with your actual image
import { Link } from "react-router-dom"; // For navigation

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm Ajeet Verma, a passionate full-stack developer and Java enthusiast.
              I love building dynamic and user-friendly web applications, focusing on both
              front-end and back-end technologies. With a strong foundation in problem-solving
              and software development, I continuously strive to enhance my skills.
            </p>
            {/* Link to Skills Page */}
            <Link to="/skills" className="btn-skills">
              View My Skills →
            </Link>
          </div>

          {/* Photo Section */}
          <div className="about-photo">
            <img src={myPhoto} alt="Ajeet Verma" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
