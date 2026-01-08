import React from 'react';
import { Github, Sun, Moon } from 'lucide-react';

const Header = ({ isDark, setIsDark, theme }) => {
  return (
    <header className={`flex justify-between items-center py-6 backdrop-blur-sm sticky top-0 z-50 ${theme.navBg} ${theme.border} border-b mb-12 transition-colors duration-500`}>
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 ${isDark ? 'bg-emerald-500' : 'bg-blue-600'} rounded-full animate-pulse`} />
        <span className={`font-mono text-lg font-bold tracking-tighter ${theme.textHead}`}>/.shakirdmr</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'}`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="https://github.com/shakirdmr" target="_blank" rel="noreferrer" className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'}`}>
          <Github size={20} />
        </a>
      </div>
    </header>
  );
};

export default Header;