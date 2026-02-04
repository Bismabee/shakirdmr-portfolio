import React from 'react';
import { Code2 } from 'lucide-react';

const Technologies = ({ theme }) => {
  // Using official logo CDN
  const technologies = [
    { 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'Express.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    { 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'SQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    { 
      name: 'C++', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    }
  ];

  return (
    <section className="my-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Code2 size={20} className={theme.textAccent} />
          <p className={`text-sm font-mono ${theme.textAccent} tracking-widest uppercase opacity-80`}>
            Tech Stack
          </p>
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold ${theme.textHead}`}>
          Technologies I Use
        </h2>
      </div>

      <div className={`${theme.cardBg} ${theme.cardBorderGradient} rounded-2xl p-8 md:p-12 transition-colors duration-500`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center group cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <div className={`w-16 h-16 mb-3 transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center`}>
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <p className={`text-sm font-mono font-bold ${theme.textHead} group-hover:${theme.textAccent} transition-colors`}>
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
