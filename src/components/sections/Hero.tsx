import React from 'react';

const Hero = () => {
  return (
    <section className="w-full h-[80vh] relative bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-[var(--foreground)]">
          Software Engineer
        </h1>

        {/* Short Intro */}
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mb-10 leading-relaxed">
          Passionate about building scalable web applications, sleek user interfaces, and solving complex problems with modern technologies.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="bg-[var(--primary)] text-[var(--primary-foreground)] font-medium px-6 py-3 rounded-[var(--radius)] text-base hover:opacity-90 transition-all shadow-sm">
            Contact Me
          </button>
          <button className="bg-[var(--background)] text-[var(--foreground)] font-medium px-6 py-3 rounded-[var(--radius)] text-base border border-[var(--border)] hover:bg-[var(--accent)] transition-all">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;