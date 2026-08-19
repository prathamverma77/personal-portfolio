import React from 'react';

const AboutMe = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Intro Text */}
        <div className="flex flex-col items-start text-left">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Get to Know Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--foreground)]">
            About Me
          </h2>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed mb-4">
            I am a passionate Software Engineer dedicated to crafting robust, high-performance web applications. With a strong foundation in full-stack development, I enjoy bridging design and technical implementation to create seamless user experiences.
          </p>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed mb-8">
            When I'm not writing code, I love exploring emerging web technologies, optimizing system architectures, and continuously refining my skill set to build impactful software.
          </p>

          {/* Key Skill Badges */}
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 text-xs font-medium rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Developer Workspace Code Panel */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-xl overflow-hidden font-mono text-sm group hover:border-[var(--brand-accent)]/40 transition-all duration-500 relative">
            {/* Subtle Ambient Glow */}
            <div className="absolute -inset-1 bg-[radial-gradient(circle_at_top_right,var(--brand-accent)/0.12_0%,transparent_60%)] pointer-events-none" />

            {/* IDE Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--accent)]/50 border-b border-[var(--border)] text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] font-medium text-xs shadow-xs">
                <span className="text-sky-500 font-bold">TS</span> pratham.ts
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                UTF-8
              </div>
            </div>

            {/* Code Panel Body with Line Numbers */}
            <div className="p-4 sm:p-6 overflow-x-auto leading-relaxed text-xs sm:text-sm">
              <div className="flex gap-4">
                {/* Line Numbers */}
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

                {/* Syntax Highlighted Code Content */}
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