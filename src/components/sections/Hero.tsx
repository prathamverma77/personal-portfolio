'use client';

import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiTwitter } from 'react-icons/fi';
import { useHireMeModal } from '@/context/HireMeModalContext';

/**
 * Hero Section Component
 * 
 * Main landing section featuring developer introduction, bio summary,
 * call-to-action buttons, social contact links, and a styled profile image
 * container with radial ambient glow effects.
 */
const Hero = () => {
    const { openModal } = useHireMeModal();
    const [resumeUrl, setResumeUrl] = useState('/resume.pdf');

    useEffect(() => {
        const fetchActiveResume = async () => {
            try {
                const res = await fetch('/api/resume/active');
                const data = await res.json();
                if (res.ok && data.success && data.resume?.url) {
                    setResumeUrl(data.resume.url);
                }
            } catch (err) {
                console.error('Failed to pre-fetch active resume:', err);
            }
        };
        fetchActiveResume();
    }, []);

    return (
        <section id="hero" className="w-full min-h-[85vh] lg:min-h-[calc(100vh-4rem)] flex items-center justify-center relative bg-transparent text-[var(--foreground)] overflow-hidden py-12 lg:py-0">
            {/* Ambient Background Depth Layers */}
            {/* Layer 1: Subtle grid overlay with a centered radial vignette mask */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />

            {/* Layer 2: Soft radial ambient glow anchored top-center */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,var(--primary)/0.12_0%,transparent_70%)] blur-3xl pointer-events-none" />

            {/* Main Content Layout Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12">
                {/* Left Column: Developer Information & Bio */}
                <div className="max-w-2xl text-center lg:text-left">
                    {/* Greeting Header */}
                    <p className="text-base sm:text-lg md:text-xl font-medium text-[var(--primary)] mb-0.5 sm:mb-2">
                        Hi, I'm
                    </p>

                    {/* Developer Name */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-1 sm:mb-3 text-[var(--foreground)]">
                        Pratham Verma
                    </h1>

                    {/* Primary Role / Title */}
                    <h2 className="text-lg sm:text-2xl font-semibold text-[var(--muted-foreground)] mb-4 sm:mb-6 tracking-wide">
                        Full Stack Developer
                    </h2>

                    {/* Short Introduction Paragraph */}
                    <p className="text-sm sm:text-lg text-[var(--muted-foreground)] mb-6 sm:mb-8 leading-relaxed max-w-xl">
                        I build <span className="text-[var(--foreground)] font-semibold underline decoration-zinc-500/30 underline-offset-4">production-ready</span> web applications,
                        from modern Next.js frontends to scalable
                        REST APIs and backend services using
                        Node.js and FastAPI.
                    </p>

                    {/* Call to Action (CTA) Buttons */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                        {/* Hire Me CTA Button */}
                        <button
                            onClick={openModal}
                            className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold px-6 py-3 rounded-[var(--radius)] text-base hover:opacity-90 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                        >
                            Hire Me
                        </button>
                        {/* Resume Download Link */}
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--background)] text-[var(--foreground)] font-medium px-6 py-3 rounded-[var(--radius)] text-base border border-[var(--border)] hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 transition-all inline-flex items-center gap-2 cursor-pointer"
                        >
                            Resume <FiArrowUpRight className="text-lg" />
                        </a>
                    </div>

                    {/* Social Media & Contact Links */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-medium">
                        {/* GitHub Profile */}
                        <a
                            href="https://github.com/prathamverma77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-sm"
                        >
                            <FiGithub className="text-base" /> GitHub
                        </a>
                        {/* LinkedIn Profile */}
                        <a
                            href="https://www.linkedin.com/in/prathamverma77/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-sm"
                        >
                            <FiLinkedin className="text-base text-[var(--foreground)]" /> LinkedIn
                        </a>
                        {/* Twitter / X Profile */}
                        <a
                            href="https://x.com/Pratham39423901"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-sm"
                        >
                            <FiTwitter className="text-base text-[var(--foreground)]" /> Twitter / X
                        </a>
                        {/* Direct Email */}
                        <a
                            href="mailto:prathamverma1980@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-sm"
                        >
                            <FiMail className="text-base text-[var(--foreground)]" /> Email
                        </a>
                    </div>
                </div>

                {/* Right Column: Profile Image Display */}
                <div className="relative w-full max-w-xs flex justify-center">
                    {/* Subtle monochrome ambient shadow directly behind profile image */}
                    <div className="absolute -inset-6 sm:-inset-10 rounded-full bg-[radial-gradient(circle_at_center,var(--foreground)/0.06_0%,transparent_70%)] blur-2xl pointer-events-none" />

                    {/* Rounded Profile Image Container with subtle ring and hover scaling */}
                    <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-[290px] md:h-[290px] rounded-full overflow-hidden ring-1 ring-[var(--border)] shadow-xl transition-all duration-700 ease-out hover:scale-[1.02] hover:ring-[var(--foreground)]/30 group">
                        <img
                            src="/portfolio%20pic.jpeg"
                            alt="Pratham Verma"
                            className="w-full h-full object-cover object-[center_55%] scale-135 transition-transform duration-700 ease-out group-hover:scale-140"
                        />
                        {/* Radial overlay for smooth edge blending */}
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[var(--foreground)]/10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_65%,var(--background)/0.25_100%)]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;