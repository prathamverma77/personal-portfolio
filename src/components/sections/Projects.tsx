'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 1,
    title: 'AnonBox — Anonymous Messaging App',
    subtitle: 'Full-Stack Application',
    description:
      'A full-stack web application that allows users to receive and send messages anonymously with secure backend API integration, message management, and database storage.',
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Vercel'],
    githubUrl: 'https://github.com/prathamverma77/anonbox',
    liveUrl: 'https://anonbox-ruby.vercel.app/',
  },
  {
    id: 2,
    title: 'Full-Stack E-Commerce Platform',
    subtitle: 'E-Commerce & Admin Dashboards',
    description:
      'A complete full-stack E-Commerce web application built with Admin and User dashboards for managing product catalogs, shopping carts, and order workflows.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'http://github.com/prathamverma77/e-commerce-project',
    liveUrl: 'http://github.com/prathamverma77/e-commerce-project',
  },
  {
    id: 3,
    title: 'Personal Developer Portfolio',
    subtitle: 'Live Portfolio Website',
    description:
      'A modern, high-performance personal portfolio built with Next.js & Tailwind CSS to showcase developer experience, live client work, and engineering technical stack.',
    tags: ['Next.js', 'TypeScript', 'React.js', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/prathamverma77/personal-portfolio',
    liveUrl: 'https://pratham-portfolio-sooty.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Projects
          </h2>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 flex flex-col justify-between hover:border-[var(--foreground)]/40 transition-all duration-300 shadow-sm group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <div>
                {/* Top Card Icon & Quick Links */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-2.5 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] transition-transform cursor-pointer"
                  >
                    <FiFolder className="text-xl" />
                  </motion.div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="text-lg" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                        aria-label="Live Demo Link"
                      >
                        <FiExternalLink className="text-lg" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Subtitle Badge */}
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-2 text-center sm:text-left">
                  {project.subtitle}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors text-center sm:text-left">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center sm:text-left">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6 pt-4 border-t border-[var(--border)]/60">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.06, y: -1 }}
                      className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)] cursor-default transition-colors hover:text-[var(--foreground)]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Direct Full-Width Highlighted Action Button */}
                <div className="pt-2">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 px-4 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-xs inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xs group/btn cursor-pointer"
                  >
                    Live Demo 
                    <FiExternalLink className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;