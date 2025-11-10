import React from "react";
import { motion } from "framer-motion";
import "./CSS/certificates.css";

import testImg1 from "../assets/cer1.PNG";
import testImg2 from "../assets/java-basic.PNG";
import testImg3 from "../assets/sql-basic.PNG";
import testImg4 from "../assets/css-basic.PNG";
import testImg5 from "../assets/js1.PNG";
import testImg6 from "../assets/js2.PNG";
import testImg7 from "../assets/py.PNG";
import testImg8 from "../assets/web-dev.PNG";
import testImg9 from "../assets/data-sc.PNG";
import testImg10 from "../assets/c1.webp";
import testImg11 from "../assets/msitm.jpg";
import testImg12 from "../assets/nak1.PNG";
import testImg13 from "../assets/nak2.PNG";
import testImg14 from "../assets/nak3.PNG";

const certificates = [
  { title: "Software Engineer Intern", issuer: "Hackerrank", date: "March 2025", link: "https://www.hackerrank.com/certificates/3a4f04e5651e", image: testImg1 },
  { title: "Coding Challenge", issuer: "Naukri", date: "June 2025", link: "https://www.naukri.com/campus/certificates/participation/v0/68480ca227995d505767c106", image: testImg14 },
  { title: "Web Development Internship", issuer: "Edureka", date: "November 2024", link: "/certificates/edureka-web-dev.pdf", image: testImg8 },
  { title: "Naukri Campus Contest", issuer: "Naukri", date: "October 2024", link: "https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/6707fd10e3b9a668e00026d4", image: testImg12 },
  { title: "Certificate of Merit", issuer: "MSITM Degree College", date: "August 2024", link: "/certificates/msitm.jpg", image: testImg11 },
  { title: "Java (Basic)", issuer: "Hackerrank", date: "February 2025", link: "https://www.hackerrank.com/certificates/3918e972caa2", image: testImg2 },
  { title: "Internet - Then, Now and Next", issuer: "Naukri", date: "June 2025", link: "https://www.naukri.com/campus/certificates/participation/v0/68622fa927995d505767c4d9", image: testImg13 },
  { title: "Data Science & M.L.", issuer: "Edureka", date: "May 2024", link: "/certificates/edureka-data-sc.pdf", image: testImg9 },
  { title: "SQL (Basic)", issuer: "Hackerrank", date: "February 2025", link: "https://www.hackerrank.com/certificates/5a652d26bcb4", image: testImg3 },
  { title: "CSS (Basic)", issuer: "Hackerrank", date: "February 2025", link: "https://www.hackerrank.com/certificates/3093804de163", image: testImg4 },
  { title: "Technical Workshop", issuer: "B.L.A.", date: "March 2025", link: "/certificates/c1.png", image: testImg10 },
  { title: "JavaScript (Basic)", issuer: "Hackerrank", date: "March 2025", link: "https://www.hackerrank.com/certificates/dce02f88cb6d", image: testImg5 },
  { title: "JavaScript (Intermediate)", issuer: "Hackerrank", date: "March 2025", link: "https://www.hackerrank.com/certificates/36823547b246", image: testImg6 },
  { title: "Python (Basic)", issuer: "Hackerrank", date: "March 2025", link: "https://www.hackerrank.com/certificates/4b6f9aa135a5", image: testImg7 },
];

const Certificate = () => {
  return (
    <section className="certificate-section py-5">
      <div className="container">
        <motion.h2
          className="text-center fw-bold mb-5 section-title "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Certificates
          <div className="underline mx-auto"></div>
        </motion.h2>

        <div className="row g-4 justify-content-center">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="col-sm-6 col-md-4 col-lg-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="certificate-card text-center">
                <div className="img-wrapper">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                </div>
                <div className="certificate-body">
                  <h6 className="fw-semibold mt-3">{cert.title}</h6>
                  <p className="mb-1 small">Issued by <strong>{cert.issuer}</strong></p>
                  <span className="dateCer small d-block">{cert.date}</span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn view-btn mt-3">
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
