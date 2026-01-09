import React from 'react';
import { Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const Projects = ({ theme }) => {
  const projects = [
    {
      title: "SuperWaitlist",
      type: "public",
      desc: "Create a high-converting waitlist for any idea in seconds. Rapid deployment tool for indie hackers.",
      tags: ['Next.js', 'MongoDB', 'SaaS'],
      link: "https://www.superwaitlist.xyz/",
      live: true
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
    },
    {
      title: "Unicon",
      type: "private",
      desc: "Scalable MERN application with role-based auth, real-time chat, and Redux state management.",
      tags: ['MERN', 'Redux Toolkit', 'Socket.io'],
      link: "#",
      live: false
    }
  ];

  return (
    <section className="relative">
      <SectionHeader title="01. LIVE PROJECTS" icon={<Globe size={16} />} theme={theme} />
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <article key={index}>
            <ProjectCard {...project} theme={theme} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;