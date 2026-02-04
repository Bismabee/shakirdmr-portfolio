import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';

const Experience = ({ theme }) => {
  const experiences = [
    {
      year: "May 2023 — Dec 2024",
      title: "Full Stack Developer (Backend-Focused)",
      company: "Foodify Corporation Pvt. Ltd",
      content: "Built backend services using Node.js, Express.js, and MongoDB powering a college food management system. Designed REST APIs and database schemas for 5,000+ active users. Optimized backend processes contributing to 20% reduction in food wastage."
    },
    {
      year: "Jan 2022 — Jan 2023",
      title: "Computer Science Q&A Expert",
      company: "Chegg Inc. (Remote)",
      content: "Solved and reviewed data structures, algorithms, and C/C++ problems with focus on correctness and performance optimization."
    },
    {
      year: "Dec 2021 — Sep 2022",
      title: "Mathematics & CS Instructor",
      company: "Payam Educational Academy",
      content: "Taught mathematics and computer science fundamentals, strengthening analytical thinking and problem-solving skills.",
      isLast: true
    }
  ];

  return (
    <section>
      <SectionHeader title="02. EXPERIENCE" icon={<Briefcase size={16} />} theme={theme} />
      <div className={`relative border-l-2 ${theme.border} ml-3 md:ml-0 space-y-12 pl-8 md:pl-0 transition-colors duration-500`}>
        {experiences.map((exp, index) => (
          <article key={index}>
            <TimelineItem {...exp} theme={theme} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;