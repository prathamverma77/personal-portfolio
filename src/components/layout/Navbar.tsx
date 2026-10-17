'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useHireMeModal } from '@/context/HireMeModalContext';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { openModal } = useHireMeModal();

  // Scroll Progress Bar Animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Check saved preference or system theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <>
      {/* Sleek Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[var(--foreground)] origin-left z-[60] opacity-80"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md text-[var(--foreground)] border-b border-[var(--border)] transition-colors duration-200"
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="font-extrabold text-xl tracking-tight text-[var(--foreground)] hover:text-[var(--brand-accent)] transition-colors flex items-center gap-1 group"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              Pratham<span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">.</span>
            </motion.span>
          </Link>

          {/* Desktop Links, Theme Toggle & Hire Me CTA */}
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors text-xs font-semibold"
              >
                {link.label}
              </motion.a>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ rotate: 180, scale: 0.85 }}
              whileHover={{ scale: 1.08 }}
              className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] border border-[var(--border)] transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? '🌙' : '☀️'}
            </motion.button>

            {/* Desktop Hire Me CTA */}
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-4 py-2 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Actions (Hire Me + Theme Toggle + Hamburger Menu Button) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Hire Me CTA outside Hamburger menu */}
            <motion.button
              onClick={openModal}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-1.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
            >
              Hire Me
            </motion.button>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ rotate: 180, scale: 0.85 }}
              className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] border border-[var(--border)] transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? '🌙' : '☀️'}
            </motion.button>

            {/* Hamburger Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? '✕' : '☰'}
            </motion.button>
          </div>
        </div>

        {/* Mobile Links Drawer with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-t border-[var(--border)] bg-[var(--popover)] text-[var(--popover-foreground)] px-4 py-3 flex flex-col gap-2 text-sm font-medium overflow-hidden"
            >
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}