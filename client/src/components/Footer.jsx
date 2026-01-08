import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SnakeGame from './SnakeGame';

const Footer = ({ theme, isDark }) => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <footer className={`pt-12 border-t ${theme.border} transition-colors duration-500 pb-12`}>
      <div
        onClick={() => setIsGameOpen(!isGameOpen)}
        className="text-center cursor-pointer group select-none"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <h2 className={`text-3xl md:text-5xl font-black ${theme.textHead} uppercase tracking-tighter group-hover:${theme.textAccent} transition-colors`}>
            Retro Snake
          </h2>
          <div className={`p-2 rounded-full ${isDark ? 'bg-gray-900 group-hover:bg-gray-800' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors`}>
            <ChevronDown className={`${theme.textHead} transition-transform duration-300 ${isGameOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>
        <p className={`font-mono ${theme.textAccent} text-sm mb-8 opacity-70 group-hover:opacity-100`}>
          {isGameOpen ? "HIGHSCORE_CHALLENGE.EXE [RUNNING]" : "CLICK TO BOOT HIGHSCORE_CHALLENGE.EXE"}
        </p>
      </div>

      {isGameOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <SnakeGame theme={theme} isDark={isDark} />
        </div>
      )}

      <div className="text-center mt-12 opacity-50 text-sm font-mono">
        © {new Date().getFullYear()} Built with React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;