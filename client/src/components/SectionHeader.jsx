import React from 'react';

const SectionHeader = ({ title, icon, theme }) => (
  <div className="flex items-center gap-3 mb-8 md:-ml-8 transition-colors duration-500">
    <div className="md:w-16 md:flex justify-end hidden">
      <div className={`p-2 border rounded-lg ${theme.cardBg} ${theme.border} ${theme.textAccent}`}>
        {icon}
      </div>
    </div>
    <div className={`flex items-center gap-2 ${theme.textAccent} md:hidden`}>
       {icon}
    </div>
    <h2 className={`font-mono text-xl tracking-wider ${theme.textHead}`}>{title}</h2>
  </div>
);

export default SectionHeader;