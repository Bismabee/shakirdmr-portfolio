import { useEffect } from 'react';

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

  useEffect(() => {
    // Set page title
    document.title = title;

    // Function to set or update meta tag
    const setMeta = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property ? name : name}"]`);
      
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
    setMeta('author', 'Shakir Dmr');
    setMeta('robots', 'index, follow');

    // Set Open Graph tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', `${url}${image}`, true);
    setMeta('og:url', url, true);
    setMeta('og:type', type, true);
    setMeta('og:site_name', siteName, true);

    // Set Twitter/X tags
    setMeta('twitter:card', 'summary_large_image', true);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', description, true);
    setMeta('twitter:image', `${url}${image}`, true);
    setMeta('twitter:creator', twitterHandle, true);

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Set viewport
    setMeta('viewport', 'width=device-width, initial-scale=1.0');
  }, [title, description, keywords, image, url, type, siteName, twitterHandle]);

  return null;
};

export default SEO;