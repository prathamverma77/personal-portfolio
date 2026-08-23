import React from 'react';
import { FiExternalLink, FiCalendar, FiBriefcase } from 'react-icons/fi';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  liveProjects?: { name: string; url: string }[];
  skills: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Full-Stack Developer (MERN Stack + FastAPI)',
    company: 'Aronix Web Technology',
    period: 'May 2026 – Present',
    responsibilities: [
      'Developed and maintained web applications using Next.js, React, TypeScript, Python, and FastAPI.',
      'Built frontend features and integrated them with scalable backend REST APIs.',
      'Delivered and deployed production-ready web applications, resolving issues and optimizing functionality in live environments.',
    ],
    liveProjects: [
      { name: 'Aaru Mobility', url: 'https://aarumobility.com/' },
      { name: 'Aaru Care Foundation', url: 'https://aaru-care-foundation-fe.vercel.app/' },
    ],
    skills: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'React', 'Node.js', 'Production Deployment'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer (MERN Stack)',
    company: 'Concept Power',
    period: 'Feb 2026 – Apr 2026',
    responsibilities: [
      'Built responsive multi-page web applications using the MERN stack.',
      'Developed scalable e-commerce systems with a strong focus on backend architecture, API development, and data handling.',
      'Built and integrated RESTful APIs with Node.js, Express.js, and MongoDB, utilizing Git/GitHub for version control and live deployments.',
    ],
    liveProjects: [
      { name: 'Concept Power Group', url: 'https://www.conceptpowergroup.com/' },
      { name: 'Concept Power CRM', url: 'https://www.conceptpowercrm.com/' },
      { name: 'Concept Power CRM (IN)', url: 'https://conceptpowercrm.in/' },
    ],
    skills: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'E-Commerce', 'Git'],
  },
  {
    id: 3,
    role: 'Full-Stack Developer Intern (MERN Stack)',
    company: 'VSIT Coding Institute',
    period: 'Oct 2025 – Jan 2026',
    responsibilities: [
      'Built responsive web interfaces using React.js, Node.js/Express, and MongoDB.',
      'Customized website layouts and content using React and WordPress to build client-focused applications.',
      'Developed and deployed multiple landing pages ensuring clean UI and smooth user experience.',
    ],
    liveProjects: [
      { name: 'Pushkar Dental', url: 'https://pushkardental.com' },
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WordPress', 'UI/UX Design', 'Deployment'],
  },
];

const ExpTimeline = () => {
  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Career & Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Work Experience
          </h2>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-[var(--border)] ml-3 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--foreground)] border-2 border-[var(--background)] group-hover:scale-125 transition-transform duration-200" />

              {/* Date Badge on Desktop Left Margin */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 md:mb-0">
                {exp.period}
              </div>

              {/* Experience Content Card */}
              <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--foreground)]/30 transition-all duration-200">
                {/* Header: Role, Highlighted Organisation & Time Period */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5 pb-4 border-b border-[var(--border)]/60">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-extrabold text-[var(--foreground)] tracking-tight">
                      {exp.role}
                    </h3>
                    {/* Highlighted Organisation Name Badge */}
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)] font-bold text-xs shadow-xs tracking-wide">
                        <FiBriefcase className="text-xs" /> {exp.company}
                      </span>
                    </div>
                  </div>

                  {/* Prominent Duration / Time Period Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-xs font-bold self-start sm:self-auto shadow-2xs">
                    <FiCalendar className="text-xs text-[var(--muted-foreground)]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities List */}
                <ul className="list-disc list-inside space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="pl-1">
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Live Deployed Projects Links */}
                {exp.liveProjects && exp.liveProjects.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-[var(--border)]/60">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-2.5">
                      Live Deployed Work
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.liveProjects.map((project, pIdx) => (
                        <a
                          key={pIdx}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius)] text-xs font-medium bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/40 transition-colors"
                        >
                          {project.name} <FiExternalLink className="text-xs" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpTimeline;
