// SEO.jsx - Using react-helmet-async (Stable for React 18 + Vite)
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Ajeet Verma - Java Full Stack Developer | Portfolio",
  description = "Graduate Trainee at TCS specializing in Java Full Stack, React, Spring Boot, and modern web technologies. Explore my projects, skills, and professional journey from Lucknow, India.",
  url = "https://ajeetverma.netlify.app",
  image = "https://ajeetverma.netlify.app/myPhoto.jpg",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajeet Verma",
    url,
    image,
    jobTitle: "Graduate Trainee - Ignite Profile",
    worksFor: {
      "@type": "Organization",
      name: "Tata Consultancy Services",
      url: "https://www.tcs.com",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Dr. Ram Manohar Lohia Avadh University, Ayodhya",
    },
    sameAs: [
      "https://www.linkedin.com/in/ajeetverma01",
      "https://github.com/ajeetverma01",
      "https://instagram.com/ajee.t__",
      "https://www.threads.net/@ajee.t__",
      "https://leetcode.com/u/ajeet_verma01",
      "https://www.hackerrank.com/ajeetverma01",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
