import React from 'react';
import { Terminal } from 'lucide-react';
import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';

const Experience = ({ theme }) => {
  const experiences = [
    {
      year: "2025",
      title: "Founder & Builder",
      content: "Shipping multiple SaaS products including SuperWaitlist and InvoiceGPT. Focusing on user acquisition and scale."
    },
    {
      year: "2023",
      title: "Full-Stack Developer",
      content: "Mastered the MERN stack. Built production-grade applications with complex state management and auth."
    },
    {
      year: "2017",
      title: "Initial Commit",
      content: "Started the journey. From simple HTML/CSS to complex distributed systems.",
      isLast: true
    }
  ];

  return (
    <section>
      <SectionHeader title="02. THE TRACK" icon={<Terminal size={16} />} theme={theme} />
      <div className={`relative border-l-2 ${theme.border} ml-3 md:ml-0 space-y-12 pl-8 md:pl-0 transition-colors duration-500`}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} theme={theme} />
        ))}
      </div>
    </section>
  );
};

export default Experience;