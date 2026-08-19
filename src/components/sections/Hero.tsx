import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="w-full min-h-[85vh] lg:min-h-[calc(100vh-4rem)] flex items-center justify-center relative bg-transparent text-[var(--foreground)] overflow-hidden py-12 lg:py-0">
            {/* Background Depth Layers */}
            {/* 1. Faint Grid Pattern Layer with Radial Mask */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />

            {/* 2. Soft Ambient Radial Light Layer (Top-Center) */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,var(--primary)/0.12_0%,transparent_70%)] blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center lg:text-left">
                    <p className="text-lg md:text-xl font-medium text-[var(--primary)] mb-2">
                        Hi, I'm
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 text-[var(--foreground)]">
                        Pratham Verma
                    </h1>

                    <h2 className="text-xl md:text-2xl font-semibold text-[var(--brand-accent)] mb-6 tracking-wide">
                        Full Stack Developer
                    </h2>

                    <p className="text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed max-w-xl">
                        I build <span className="text-[var(--brand-accent)] font-medium">production-ready</span> web applications,
                        from modern Next.js frontends to scalable
                        REST APIs and backend services using
                        Node.js and FastAPI.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                        <a
                            href="#projects"
                            className="bg-[var(--primary)] text-[var(--primary-foreground)] font-medium px-6 py-3 rounded-[var(--radius)] text-base hover:opacity-90 transition-all shadow-sm inline-flex items-center gap-2"
                        >
                            View My Work
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--background)] text-[var(--foreground)] font-medium px-6 py-3 rounded-[var(--radius)] text-base border border-[var(--border)] hover:bg-[var(--accent)] hover:border-[var(--brand-accent)]/40 hover:text-[var(--brand-accent)] transition-all inline-flex items-center gap-2"
                        >
                            Resume <FiArrowUpRight className="text-lg" />
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-medium">
                        <a
                            href="https://github.com/prathamverma77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--brand-accent)]/40 hover:text-[var(--brand-accent)] text-[var(--foreground)] transition-all shadow-sm"
                        >
                            <FiGithub className="text-base" /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/prathamverma77/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--brand-accent)]/40 hover:text-[var(--brand-accent)] text-[var(--foreground)] transition-all shadow-sm"
                        >
                            <FiLinkedin className="text-base text-sky-500" /> LinkedIn
                        </a>
                        <a
                            href="mailto:prathamverma1980@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--brand-accent)]/40 hover:text-[var(--brand-accent)] text-[var(--foreground)] transition-all shadow-sm"
                        >
                            <FiMail className="text-base text-rose-500" /> Email
                        </a>
                    </div>
                </div>

                <div className="relative w-full max-w-md flex justify-center">
                    {/* Soft Radial Ambient Glow Layers */}
                    <div className="absolute -inset-10 sm:-inset-16 rounded-full bg-[radial-gradient(circle_at_center,var(--brand-accent)/0.15_0%,transparent_70%)] blur-3xl pointer-events-none" />
                    <div className="absolute -inset-4 sm:-inset-8 rounded-full bg-[radial-gradient(circle_at_center,var(--brand-accent)/0.25_0%,transparent_60%)] blur-2xl pointer-events-none" />

                    {/* Profile Image Container: Thin Ring, Upper Body Crop, Seamless Hover Blend */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] rounded-full overflow-hidden ring-1 ring-[var(--brand-accent)]/20 shadow-xl transition-all duration-700 ease-out hover:scale-[1.02] hover:ring-[var(--brand-accent)]/40 group">
                        <img
                            src="/portfolio%20pic.jpeg"
                            alt="Pratham Verma"
                            className="w-full h-full object-cover object-[center_55%] scale-135 transition-transform duration-700 ease-out group-hover:scale-140"
                        />
                        {/* Subtle inner edge gradient for smooth blending */}
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[var(--foreground)]/10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_65%,var(--background)/0.25_100%)]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;