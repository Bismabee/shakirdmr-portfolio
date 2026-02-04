import React from 'react';

const Footer = ({ theme, isDark }) => {
  return (
    <footer className={`pt-12 border-t ${theme.border} transition-colors duration-500 pb-12`}>
      <div className="text-center space-y-4">
        <p className={`${theme.text} text-base leading-relaxed`}>
          Built with clean code, backed by practical experience.
        </p>
        <div className={`flex justify-center gap-6 text-sm font-mono ${theme.text} opacity-70`}>
          <a href="mailto:shakirsjd@gmail.com" className="hover:opacity-100 transition-opacity">Email</a>
          <a href="https://github.com/shakirdmr" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
          <a href="https://linkedin.com/in/shakirdmr" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
        </div>
      </div>

      <div className="text-center mt-12 opacity-50 text-sm font-mono">
        © {new Date().getFullYear()} Shakir Sajad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;