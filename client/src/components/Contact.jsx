import React from 'react';
import { Mail } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Contact = ({ theme }) => {
  return (
    <section>
      <SectionHeader title="03. GET IN TOUCH" icon={<Mail size={16} />} theme={theme} />
      <div className={`${theme.cardBg} ${theme.cardBorderGradient} rounded-2xl p-8 transition-colors duration-500`}>
        <p className={`${theme.text} text-lg mb-6 leading-relaxed`}>
          Open to freelance opportunities, collaborations, and interesting conversations. Let's build something amazing together.
        </p>
        <a 
          href="mailto:shakirsjd@gmail.com"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-bold transition-all ${
            theme.name === 'dark' 
              ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300' 
              : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30 hover:text-blue-700'
          }`}
        >
          <Mail size={20} />
          shakirsjd@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;