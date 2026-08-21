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
    <section id="about" className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50">
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
            I'm currently focused on becoming a stronger <span className="text-[var(--foreground)] font-semibold underline decoration-zinc-500/30 underline-offset-4">backend-oriented engineer</span>—improving my API design, database architecture, system design, and problem-solving skills while continuing to build production applications.
          </p>
        </div>

        {/* Right Column: Visual Workspace IDE Code Panel */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-xl overflow-hidden font-mono text-sm group hover:border-[var(--foreground)]/30 transition-all duration-500 relative">
            {/* IDE Window Titlebar with Mac-style controls & active tab */}
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--accent)]/50 border-b border-[var(--border)] text-xs">
              {/* Window Action Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-400/60 dark:bg-zinc-600/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-zinc-400/60 dark:bg-zinc-600/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-zinc-400/60 dark:bg-zinc-600/80 inline-block" />
              </div>
              {/* Active Tab Badge */}
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] font-medium text-xs shadow-xs">
                <span className="text-[var(--foreground)] font-bold">TS</span> pratham.ts
              </div>
              {/* File Encoding / Live Status Dot */}
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-sans">
                <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse" />
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
                    <span className="text-[var(--foreground)] font-semibold">const</span>{" "}
                    <span className="text-[var(--foreground)] font-semibold">developer</span>{" "}
                    <span className="text-[var(--muted-foreground)]">=</span>{" "}
                    <span className="text-[var(--muted-foreground)]">&#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--muted-foreground)]">role:</span>{" "}
                    <span className="text-[var(--foreground)]">"Full Stack Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--muted-foreground)]">frontend:</span>{" "}
                    <span className="text-[var(--muted-foreground)]">[</span>
                    <span className="text-[var(--foreground)]">"Next.js"</span>,{" "}
                    <span className="text-[var(--foreground)]">"TypeScript"</span>
                    <span className="text-[var(--muted-foreground)]">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--muted-foreground)]">backend:</span>{" "}
                    <span className="text-[var(--muted-foreground)]">[</span>
                    <span className="text-[var(--foreground)]">"Node.js"</span>,{" "}
                    <span className="text-[var(--foreground)]">"FastAPI"</span>
                    <span className="text-[var(--muted-foreground)]">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--muted-foreground)]">database:</span>{" "}
                    <span className="text-[var(--muted-foreground)]">[</span>
                    <span className="text-[var(--foreground)]">"MongoDB"</span>,{" "}
                    <span className="text-[var(--foreground)]">"SQL"</span>
                    <span className="text-[var(--muted-foreground)]">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[var(--muted-foreground)]">focus:</span>{" "}
                    <span className="text-[var(--foreground)]">"Backend Engineering"</span>
                  </div>
                  <div>
                    <span className="text-[var(--muted-foreground)]">&#125;</span>;
                    {/* Animated Blinking Cursor */}
                    <span className="inline-block w-2 h-4 ml-1.5 bg-[var(--foreground)] animate-pulse align-middle" />
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