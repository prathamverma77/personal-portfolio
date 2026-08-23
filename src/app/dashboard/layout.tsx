'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  FiGrid,
  FiMail,
  FiFolder,
  FiBriefcase,
  FiLogOut,
  FiMenu,
  FiX,
  FiShield,
  FiExternalLink,
  FiSun,
  FiMoon,
  FiFileText,
} from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: FiGrid },
  { label: 'Messages', href: '/dashboard/messages', icon: FiMail },
  { label: 'Projects', href: '/dashboard/projects', icon: FiFolder },
  { label: 'Experience', href: '/dashboard/experience', icon: FiBriefcase },
  { label: 'Resume', href: '/dashboard/resume', icon: FiFileText },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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

  // Skip sidebar for the login page
  if (pathname === '/dashboard/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/dashboard/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--background)] text-[var(--foreground)]">
      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-[var(--card)] border-b border-[var(--border)] sticky top-0 z-40">
        <div className="flex items-center gap-2 font-bold text-sm">
          <FiShield className="text-base text-[var(--foreground)]" />
          <span>Pratham Admin</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--foreground)] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </header>

      {/* Permanently Fixed Left Sidebar (Desktop) & Responsive Drawer (Mobile) */}
      <aside
        className={`fixed left-0 top-0 h-screen z-50 w-64 bg-[var(--card)] border-r border-[var(--border)] flex flex-col justify-between p-4 transition-transform duration-300 md:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Brand Logo Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[var(--border)] px-2 pt-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)]">
                <FiShield className="text-lg" />
              </div>
              <div>
                <span className="font-bold text-base tracking-tight text-[var(--foreground)] block">
                  Pratham
                </span>
                <span className="text-[11px] text-[var(--muted-foreground)] uppercase tracking-wider font-semibold">
                  Control Center
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden p-1.5 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)]"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === '/dashboard'
                  ? pathname === '/dashboard'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-xs'
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]'
                  }`}
                >
                  <Icon className="text-base flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Actions (Theme Toggle, Live Site & Logout) */}
        <div className="pt-4 border-t border-[var(--border)] space-y-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold text-[var(--foreground)] bg-[var(--accent)] border border-[var(--border)] hover:bg-[var(--background)] transition-colors cursor-pointer"
          >
            <span className="inline-flex items-center gap-2">
              {isDark ? <FiSun className="text-sm text-amber-400" /> : <FiMoon className="text-sm text-indigo-400" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
            <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase">
              {isDark ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Return to Live Portfolio */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <FiExternalLink className="text-sm" /> Live Portfolio
            </span>
            <span className="text-[10px] font-mono">↗</span>
          </a>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-rose-500 bg-rose-500/10 hover:bg-rose-500 hover:text-white transition-all disabled:opacity-50 cursor-pointer"
          >
            <FiLogOut className="text-base flex-shrink-0" />
            <span>{loggingOut ? 'Logging Out...' : 'Logout'}</span>
          </button>
        </div>
      </aside>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Main Content Area (Right Region, Properly Offset from Fixed Sidebar) */}
      <main className="w-full md:pl-64 min-h-screen">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
