import React from 'react';

// Pure inline SVG components for each technology
const TechIcons: Record<string, React.JSX.Element> = {
  React: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  ),
  'Next.js': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 1022 12 10 10 0 0012 2zm4.5 13.5L9.75 6.75H8.25v10.5h1.5V9.6l5.4 8.7a8.5 8.5 0 01-2.15.7z" />
    </svg>
  ),
  TypeScript: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10.5 7.5h-2.25v6h-1.5v-6H7.5V9h6v1.5zm5.25 1.5a2.25 2.25 0 00-2.25-2.25h-2.25V18h1.5v-2.25h.75l1.5 2.25h1.8l-1.8-2.55a2.25 2.25 0 001.35-1.95z" />
    </svg>
  ),
  JavaScript: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm11.5 13.2a2.4 2.4 0 001.9-.9l1.4 1a4 4 0 01-3.3 1.6c-2.4 0-3.8-1.4-3.8-3.6v-3.7h1.9v3.7c0 .9.5 1.4 1.4 1.4zm-4.7-.9a1.9 1.9 0 00-1.6.8l-1.4-1a3.5 3.5 0 013-1.5c1.8 0 3.2 1.1 3.2 3v3.7h-1.9v-3.7c0-.8-.5-1.3-1.3-1.3z" />
    </svg>
  ),
  'Tailwind CSS': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6c-3.3 0-5.3 1.6-6 4.9 1.3-1.6 2.8-2.2 4.5-1.7 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 6.5 2.8 3.3 0 5.3-1.6 6-4.9-1.3 1.6-2.8 2.2-4.5 1.7-1-.3-1.7-1-2.5-1.8C17.2 7.6 15.7 6 12 6zM6 13.9c-3.3 0-5.3 1.6-6 4.9 1.3-1.6 2.8-2.2 4.5-1.7 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 6.5 2.8 3.3 0 5.3-1.6 6-4.9-1.3 1.6-2.8 2.2-4.5 1.7-1-.3-1.7-1-2.5-1.8-1.3-1.3-2.8-2.9-6.5-2.9z" />
    </svg>
  ),
  HTML5: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm14.4 5.3H8.3l.3 3.2h8.5l-.7 7.7-4.5 1.2-4.5-1.2-.3-3.3h2.6l.2 1.6 2 .5 2-.5.2-2.4H6.9L6 4.3h11.7l-.3 3z" />
    </svg>
  ),
  CSS3: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm14.3 8.5H8.6l.3 3.2h8.1l-.7 7.7-4.3 1.2-4.3-1.2-.3-3.3h2.6l.2 1.6 1.8.5 1.8-.5.2-2.4H6.7L6 4.3h11.6l-.3 3.2z" />
    </svg>
  ),
  'Node.js': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm7.5 13.6L12 19.8l-7.5-4.2V8.4L12 4.2l7.5 4.2v7.2z" />
    </svg>
  ),
  'Express.js': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zm10-5h-3v10h3a5 5 0 000-10zm-1.5 2.5h1.5a2.5 2.5 0 010 5h-1.5v-5z" />
    </svg>
  ),
  FastAPI: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5l-4-5h3V6.5l4 5h-3v5z" />
    </svg>
  ),
  Python: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-4 0-4.5 1.7-4.5 3.5V7h4.5v1H5.5C3.7 8 2 9.5 2 12.5s1.7 4.5 3.5 4.5H7v-2.5c0-1.8 1.5-3.5 3.5-3.5h4.5V9.5C15 7.7 13.5 6 12 6zm-1.5 2.5a.8.8 0 110-1.6.8.8 0 010 1.6zM12 22c4 0 4.5-1.7 4.5-3.5V17h-4.5v-1h6.5c1.8 0 3.5-1.5 3.5-4.5s-1.7-4.5-3.5-4.5H17v2.5c0 1.8-1.5 3.5-3.5 3.5H9v1.5c0 1.8 1.5 3.5 3 3.5zm1.5-2.5a.8.8 0 110 1.6.8.8 0 010-1.6z" />
    </svg>
  ),
  'REST APIs': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" />
    </svg>
  ),
  JWT: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4zm0 4a3 3 0 013 3c0 1.3-.8 2.4-2 2.8V15h-2v-3.2A3 3 0 0112 6z" />
    </svg>
  ),
  MongoDB: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2s-6 5.6-6 11.5C6 17.5 8.7 21 12 22c3.3-1 6-4.5 6-8.5C18 7.6 12 2 12 2zm.5 17.8v-7.3c1.3.3 2.5 1.3 2.5 3 0 2.2-1.4 3.7-2.5 4.3z" />
    </svg>
  ),
  MySQL: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C7 3 3 5.7 3 9v6c0 3.3 4 6 9 6s9-2.7 9-6V9c0-3.3-4-6-9-6zm0 3.5c3.6 0 6.5 1.6 6.5 3.5S15.6 13.5 12 13.5 5.5 11.9 5.5 10 8.4 6.5 12 6.5z" />
    </svg>
  ),
  Mongoose: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5v7.4l-7 3.5-7-3.5V8.3l7-3.5z" />
    </svg>
  ),
  Git: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 00-2.4 0L8.4 4.7l3 3a2 2 0 012.3 2.3l3 3a2 2 0 11-1.2 1.2l-2.7-2.7v4.6a2 2 0 11-1.7 0V11a2 2 0 011-1.7L9.5 6.7 2.4 13.8a1.7 1.7 0 000 2.4l8.5 8.5a1.7 1.7 0 002.4 0l8.3-8.3a1.7 1.7 0 000-2.4z" />
    </svg>
  ),
  GitHub: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Postman: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.8 14.5l-3.3-3.3h5l-1.7 3.3zm2.7-5.5H8.5l3.5-3.5 3.5 3.5z" />
    </svg>
  ),
  Vercel: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L24 22H0L12 2z" />
    </svg>
  ),
  Render: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 3.5l7 3.8v7.4l-7 3.8-7-3.8V9.3l7-3.8z" />
    </svg>
  ),
  'Cloudflare R2': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  ),
};

const STACK_CATEGORIES = [
  {
    category: 'Frontend',
    description: 'Interfaces and applications with React, Next.js and TypeScript.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    description: 'REST APIs, server-side logic and authentication with Node.js and FastAPI.',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs', 'JWT'],
  },
  {
    category: 'Database',
    description: 'Persistent data storage, schema design, and relational / document databases.',
    skills: ['MongoDB', 'MySQL', 'Mongoose'],
  },
  {
    category: 'Tools & Infrastructure',
    description: 'Workflow optimization, version control, API testing, and cloud deployment.',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Cloudflare R2'],
  },
];

const MyStack = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Tech Stack
          </h2>
        </div>

        {/* Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {STACK_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-[var(--brand-accent)]/40 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">
                  {cat.category}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Cards without rating/percentages */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.skills.map((skillName) => (
                    <div
                      key={skillName}
                      className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5"
                    >
                      <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                        {TechIcons[skillName] || (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm font-semibold text-[var(--foreground)] truncate">
                        {skillName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Focus Line
        <div className="flex items-center justify-center p-4 rounded-[var(--radius)] bg-[var(--accent)]/40 border border-[var(--border)] text-xs sm:text-sm text-[var(--muted-foreground)] text-center font-medium">
          <span>
            <strong className="text-[var(--foreground)]">Currently focused on:</strong> Backend engineering · API design · Database architecture · System design
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default MyStack;
