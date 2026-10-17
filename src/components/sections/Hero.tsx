'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiTwitter, FiChevronDown } from 'react-icons/fi';
import { useHireMeModal } from '@/context/HireMeModalContext';

/**
 * Hero Section Component
 * 
 * Main landing section featuring developer introduction, bio summary,
 * call-to-action buttons, social contact links, and a styled profile image
 * container with radial ambient glow effects and Framer Motion micro-interactions.
 */
const Hero = () => {
    const { openModal } = useHireMeModal();
    const [resumeUrl, setResumeUrl] = useState('/resume');

    useEffect(() => {
        const fetchActiveResume = async () => {
            try {
                const res = await fetch('/api/resume/active', { cache: 'no-store' });
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

    // Framer Motion staggered container variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="hero" className="w-full min-h-[90vh] lg:min-h-[calc(100vh-4rem)] flex flex-col justify-between items-center relative bg-transparent text-[var(--foreground)] overflow-hidden py-12 lg:py-8">
            {/* Ambient Background Depth Layers */}
            {/* Layer 1: Subtle grid overlay with a centered radial vignette mask */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />

            {/* Layer 2: Soft radial ambient glow anchored top-center */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,var(--primary)/0.12_0%,transparent_70%)] blur-3xl pointer-events-none"
            />

            {/* Main Content Layout Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto">
                {/* Left Column: Developer Information & Bio */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl text-center lg:text-left"
                >
                    {/* Live Availability Pill */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-xs font-semibold mb-4 shadow-xs">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[var(--muted-foreground)]">Available for projects & roles</span>
                    </motion.div>

                    {/* Greeting Header */}
                    <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl font-medium text-[var(--primary)] mb-0.5 sm:mb-2">
                        Hi, I&apos;m
                    </motion.p>

                    {/* Developer Name */}
                    <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-1 sm:mb-3 text-[var(--foreground)]">
                        Pratham Verma
                    </motion.h1>

                    {/* Primary Role / Title */}
                    <motion.h2 variants={itemVariants} className="text-lg sm:text-2xl font-semibold text-[var(--muted-foreground)] mb-4 sm:mb-6 tracking-wide">
                        Full Stack Developer
                    </motion.h2>

                    {/* Short Introduction Paragraph */}
                    <motion.p variants={itemVariants} className="text-sm sm:text-lg text-[var(--muted-foreground)] mb-6 sm:mb-8 leading-relaxed max-w-xl">
                        I build <span className="text-[var(--foreground)] font-semibold underline decoration-zinc-500/30 underline-offset-4">production-ready</span> web applications,
                        from modern Next.js frontends to scalable
                        REST APIs and backend services using
                        Node.js and FastAPI.
                    </motion.p>

                    {/* Call to Action (CTA) Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                        {/* Hire Me CTA Button */}
                        <motion.button
                            onClick={openModal}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold px-6 py-3 rounded-[var(--radius)] text-base hover:opacity-90 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                        >
                            Hire Me
                        </motion.button>
                        {/* Resume Download Link */}
                        <motion.a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="bg-[var(--background)] text-[var(--foreground)] font-medium px-6 py-3 rounded-[var(--radius)] text-base border border-[var(--border)] hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs"
                        >
                            Resume <FiArrowUpRight className="text-lg" />
                        </motion.a>
                    </motion.div>

                    {/* Social Media & Contact Links */}
                    <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-medium">
                        {/* GitHub Profile */}
                        <motion.a
                            href="https://github.com/prathamverma77"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-xs"
                        >
                            <FiGithub className="text-base" /> GitHub
                        </motion.a>
                        {/* LinkedIn Profile */}
                        <motion.a
                            href="https://www.linkedin.com/in/prathamverma77/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-xs"
                        >
                            <FiLinkedin className="text-base text-[var(--foreground)]" /> LinkedIn
                        </motion.a>
                        {/* Twitter / X Profile */}
                        <motion.a
                            href="https://x.com/Pratham39423901"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-xs"
                        >
                            <FiTwitter className="text-base text-[var(--foreground)]" /> Twitter / X
                        </motion.a>
                        {/* Direct Email */}
                        <motion.a
                            href="mailto:prathamverma1980@gmail.com"
                            whileHover={{ y: -3, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-xs"
                        >
                            <FiMail className="text-base text-[var(--foreground)]" /> Email
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Column: Profile Image Display with Floating Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-xs flex justify-center"
                >
                    {/* Breathing Ambient Radial Shadow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: 'easeInOut',
                        }}
                        className="absolute -inset-6 sm:-inset-10 rounded-full bg-[radial-gradient(circle_at_center,var(--foreground)/0.12_0%,transparent_70%)] blur-2xl pointer-events-none"
                    />

                    {/* Floating Profile Image Container */}
                    <motion.div
                        animate={{
                            y: [-6, 6, -6],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: 'easeInOut',
                        }}
                        className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-[290px] md:h-[290px] rounded-full overflow-hidden ring-1 ring-[var(--border)] shadow-2xl transition-all duration-700 ease-out hover:ring-[var(--foreground)]/40 group cursor-pointer"
                    >
                        <img
                            src="/portfolio%20pic.jpeg"
                            alt="Pratham Verma"
                            className="w-full h-full object-cover object-[center_55%] scale-135 transition-transform duration-700 ease-out group-hover:scale-140"
                        />
                        {/* Radial overlay for smooth edge blending */}
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[var(--foreground)]/10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_65%,var(--background)/0.25_100%)]" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Prompt Indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative z-10 hidden sm:flex flex-col items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mt-8 group cursor-pointer"
            >
                <span className="tracking-widest uppercase text-[10px] font-semibold">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                    <FiChevronDown className="text-base group-hover:text-[var(--foreground)] transition-colors" />
                </motion.div>
            </motion.a>
        </section>
    );
};

export default Hero;