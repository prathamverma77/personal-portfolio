'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase } from 'react-icons/fi';

const HIGHLIGHT_POINTS = [
  {
    icon: <FiCode className="text-base text-sky-500" />,
    title: 'Modern Frontends',
    desc: 'Next.js, React, TypeScript',
  },
  {
    icon: <FiServer className="text-base text-emerald-500" />,
    title: 'Scalable APIs',
    desc: 'Node.js, Express, FastAPI',
  },
  {
    icon: <FiDatabase className="text-base text-amber-500" />,
    title: 'Robust Databases',
    desc: 'MongoDB, MySQL, Cloudflare R2',
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50 overflow-hidden">
      {/* 2-Column Responsive Layout Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Developer Overview & Technical Scope */}
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)]">
            Background & Mindset
          </span>

          {/* Section Heading */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-[var(--foreground)]">
            About Me
          </h2>

          {/* Paragraph 1: Role Overview & Full-Stack Capabilities */}
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            I&apos;m a <span className="text-[var(--foreground)] font-semibold">Full Stack Developer</span> who enjoys building complete web applications—not just the UI, but the APIs, database logic, authentication, file handling, and deployment behind them.
          </p>

          {/* Paragraph 2: Core Technologies & Production Tools */}
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            I&apos;ve worked with <span className="text-[var(--foreground)] font-medium">Next.js, React, TypeScript, Node.js, Express,</span> and <span className="text-[var(--foreground)] font-medium">Python/FastAPI</span>, building applications backed by <span className="text-[var(--foreground)] font-medium">MongoDB</span> and <span className="text-[var(--foreground)] font-medium">MySQL</span> and integrating services such as <span className="text-[var(--foreground)] font-medium">Cloudflare R2</span> and third-party APIs.
          </p>

          {/* Paragraph 3: Current Career Focus & Trajectory */}
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            I&apos;m currently focused on becoming a stronger <span className="text-[var(--foreground)] font-semibold underline decoration-zinc-500/30 underline-offset-4">backend-oriented engineer</span>—improving my API design, database architecture, system design, and problem-solving skills while continuing to build production applications.
          </p>

          {/* Interactive Feature Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4">
            {HIGHLIGHT_POINTS.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-3.5 rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-xs hover:border-[var(--foreground)]/30 transition-all text-left flex flex-col gap-1 cursor-default group"
              >
                <div className="p-2 w-fit rounded-md bg-[var(--accent)] group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h4 className="text-xs font-bold text-[var(--foreground)] mt-1">{point.title}</h4>
                <p className="text-[11px] text-[var(--muted-foreground)]">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual Workspace IDE Code Panel */}
        <motion.div 
          className="flex justify-center items-center relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Subtle Ambient Glow behind the IDE */}
          <div className="absolute -inset-4 rounded-2xl bg-[radial-gradient(circle_at_center,var(--primary)/0.08_0%,transparent_70%)] blur-2xl pointer-events-none" />

          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="w-full max-w-lg rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-2xl overflow-hidden font-mono text-sm group hover:border-[var(--foreground)]/30 transition-all duration-500 relative z-10"
          >
            {/* IDE Window Titlebar with Mac-style controls & active tab */}
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--accent)]/50 border-b border-[var(--border)] text-xs">
              {/* Window Action Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              {/* Active Tab Badge */}
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] font-medium text-xs shadow-xs">
                <span className="text-sky-500 font-bold">TS</span> pratham.ts
              </div>
              {/* File Encoding / Live Status Dot */}
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                UTF-8
              </div>
            </div>

            {/* Code Body Container with Line Numbers & Monochrome Syntax */}
            <div className="p-4 sm:p-6 overflow-x-auto leading-relaxed text-xs sm:text-sm">
              <div className="flex gap-4">
                {/* Line Numbers Sidebar */}
                <div className="select-none text-[var(--muted-foreground)]/40 text-right space-y-1 font-mono text-xs">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                </div>

                {/* TypeScript Code Representation */}
                <div className="space-y-1 font-mono">
                  <div>
                    <span className="text-indigo-500 dark:text-indigo-400 font-semibold">const</span>{" "}
                    <span className="text-[var(--foreground)] font-semibold">developer</span>{" "}
                    <span className="text-[var(--muted-foreground)]">=</span>{" "}
                    <span className="text-amber-500 dark:text-amber-400">&#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">role:</span>{" "}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">&quot;Full Stack Developer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">frontend:</span>{" "}
                    <span className="text-amber-500 dark:text-amber-400">[</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">&quot;TypeScript&quot;</span>
                    <span className="text-amber-500 dark:text-amber-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">backend:</span>{" "}
                    <span className="text-amber-500 dark:text-amber-400">[</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">&quot;FastAPI&quot;</span>
                    <span className="text-amber-500 dark:text-amber-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">database:</span>{" "}
                    <span className="text-amber-500 dark:text-amber-400">[</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">&quot;MongoDB&quot;</span>,{" "}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">&quot;SQL&quot;</span>
                    <span className="text-amber-500 dark:text-amber-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">focus:</span>{" "}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">&quot;Fullstack Engineering&quot;</span>
                  </div>
                  <div>
                    <span className="text-amber-500 dark:text-amber-400">&#125;</span>;
                    {/* Animated Blinking Cursor */}
                    <span className="inline-block w-2 h-4 ml-1.5 bg-indigo-500 dark:bg-indigo-400 animate-pulse align-middle" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;