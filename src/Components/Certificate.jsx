import React from 'react';
import testImg from '../assets/swIntern.JPG'; // Replace with actual certificate preview image

const certificates = [
  {
    title: 'Software Engineer Intern',
    issuer: 'Hackerrank',
    date: 'March 2025',
    link: 'https://www.hackerrank.com/certificates/3a4f04e5651e',
  },
  {
    title: 'Java (Basic)',
    issuer: 'Hackerrank',
    date: 'February 2025',
    link: 'https://www.hackerrank.com/certificates/3918e972caa2',
  },
  {
    title: 'SQL (Basic)',
    issuer: 'Hackerrank',
    date: 'February 2025',
    link: 'https://www.hackerrank.com/certificates/5a652d26bcb4',
  },
  {
    title: 'CSS (Basic)',
    issuer: 'Hackerrank',
    date: 'February 2025',
    link: 'https://www.hackerrank.com/certificates/3093804de163',
  },
  {
    title: 'JavaScript (Basic)',
    issuer: 'Hackerrank',
    date: 'March 2025',
    link: 'https://www.hackerrank.com/certificates/dce02f88cb6d',
  },
  {
    title: 'JavaScript (Basic)',
    issuer: 'Hackerrank',
    date: 'March 2025',
    link: 'https://www.hackerrank.com/certificates/36823547b246',
  },
  {
    title: 'JavaScript (Intermediate)',
    issuer: 'Hackerrank',
    date: 'March 2025',
    link: 'https://www.hackerrank.com/certificates/4b6f9aa135a5',
  },
];

const Certificate = () => {
  return (
    <div className="py-5" style={{ minHeight: '100vh' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">My Certificates</h2>
        <div className="row g-4">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 rounded-4 shadow-sm"
                style={{
                  background: 'white',
                  transition: 'all 0.4s ease',
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
                  src={testImg}
                  alt={`${cert.title} preview`}
                  className="card-img-top rounded-4"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
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
      </div>
    </div>
  );
};

export default Certificate;
