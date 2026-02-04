import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { THEMES } from '../themes';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? THEMES.dark : THEMES.light;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO />
      <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-500 ${theme.selection}`}>
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none transition-all duration-500"
           style={{ backgroundImage: theme.bgPattern, backgroundSize: '30px 30px' }}>
      </div>

      <Header isDark={isDark} setIsDark={setIsDark} theme={theme} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        <Hero theme={theme} isDark={isDark} />

        <Technologies theme={theme} />

        <div className="space-y-24 relative pb-20">

          <Projects theme={theme} />

          <Experience theme={theme} />

          <Contact theme={theme} />

        </div>
      </div>

      <Footer theme={theme} isDark={isDark} />
    </div>
    </>
  );
};

export default Home;
