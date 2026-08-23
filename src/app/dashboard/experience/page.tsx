'use client';

import React from 'react';
import { FiBriefcase, FiPlus, FiCalendar } from 'react-icons/fi';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Full-Stack Developer (MERN STACK + FastAPI)',
    company: 'Aronix Web Technology',
    period: 'May 2026 – Present',
    description: 'Developed and maintained frontend and backend features using Next.js, React, TypeScript, Python, and FastAPI.',
  },
  {
    id: 2,
    role: 'Full-Stack Developer (MERN STACK)',
    company: 'Concept Power',
    period: 'Feb 2026 – Apr 2026',
    description: 'Built responsive web applications, backend REST APIs, MongoDB data integration, and live deployments.',
  },
  {
    id: 3,
    role: 'Full-Stack Developer Intern (MERN STACK)',
    company: 'VSIT Coding Institute',
    period: 'Oct 2025 – Jan 2026',
    description: 'Worked with React.js, Node.js/Express, MongoDB, and WordPress layout customization.',
  },
];

export default function ExperienceDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2.5">
            <FiBriefcase className="text-xl" /> Work Experience
          </h1>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-1">
            Manage your work history timeline, roles, and organisation badges
          </p>
        </div>

        <button className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-xs cursor-pointer">
          <FiPlus className="text-sm" /> Add Experience
        </button>
      </div>

      {/* Experience Timeline List */}
      <div className="space-y-4">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded bg-[var(--foreground)] text-[var(--background)] font-bold text-xs">
                  {exp.company}
                </span>
                <span className="text-xs text-[var(--muted-foreground)] inline-flex items-center gap-1 font-semibold">
                  <FiCalendar /> {exp.period}
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--foreground)] mt-1">
                {exp.role}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] mt-1 max-w-2xl leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
