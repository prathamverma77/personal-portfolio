import React from 'react';

/**
 * AboutMe Section Component
 * 
 * Displays developer background overview broken into 3 focused sections:
 * 1. Who you are (Full Stack Developer role definition)
 * 2. Technologies & Stack worked with
 * 3. Current engineering trajectory & Backend focus
 * 
 * Accompanied by a visual, interactive IDE code workspace panel (`pratham.ts`).
 */
const AboutMe = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50">
      {/* 2-Column Responsive Layout Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Developer Overview & Technical Scope */}
        <div className="flex flex-col items-start text-left space-y-4">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-[var(--foreground)]">
            About Me
          </h2>

          {/* Paragraph 1: Role Overview & Full-Stack Capabilities */}
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            I'm a <span className="text-[var(--foreground)] font-semibold">Full Stack Developer</span> who enjoys building complete web applications—not just the UI, but the APIs, database logic, authentication, file handling, and deployment behind them.
          </p>

          {/* Paragraph 2: Core Technologies & Production Tools */}
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            I've worked with <span className="text-[var(--foreground)] font-medium">Next.js, React, TypeScript, Node.js, Express,</span> and <span className="text-[var(--foreground)] font-medium">Python/FastAPI</span>, building applications backed by <span className="text-[var(--foreground)] font-medium">MongoDB</span> and <span className="text-[var(--foreground)] font-medium">MySQL</span> and integrating services such as <span className="text-[var(--foreground)] font-medium">Cloudflare R2</span> and third-party APIs.
          </p>

          {/* Paragraph 3: Current Career Focus & Trajectory */}
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            I'm currently focused on becoming a stronger <span className="text-[var(--brand-accent)] font-semibold">backend-oriented engineer</span>—improving my API design, database architecture, system design, and problem-solving skills while continuing to build production applications.
          </p>
        </div>

        {/* Right Column: Visual Workspace IDE Code Panel */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-xl overflow-hidden font-mono text-sm group hover:border-[var(--brand-accent)]/40 transition-all duration-500 relative">
            {/* Soft Ambient Radial Glow Effect */}
            <div className="absolute -inset-1 bg-[radial-gradient(circle_at_top_right,var(--brand-accent)/0.12_0%,transparent_60%)] pointer-events-none" />

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

            {/* Code Body Container with Line Numbers & Syntax Highlighting */}
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
                    <span className="text-[var(--brand-accent)] font-semibold">const</span>{" "}
                    <span className="text-[var(--foreground)] font-semibold">developer</span>{" "}
                    <span className="text-[var(--muted-foreground)]">=</span>{" "}
                    <span className="text-amber-500">&#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--foreground)]/80">role:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">"Full Stack Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--foreground)]/80">frontend:</span>{" "}
                    <span className="text-sky-600 dark:text-sky-400">[</span>
                    <span className="text-emerald-600 dark:text-emerald-400">"Next.js"</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">"TypeScript"</span>
                    <span className="text-sky-600 dark:text-sky-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--foreground)]/80">backend:</span>{" "}
                    <span className="text-sky-600 dark:text-sky-400">[</span>
                    <span className="text-emerald-600 dark:text-emerald-400">"Node.js"</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">"FastAPI"</span>
                    <span className="text-sky-600 dark:text-sky-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--foreground)]/80">database:</span>{" "}
                    <span className="text-sky-600 dark:text-sky-400">[</span>
                    <span className="text-emerald-600 dark:text-emerald-400">"MongoDB"</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">"SQL"</span>
                    <span className="text-sky-600 dark:text-sky-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--foreground)]/80">focus:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">"Backend Engineering"</span>
                  </div>
                  <div>
                    <span className="text-amber-500">&#125;</span>;
                    {/* Animated Blinking Cursor */}
                    <span className="inline-block w-2 h-4 ml-1.5 bg-[var(--brand-accent)] animate-pulse align-middle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;