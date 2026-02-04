import React from 'react';

const Footer = ({ theme, isDark }) => {
  return (
    <footer className={`pt-12 border-t ${theme.border} transition-all duration-500 pb-12 -mx-6 px-6 ${isDark ? 'bg-black hover:bg-black/50 text-white' : 'bg-black hover:bg-gray-900/30 text-gray-100'}`}>
      <div className="text-center space-y-4">
        <p className={`text-base leading-relaxed transition-colors duration-500`}>
          Built with clean code, backed by practical experience.
        </p>
        <div className={`flex justify-center gap-6 text-sm font-mono opacity-70 transition-colors duration-500`}>
          <a href="mailto:shakirsjd@gmail.com" className="hover:opacity-100 transition-opacity">Email</a>
          <a href="https://github.com/shakirsjd" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
          <a href="https://linkedin.com/in/shakirsjd" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
        </div>
      </div>

      <div className="text-center mt-12 opacity-50 text-sm font-mono transition-colors duration-500">
        © {new Date().getFullYear()} Shakir Sajad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;