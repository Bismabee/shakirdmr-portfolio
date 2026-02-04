import { useEffect } from 'react';

const SEO = ({
  title = "Shakir Sajad - Backend-Focused Full Stack Developer",
  description = "Backend-focused full stack developer with 11+ years of coding experience. Specializing in Node.js, Express.js, MongoDB, and scalable REST APIs. Building production systems for thousands of users.",
  keywords = "backend developer, Node.js, Express.js, MongoDB, REST APIs, full-stack, JavaScript, web development, database design, software engineer",
  image = "/og-image.png",
  url = "https://shakirsjd.dev",
  type = "website"
}) => {
  const siteName = "Shakir Sajad - Developer Portfolio";
  const twitterHandle = "@shakirsjd";
  const author = "Shakir Sajad";

  useEffect(() => {
    // Set page title
    document.title = title;

    // Function to set or update meta tag
    const setMeta = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set basic meta tags
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('author', author);
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('viewport', 'width=device-width, initial-scale=1.0');
    setMeta('theme-color', '#10b981');
    setMeta('msapplication-TileColor', '#10b981');

    // Set Open Graph tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', `${url}${image}`, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', url, true);
    setMeta('og:type', type, true);
    setMeta('og:site_name', siteName, true);
    setMeta('og:locale', 'en_US', true);

    // Set Twitter/X tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', `${url}${image}`);
    setMeta('twitter:creator', twitterHandle);
    setMeta('twitter:site', twitterHandle);

    // Set additional SEO meta tags
    setMeta('canonical', url, true);
    setMeta('referrer', 'strict-origin-when-cross-origin');
    setMeta('format-detection', 'telephone=no');
    setMeta('apple-mobile-web-app-capable', 'yes');
    setMeta('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Add structured data - JSON-LD
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": author,
      "jobTitle": "Backend-Focused Full Stack Developer",
      "url": url,
      "sameAs": [
        "https://github.com/shakirsjd",
        "https://linkedin.com/in/shakirsjd",
        "https://twitter.com/shakirsjd",
        "https://leetcode.com/u/shakirsjd"
      ],
      "email": "shakirsjd@gmail.com",
      "image": `${url}/avatar.jpg`,
      "description": description,
      "knowsAbout": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT Authentication",
        "Database Design",
        "React.js",
        "JavaScript",
        "Full Stack Development",
        "Backend Architecture",
        "Scalable Systems"
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type, siteName, twitterHandle, author]);

  return null;
};

export default SEO;