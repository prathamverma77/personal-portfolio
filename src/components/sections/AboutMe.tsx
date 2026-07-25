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

        {/* Right Column: Illustration Image Container */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] flex items-center justify-center p-8 shadow-sm overflow-hidden group">
            {/* <img
              src="/images/about-illustration.png"
              alt="About Me Illustration"
              className="w-full h-full object-contain relative z-10"
              onError={(e) => {
                // Hide image fallback element if file doesn't exist yet
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            /> */}

            {/* Graphic Vector Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <svg
                className="w-32 h-32 text-[var(--muted-foreground)] mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <span className="text-xs text-[var(--muted-foreground)] font-mono">
                /images/about-illustration.png
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;