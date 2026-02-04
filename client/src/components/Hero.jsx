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
    <section className="mt-4 md:mt-6 mb-2 md:mb-4">
      <div className={`${theme.cardBg} rounded-2xl p-5 md:p-8 relative overflow-hidden group transition-colors duration-500 ${isDark ? 'gradient-border-dark' : 'gradient-border-light'}`}>
        {/* Ambient Glow */}
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-700 ${isDark ? 'bg-emerald-500/5 group-hover:bg-emerald-500/10' : 'bg-blue-500/5 group-hover:bg-blue-500/10'}`}></div>

        <div className="relative z-10 text-center">
          {/* Social Links - Main Attraction */}
          <div className="mb-6 bg-amber-100 rounded-3xl py-2 md:py-3 px-3 md:px-5 border-amber-200 overflow-x-auto">
            <p className={`text-xs md:text-sm font-mono ${theme.textAccent} mb-2 md:mb-3 tracking-widest uppercase opacity-80`}>Connect With Me</p>
            <div className="flex items-center justify-center gap-2 md:gap-5 min-w-max md:min-w-0">
              <a 
                href="https://github.com/shakirdmr" 
                target="_blank" 
                rel="noreferrer"
                className={`p-1.5 md:p-3 rounded-lg transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                title="GitHub"
              >
                <Github size={20} className="md:w-8 md:h-8" />
              </a>
              <a 
                href="https://linkedin.com/in/shakirsjdd" 
                target="_blank" 
                rel="noreferrer"
                className={`p-1.5 md:p-3 rounded-lg transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-blue-400' : 'hover:bg-gray-100 text-blue-600'}`}
                title="LinkedIn"
              >
                <Linkedin size={20} className="md:w-8 md:h-8" />
              </a>
              <a 
                href="https://leetcode.com/u/shakirsjd" 
                target="_blank" 
                rel="noreferrer"
                className={`p-1.5 md:p-3 rounded-lg transition-all hover:scale-125 font-bold ${isDark ? 'hover:bg-gray-800 text-yellow-500' : 'hover:bg-gray-100 text-yellow-600'}`}
                title="LeetCode"
              >
                <Code2 size={20} className="md:w-8 md:h-8" />
              </a>
              <a 
                href="https://twitter.com/shakirsjd" 
                target="_blank" 
                rel="noreferrer"
                className={`p-1.5 md:p-3 rounded-lg transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-blue-300' : 'hover:bg-gray-100 text-blue-500'}`}
                title="Twitter"
              >
                <Twitter size={20} className="md:w-8 md:h-8" />
              </a>
            </div>
          </div>

          {/* Years and Summary */}
          <div>
            <div className="mb-2 md:mb-3">
              <h1 className={`text-4xl md:text-5xl font-bold ${theme.textHead} tracking-tight`}>
                {yearsOfExperience}+
              </h1>
              <div className="flex items-center justify-center gap-1.5 mt-1.5">
                {Array.from({ length: Math.min(yearsOfExperience, 11) }).map((_, i) => (
                  <div key={i} className={`h-1 w-2 rounded-full ${isDark ? 'bg-emerald-500' : 'bg-blue-600'}`}></div>
                ))}
              </div>
              <p className={`${theme.text} text-xs md:text-sm mt-1.5 font-mono`}>Started with C++ in Dec 2014</p>
            </div>
            <p className={`${theme.textHead} max-w-2xl mx-auto text-base md:text-lg font-semibold mb-2`}>Years of Coding</p>
            <p className={`${theme.text} max-w-2xl mx-auto text-sm md:text-base leading-relaxed`}>
              Backend-focused full stack developer building scalable systems with Node.js, Express, and MongoDB. Strong foundation in REST APIs, JWT authentication, and database architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;