import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PingMeBar from '../components/PingMeBar';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { THEMES } from '../themes';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);
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
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-500 ${theme.selection}`}>
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none transition-all duration-500"
           style={{ backgroundImage: theme.bgPattern, backgroundSize: '30px 30px' }}>
      </div>

      {/* Progress Line */}
      <div className={`fixed left-6 md:left-1/2 top-0 bottom-0 w-px ${theme.track} z-0 hidden sm:block transition-colors duration-500`}>
        <div
          className={`absolute top-0 left-0 w-full ${theme.trackFill} transition-all duration-100 ease-out`}
          style={{ height: `${scrollProgress * 100}%`, boxShadow: isDark ? '0 0 10px rgba(16,185,129,0.5)' : 'none' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        <Header isDark={isDark} setIsDark={setIsDark} theme={theme} />

        <Hero theme={theme} isDark={isDark} />

        <PingMeBar theme={theme} />

        <div className="space-y-24 relative pb-20">

          <Projects theme={theme} />

          <Experience theme={theme} />

          <Contact theme={theme} />

          <Footer theme={theme} isDark={isDark} />

        </div>
      </div>
    </div>
  );
};

export default Home;