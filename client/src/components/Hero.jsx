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
      <div className={`${theme.cardBg} rounded-2xl p-8 md:p-12 relative overflow-hidden group transition-colors duration-500 ${isDark ? 'gradient-border-dark' : 'gradient-border-light'}`}>
        {/* Ambient Glow */}
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-700 ${isDark ? 'bg-emerald-500/5 group-hover:bg-emerald-500/10' : 'bg-blue-500/5 group-hover:bg-blue-500/10'}`}></div>

        <div className="relative z-10 text-center ">
          {/* Social Links - Main Attraction */}
          <div className="mb-12 bg-amber-100 rounded-3xl py-4 md:py-5 px-4 md:px-6 border-amber-200 overflow-x-auto">
            <p className={`text-sm font-mono ${theme.textAccent} mb-4 md:mb-6 tracking-widest uppercase opacity-80`}>Connect With Me</p>
            <div className="flex items-center justify-center gap-3 md:gap-6 min-w-max md:min-w-0">
              <a 
                href="https://github.com/shakirdmr" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 md:p-4 rounded-xl transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                title="GitHub"
              >
                <Github size={24} className="md:w-9 md:h-9" />
              </a>
              <a 
                href="https://linkedin.com/in/shakirsjdd" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 md:p-4 rounded-xl transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-blue-400' : 'hover:bg-gray-100 text-blue-600'}`}
                title="LinkedIn"
              >
                <Linkedin size={24} className="md:w-9 md:h-9" />
              </a>
              <a 
                href="https://leetcode.com/u/shakirsjd" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 md:p-4 rounded-xl transition-all hover:scale-125 font-bold ${isDark ? 'hover:bg-gray-800 text-yellow-500' : 'hover:bg-gray-100 text-yellow-600'}`}
                title="LeetCode"
              >
                <Code2 size={24} className="md:w-9 md:h-9" />
              </a>
              <a 
                href="https://twitter.com/shakirsjd" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 md:p-4 rounded-xl transition-all hover:scale-125 ${isDark ? 'hover:bg-gray-800 text-blue-300' : 'hover:bg-gray-100 text-blue-500'}`}
                title="Twitter"
              >
                <Twitter size={24} className="md:w-9 md:h-9" />
              </a>
            </div>
          </div>

          {/* Years and Summary */}
          <div>
            <div className="mb-6">
              <h1 className={`text-5xl md:text-7xl font-bold ${theme.textHead} tracking-tight`}>
                {yearsOfExperience}+
              </h1>
              <div className="flex items-center justify-center gap-2 mt-3">
                {Array.from({ length: Math.min(yearsOfExperience, 11) }).map((_, i) => (
                  <div key={i} className={`h-1 w-3 rounded-full ${isDark ? 'bg-emerald-500' : 'bg-blue-600'}`}></div>
                ))}
              </div>
              <p className={`${theme.text} text-sm mt-3 font-mono`}>Started with C++ in Dec 2014</p>
            </div>
            <p className={`${theme.textHead} max-w-2xl mx-auto text-xl md:text-2xl font-semibold mb-4`}>Years of Coding</p>
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