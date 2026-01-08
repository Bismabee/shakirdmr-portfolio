import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const PingMeBar = ({ theme }) => {
  return (
    <section className="mb-24 flex justify-center">
      <div className={`inline-flex items-center gap-6 px-8 py-4 ${theme.pingBar} backdrop-blur-md border ${theme.cardBorder} rounded-full ${theme.shadow} hover:${theme.border} transition-all group`}>
        <span className={`font-mono text-xs font-bold ${theme.textAccent} mr-2 tracking-widest uppercase border-r ${theme.border} pr-6`}>
          Ping Me At
        </span>

        <a href="https://github.com/shakirdmr" target="_blank" rel="noreferrer" className={`${theme.text} hover:scale-110 transition-all hover:${theme.textHead}`}>
          <Github size={20} />
        </a>
        <a href="https://x.com/shakirdmr" target="_blank" rel="noreferrer" className={`${theme.text} hover:text-[#1DA1F2] hover:scale-110 transition-all`}>
          <Twitter size={20} />
        </a>
        <a href="https://www.linkedin.com/in/shakirdmr/" target="_blank" rel="noreferrer" className={`${theme.text} hover:text-[#0A66C2] hover:scale-110 transition-all`}>
          <Linkedin size={20} />
        </a>
      </div>
    </section>
  );
};

export default PingMeBar;