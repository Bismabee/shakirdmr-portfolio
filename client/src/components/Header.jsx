import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Sun, Moon, FileText } from 'lucide-react';

const Header = ({ isDark, setIsDark, theme }) => {
  return (
    <header className={`flex justify-between items-center py-6 backdrop-blur-sm sticky top-0 z-50 ${theme.navBg} ${theme.border} border-b mb-12 transition-colors duration-500`}>
      <div className="flex items-center gap-4 md:gap-6">
        {/* Avatar */}
        <img 
          src="/avatar.jpg" 
          alt="Shakir Sajad" 
          className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 hover:border-emerald-400 transition-colors"
        />
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-mono text-lg font-bold tracking-tighter ${theme.textHead}`}>/.shakirdmr</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className={`font-mono text-sm ${theme.text} hover:${theme.textAccent} transition-colors`}>Home</Link>
          <Link to="/projects" className={`font-mono text-sm ${theme.text} hover:${theme.textAccent} transition-colors`}>Projects</Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-sm transition-colors ${isDark ? 'hover:bg-gray-800 text-emerald-400 hover:text-emerald-300' : 'hover:bg-gray-100 text-blue-600 hover:text-blue-700'}`}
        >
          <FileText size={18} />
          CV
        </a>
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