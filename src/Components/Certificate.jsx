import React from 'react';

const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Code Academy',
    date: 'April 2025',
    link: 'https://example.com/certificate1',
  },
  {
    title: 'Java Programming Masterclass',
    issuer: 'Udemy',
    date: 'March 2025',
    link: 'https://example.com/certificate2',
  },
  {
    title: 'React JS Crash Course',
    issuer: 'freeCodeCamp',
    date: 'February 2025',
    link: 'https://example.com/certificate3',
  },
  {
    title: 'JavaScript Basics',
    issuer: 'Coursera',
    date: 'January 2025',
    link: 'https://example.com/certificate4',
  },
];

const Certificate = () => {
  return (
    <div
      className="py-5"
      style={{
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5">My Certificates</h2>
        <div className="row g-4">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 rounded-4 p-3 shadow-sm"
                style={{
                  background: 'white',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
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
                <div className="card-body d-flex flex-column justify-content-between">
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
                    className="btn btn-sm mt-3 px-3 py-1 text-white fw-medium"
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
      </div>
    </div>
  );
};

export default Certificate;
