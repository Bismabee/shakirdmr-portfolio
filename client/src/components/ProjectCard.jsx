import React from 'react';
import { Lock, Globe, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, type, desc, tags, link, live, theme }) => {
  const isPrivate = type === 'private';

  return (
    <a
      href={isPrivate ? undefined : link}
      target={isPrivate ? undefined : "_blank"}
      rel="noreferrer"
      className={`group relative block border ${theme.cardBg} ${isPrivate ? 'border-red-900/30' : theme.cardBorder} rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${isPrivate ? 'cursor-not-allowed' : 'cursor-pointer hover:border-gray-400'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
           {isPrivate ? (
             <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-red-500/10 text-red-500 text-[10px] font-mono border border-red-500/20 mb-2">
               <Lock size={10} /> PRIVATE REPO
             </span>
           ) : (
             <span className={`inline-flex items-center gap-1 px-2 py-1 rounded ${theme.name === 'dark' ? 'bg-emerald-950/30 text-emerald-400 border-emerald-900/50' : 'bg-blue-100 text-blue-600 border-blue-200'} text-[10px] font-mono border mb-2`}>
               <Globe size={10} /> LIVE DEPLOYMENT
             </span>
           )}
           <h3 className={`text-xl font-bold ${theme.textHead} group-hover:${theme.textAccent} transition-colors`}>{title}</h3>
        </div>
        {live && <ExternalLink size={18} className={`${theme.text} group-hover:${theme.textHead} transition-colors`} />}
      </div>

      <p className={`${theme.text} mb-6 text-sm leading-relaxed opacity-80`}>
        {isPrivate ? "Access restricted. Concept and architecture available upon request. " + desc : desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span key={i} className={`text-xs font-mono opacity-70 px-2 py-1 rounded border ${theme.name === 'dark' ? 'bg-gray-900 text-gray-500 border-gray-800' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Glitch Overlay for Private */}
      {isPrivate && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl">
           <div className="bg-black border border-red-500/50 px-4 py-2 rounded text-red-400 font-mono text-xs flex items-center gap-2">
             <Lock size={12} /> AUTH_REQUIRED
           </div>
        </div>
      )}
    </a>
  );
};

export default ProjectCard;