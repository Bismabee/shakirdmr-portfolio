import React from 'react';
import { Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const Projects = ({ theme }) => {
  const projects = [
    {
      title: "SuperWaitlist",
      type: "public",
      desc: "Backend-driven early access platform using Node.js and MongoDB. Designed REST APIs for email capture and admin workflows enabling fast onboarding and scalable data handling.",
      tags: ['Node.js', 'MongoDB', 'REST APIs', 'SaaS'],
      link: "https://www.superwaitlist.xyz/",
      live: true
    },
    {
      title: "SpaceSync",
      type: "public",
      desc: "Real-time chat application built with MERN stack. Backend powered by Node.js and Express with JWT authentication. Integrated with React frontend for scalable user communication.",
      tags: ['MERN', 'Node.js', 'JWT', 'Real-time'],
      link: "#",
      live: false
    },
    {
      title: "InvoiceGPT",
      type: "public",
      desc: "Generate professional invoices instantly using AI. Streamlined billing for freelancers.",
      tags: ['React', 'OpenAI API', 'PDF Gen'],
      link: "https://www.invoicegpt.org/",
      live: true
    },
    {
      title: "ImageSmith",
      type: "public",
      desc: "Intelligent image compression. Reduces 10MB images to ~100KB without visible quality loss.",
      tags: ['React', 'Image Processing', 'WebAssembly'],
      link: "https://www.imagesmith.store/",
      live: true
    },
    {
      title: "ShitLabs",
      type: "public",
      desc: "Product studio portfolio & software services agency. Modern design aesthetics.",
      tags: ['React', 'Tailwind', 'Agency'],
      link: "https://www.shitlabs.xyz/",
      live: true
    }
  ];

  return (
    <section className={`relative -mx-6 px-6 py-12 md:py-16 ${theme.name === 'dark' ? 'bg-white/[0.02]' : 'bg-gray-900/[0.03]'} rounded-2xl`}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="01. LIVE PROJECTS" icon={<Globe size={16} />} theme={theme} />
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <article key={index}>
              <ProjectCard {...project} theme={theme} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;