// SEO.jsx - Customized for Ajeet Verma's Portfolio
import React from 'react';
import { Helmet } from 'react-helmet-next';

const SEO = ({
  title = "Ajeet Verma - Java Full Stack Developer | Portfolio",
  description = "Graduate Trainee at TCS specializing in Java Full Stack, React, Spring Boot, and modern web technologies. Explore my projects, skills, and professional journey from Lucknow, India.",
  keywords = "Ajeet Verma, ajeetverma01, software developer, java full stack developer, react developer, spring boot, node.js, web developer, portfolio, TCS, Wipro, Lucknow developer",
  author = "Ajeet Verma",
  image = "https://ajeetverma.netlify.app/myPhoto.jpg",
  url = "https://ajeetverma.netlify.app",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ajeet Verma",
    "url": url,
    "image": image,
    "jobTitle": "Graduate Trainee - Ignite Profile",
    "worksFor": {
      "@type": "Organization",
      "name": "Tata Consultancy Services",
      "url": "https://www.tcs.com"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Dr. Ram Manohar Lohia Avadh University, Ayodhya"
    },
    "knowsAbout": [
      "JavaScript",
      "React",
      "Java",
      "Spring Boot",
      "Node.js",
      "Full Stack Development",
      "Java Full Stack Development",
      "Web Development",
      "REST API",
      "MySQL",
      "MongoDB"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/ajeetverma01",
      "https://github.com/ajeetverma01",
      "https://instagram.com/ajee.t__",
      "https://www.threads.net/@ajee.t__",
      "https://leetcode.com/u/ajeet_verma01",
      "https://www.hackerrank.com/ajeetverma01"
    ],
    "email": "av401402@gmail.com",
    "telephone": "+91-6389695460",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Ajeet Verma Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ajeetverma01" />
      <meta name="twitter:creator" content="@ajeetverma01" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#0a0e17" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.8467;80.9462" />
      <meta name="ICBM" content="26.8467, 80.9462" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;

// ============================================
// Usage Example in your App.js or main component
// ============================================

/*
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <YourPortfolioContent />
    </HelmetProvider>
  );
}

export default App;
*/

// ============================================
// For specific pages (optional)
// ============================================

/*
// On Projects Page
<SEO 
  title="Projects - Your Name | Portfolio"
  description="Explore my web development projects including React apps, Node.js backends, and full-stack applications."
  url="https://yourportfolio.com/projects"
/>

// On Experience Page
<SEO 
  title="Experience - Your Name | Portfolio"
  description="My professional journey including roles at TCS, Wipro, and various development projects."
  url="https://yourportfolio.com/experience"
/>

// On Contact Page
<SEO 
  title="Contact - Your Name | Portfolio"
  description="Get in touch for collaboration, job opportunities, or project inquiries."
  url="https://yourportfolio.com/contact"
/>
*/

// ============================================
// Installation Instructions
// ============================================

/*
1. Install react-helmet-async:
   npm install react-helmet-async

2. Import and wrap your app with HelmetProvider in your main file (index.js or App.js)

3. Import the SEO component and use it in your pages

4. Customize the default values in the SEO component with your actual information

5. Create an og-image.jpg (1200x630px) for social media previews and place it in your public folder
*/

// ============================================
// Additional Files You Need
// ============================================

// public/robots.txt
/*
User-agent: *
Allow: /
Sitemap: https://yourportfolio.com/sitemap.xml

User-agent: *
Disallow: /api/
Disallow: /admin/
*/

// public/sitemap.xml
/*
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourportfolio.com/</loc>
    <lastmod>2026-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourportfolio.com/experience</loc>
    <lastmod>2026-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourportfolio.com/projects</loc>
    <lastmod>2026-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://yourportfolio.com/contact</loc>
    <lastmod>2026-01-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
*/