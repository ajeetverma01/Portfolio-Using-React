import React, { useState, useEffect } from 'react';
import testImg1 from '../assets/cer1.PNG';
import testImg2 from '../assets/java-basic.PNG';
import testImg3 from '../assets/sql-basic.PNG';
import testImg4 from '../assets/css-basic.PNG';
import testImg5 from '../assets/js1.PNG';
import testImg6 from '../assets/js2.PNG';
import testImg7 from '../assets/py.PNG';
import testImg8 from '../assets/web-dev.PNG';
import testImg9 from '../assets/data-sc.PNG';
import testImg10 from '../assets/c1.png';

const certificates = [
  {
    title: 'Software Engineer Intern',
    issuer: 'Hackerrank',
    date: 'March 2025',
    link: 'https://www.hackerrank.com/certificates/3a4f04e5651e',
    image: testImg1,
  },
  {
    title: 'Web Development Internship',
    issuer: 'Edureka',
    date: 'November 2024',
    link: '/certificates/edureka-web-dev.pdf',
    image: testImg8,
  },
  {
    title: 'Java (Basic)',
    issuer: 'Hackerrank',
    date: 'February 2025',
    link: 'https://www.hackerrank.com/certificates/3918e972caa2',
    image: testImg2,
  },
  {
    title: 'SQL (Basic)',
    issuer: 'Hackerrank',
    date: 'February 2025',
    link: 'https://www.hackerrank.com/certificates/5a652d26bcb4',
    image: testImg3,
  },
  {
    title: 'Data Science & M.L.',
    issuer: 'Edureka',
    date: 'May 2024',
    link: '/certificates/edureka-data-sc.pdf',
    image: testImg9,
  },
  {
    title: 'CSS (Basic)',
    issuer: 'Hackerrank',
    date: 'February 2025',
    link: 'https://www.hackerrank.com/certificates/3093804de163',
    image: testImg4,
  },
  {
    title: 'Certificate of participation',
    issuer: 'B.L.A.',
    date: 'March 2025',
    link: '/certificates/c1.png',
    image: testImg10,
  },
  {
    title: 'JavaScript (Basic)',
    issuer: 'Hackerrank',
    date: 'March 2025',
    link: 'https://www.hackerrank.com/certificates/dce02f88cb6d',
    image: testImg5,
  },
  {
    title: 'JavaScript (Intermediate)',
    issuer: 'Hackerrank',
    date: 'March 2025',
    link: 'https://www.hackerrank.com/certificates/36823547b246',
    image: testImg6,
  },
  {
    title: 'Python (Basic)',
    issuer: 'Hackerrank',
    date: 'March 2025',
    link: 'https://www.hackerrank.com/certificates/4b6f9aa135a5',
    image: testImg7,
  },
];

const Certificate = () => {
  const [showAll, setShowAll] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsToShow(showAll ? certificates.length : 3);
      } else {
        setItemsToShow(showAll ? certificates.length : 6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showAll]);

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 10);
    return () => clearTimeout(timer);
  }, [showAll]);

  const handleToggle = () => setShowAll(prev => !prev);

  return (
    <div className="py-5" style={{ minHeight: '100vh' }}>
      <style>{`
        .certificate-card {
          opacity: 0;
          transform: scale(0.96);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .certificate-card.animate {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div className="container">
        <h2 className="text-center fw-bold mb-5">My Certificates</h2>
        <div className="row g-4">
          {certificates.slice(0, itemsToShow).map((cert, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-4 certificate-card ${animateCards ? 'animate' : ''}`}
            >
              <div
                className="card h-100 border-0 rounded-4 shadow-sm"
                style={{
                  background: 'white',
                  transition: 'all 0.4s ease',
                  minHeight: '420px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
                }}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} preview`}
                  className="card-img-top rounded-4"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between px-3 py-3">
                  <div>
                    <h5 className="card-title fw-semibold text-dark">{cert.title}</h5>
                    <p className="card-text text-secondary mb-1">
                      Issued by: <strong>{cert.issuer}</strong>
                    </p>
                    <p className="card-text text-muted small">{cert.date}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm mt-3 px-3 py-2 text-white fw-medium"
                    style={{
                      background: 'linear-gradient(135deg, #38b000, #007f5f)',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(56, 176, 0, 0.4)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.boxShadow = '0 6px 18px rgba(56, 176, 0, 0.6)';
                      e.target.style.transform = 'scale(1.02)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.boxShadow = '0 4px 12px rgba(56, 176, 0, 0.4)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4 d-flex justify-content-center align-items-center w-100"
        >
          <button
            onClick={handleToggle}
            style={{
              padding: '10px 24px',
              fontSize: '16px',
              fontWeight: '500',
              borderRadius: '12px',
              background: 'linear-gradient(135deg,rgb(38, 0, 176), #007f5f)',
              boxShadow: '0 4px 12px rgba(56, 176, 0, 0.3)',
              transition: 'all 0.3s ease',
              color: 'white',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.target.style.boxShadow = '0 6px 18px rgba(56, 176, 0, 0.5)';
              e.target.style.transform = 'scale(1.03)';
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = '0 4px 12px rgba(56, 176, 0, 0.3)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
