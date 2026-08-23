'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    <nav className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md text-[var(--foreground)] border-b border-[var(--border)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="#hero" 
          className="font-extrabold text-xl tracking-tight text-[var(--foreground)] hover:text-[var(--brand-accent)] transition-colors flex items-center gap-1"
        >
          Pratham<span className="text-[var(--brand-accent)]">.</span>
        </Link>

        {/* Desktop Links, Theme Toggle & Hire Me CTA */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors text-xs font-semibold"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] border border-[var(--border)] transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          {/* Desktop Hire Me CTA */}
          <button
            onClick={openModal}
            className="ml-2 px-4 py-2 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Actions (Hire Me + Theme Toggle + Hamburger Menu Button) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Hire Me CTA outside Hamburger menu */}
          <button
            onClick={openModal}
            className="px-3.5 py-1.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
          >
            Hire Me
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] border border-[var(--border)] transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Links Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--popover)] text-[var(--popover-foreground)] px-4 py-3 flex flex-col gap-2 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}