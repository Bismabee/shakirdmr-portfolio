import React from 'react';

const TimelineItem = ({ year, title, company, content, isLast, theme }) => (
  <div className="relative pl-8 md:pl-16 group transition-colors duration-500">
    {/* Dot on Track */}
    <div className={`absolute -left-[5px] md:-left-[41px] top-1 h-3 w-3 rounded-full ${theme.bg} border-2 ${theme.name === 'dark' ? 'border-gray-600 group-hover:border-emerald-500' : 'border-gray-400 group-hover:border-blue-600'} group-hover:scale-125 transition-all z-20`} />

    <div className="flex flex-col gap-1 mb-2">
      <span className={`font-mono ${theme.textAccent} text-sm font-bold`}>{year}</span>
      <h3 className={`text-lg font-bold ${theme.textHead} group-hover:translate-x-1 transition-transform`}>{title}</h3>
      {company && <p className={`text-sm ${theme.text} opacity-70 font-medium`}>{company}</p>}
    </div>
    <p className={`${theme.text} text-sm leading-relaxed max-w-lg opacity-80`}>
      {content}
    </p>
  </div>
);

export default TimelineItem;