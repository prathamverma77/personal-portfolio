import React from 'react';

const STACK_CATEGORIES = [
  {
    category: 'Frontend',
    description: 'Building responsive, high-performance user interfaces',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    description: 'Developing secure server-side logic and robust APIs',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express', level: 'Advanced' },
      { name: 'FastAPI', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'JWT Auth', level: 'Advanced' },
      { name: 'REST APIs', level: 'Advanced' },
    ],
  },
  {
    category: 'Database',
    description: 'Designing data schemas and managing persistent storage',
    skills: [
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'Firebase', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & DevOps',
    description: 'Workflow optimization, deployment, and version control',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Vercel', level: 'Advanced' },
      { name: 'Render', level: 'Intermediate' },
      { name: 'Docker', level: 'Learning' },
    ],
  },
];

const MyStack = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Capabilities & Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Tech Stack
          </h2>
        </div>

        {/* Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STACK_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-[var(--ring)] transition-all duration-200"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">
                  {cat.category}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Hover Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-3.5 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--ring)] hover:bg-[var(--background)] transition-all duration-200 flex flex-col justify-between"
                    >
                      <span className="text-sm font-semibold text-[var(--foreground)] mb-1">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-medium text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                        {skill.level}
                      </span>
                    </div>
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

export default MyStack;
