'use client';

import React from 'react';
import { FiFolder, FiPlus, FiExternalLink, FiGithub } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 1,
    title: 'AnonBox — Anonymous Messaging App',
    subtitle: 'Full-Stack Application',
    description: 'A full-stack web application that allows users to receive and send messages anonymously with secure backend API integration.',
    liveUrl: 'https://anonbox-ruby.vercel.app/',
    githubUrl: 'https://github.com/prathamverma77/anonbox',
  },
  {
    id: 2,
    title: 'Full-Stack E-Commerce Platform',
    subtitle: 'E-Commerce & Admin Dashboards',
    description: 'A complete full-stack E-Commerce web application built with Admin and User dashboards for managing product catalogs.',
    liveUrl: 'http://github.com/prathamverma77/e-commerce-project',
    githubUrl: 'http://github.com/prathamverma77/e-commerce-project',
  },
  {
    id: 3,
    title: 'Personal Developer Portfolio',
    subtitle: 'Live Portfolio Website',
    description: 'A modern, high-performance personal portfolio built with Next.js & Tailwind CSS to showcase developer experience.',
    liveUrl: 'https://pratham-portfolio-sooty.vercel.app/',
    githubUrl: 'https://github.com/prathamverma77/personal-portfolio',
  },
];

export default function ProjectsDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2.5">
            <FiFolder className="text-xl" /> Projects
          </h1>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-1">
            Manage your featured portfolio projects and repositories
          </p>
        </div>

        <button className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-xs cursor-pointer">
          <FiPlus className="text-sm" /> Add New Project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 flex flex-col justify-between shadow-xs"
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-1">
                {proj.subtitle}
              </span>
              <h3 className="text-base font-bold text-[var(--foreground)] mb-2">
                {proj.title}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
                {proj.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] inline-flex items-center gap-1"
              >
                <FiGithub /> Repository
              </a>
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[var(--foreground)] hover:underline inline-flex items-center gap-1"
              >
                Live <FiExternalLink className="text-[10px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
