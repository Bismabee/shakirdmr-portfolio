import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Shakir Dmr - Full-Stack MERN Developer",
  description = "Full-stack MERN Developer specializing in React, Node.js, and modern web technologies. Building fast, practical digital products that scale.",
  keywords = "full-stack developer, MERN stack, React, Node.js, JavaScript, web development, portfolio",
  image = "/og-image.png",
  url = "https://shakirdmr.dev",
  type = "website"
}) => {
  const siteName = "Shakir Dmr Portfolio";
  const twitterHandle = "@shakirdmr";

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shakir Dmr" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional SEO tags */}
      <meta name="theme-color" content="#10b981" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shakir Dmr",
          "jobTitle": "Full-Stack MERN Developer",
          "description": description,
          "url": url,
          "sameAs": [
            "https://github.com/shakirdmr",
            "https://x.com/shakirdmr",
            "https://www.linkedin.com/in/shakirdmr/"
          ],
          "knowsAbout": [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Full-Stack Development",
            "Web Development"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Full-Stack Developer",
            "occupationLocation": {
              "@type": "Country",
              "name": "India"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;