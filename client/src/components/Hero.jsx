import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code2, Twitter } from 'lucide-react';

const Hero = ({ theme, isDark }) => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    const startDate = new Date(2014, 11, 1); // December 2014
    const today = new Date();
    const years = today.getFullYear() - startDate.getFullYear();
    const months = today.getMonth() - startDate.getMonth();
    
    const totalMonths = years * 12 + months;
    const displayYears = Math.floor(totalMonths / 12);
    setYearsOfExperience(displayYears);
  }, []);

  return (
    <section className="mt-12 md:mt-16 mb-12">
      <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-2xl p-8 md:p-12 relative overflow-hidden group transition-colors duration-500`}>
        {/* Ambient Glow */}
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-700 ${isDark ? 'bg-emerald-500/5 group-hover:bg-emerald-500/10' : 'bg-blue-500/5 group-hover:bg-blue-500/10'}`}></div>

        <div className="relative z-10 text-center">
          {/* Social Links - Main Attraction */}
          <div className="mb-12">
            <p className={`text-sm font-mono ${theme.textAccent} mb-6 tracking-widest uppercase opacity-80`}>Connect With Me</p>
            <div className="flex items-center justify-center gap-6 md:gap-8">
              <a 
                href="https://github.com/shakirdmr" 
                target="_blank" 
                rel="noreferrer"
                className={`p-4 rounded-xl transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                title="GitHub"
              >
                <Github size={36} />
              </a>
              <a 
                href="https://linkedin.com/in/shakirdmr" 
                target="_blank" 
                rel="noreferrer"
                className={`p-4 rounded-xl transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-blue-400' : 'hover:bg-gray-100 text-blue-600'}`}
                title="LinkedIn"
              >
                <Linkedin size={36} />
              </a>
              <a 
                href="https://leetcode.com/u/shakirdmr" 
                target="_blank" 
                rel="noreferrer"
                className={`p-4 rounded-xl transition-all hover:scale-125 font-bold ${isDark ? 'hover:bg-gray-800 text-yellow-500' : 'hover:bg-gray-100 text-yellow-600'}`}
                title="LeetCode"
              >
                <Code2 size={36} />
              </a>
              <a 
                href="https://twitter.com/shakirdmr" 
                target="_blank" 
                rel="noreferrer"
                className={`p-4 rounded-xl transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-blue-300' : 'hover:bg-gray-100 text-blue-500'}`}
                title="Twitter"
              >
                <Twitter size={36} />
              </a>
            </div>
          </div>

          {/* Years and Summary */}
          <div>
            <h1 className={`text-5xl md:text-7xl font-bold ${theme.textHead} mb-4 tracking-tight`}>
              {yearsOfExperience}+<span className={theme.textAccent}> Years</span>
            </h1>
            <p className={`${theme.text} max-w-2xl mx-auto text-lg md:text-xl leading-relaxed`}>
              Backend-focused full stack developer building scalable systems with Node.js, Express, and MongoDB. Strong foundation in REST APIs, JWT authentication, and database architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;