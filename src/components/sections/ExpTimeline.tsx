import React from 'react';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Full Stack Web Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description:
      'Architected and implemented responsive web applications using Next.js, React, and TypeScript. Optimized backend database queries and REST APIs for higher throughput.',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    role: 'Frontend Developer Intern',
    company: 'Digital Craft Studio',
    period: '2022 - 2023',
    description:
      'Collaborated with designers and backend engineers to build interactive UI components, improve accessibility, and optimize web performance metrics.',
    skills: ['React', 'JavaScript', 'CSS3', 'REST APIs', 'Git'],
  },
  {
    id: 3,
    role: 'Software Engineering Projects',
    company: 'Self-Directed & Open Source',
    period: '2021 - 2022',
    description:
      'Built end-to-end web applications, learned algorithmic problem solving, and actively contributed to open-source developer tools.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'MongoDB'],
  },
];

const ExpTimeline = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Career & Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Experience Timeline
          </h2>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-[var(--border)] ml-3 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--primary)] border-2 border-[var(--background)] group-hover:scale-125 transition-transform duration-200" />

              {/* Date Badge on Desktop Left Margin */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 md:mb-0">
                {exp.period}
              </div>

              {/* Experience Content Card */}
              <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--ring)] transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-1">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-[var(--muted-foreground)]">
                    {exp.company}
                  </span>
                </div>

                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]"
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
