'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--border)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="font-bold text-lg text-[var(--foreground)] hover:text-[var(--muted-foreground)] transition-colors"
        >
          Logo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--popover)] text-[var(--popover-foreground)] px-4 py-3 flex flex-col gap-2 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}