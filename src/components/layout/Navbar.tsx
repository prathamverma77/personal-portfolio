'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3 shadow-lg shadow-zinc-200/20 dark:shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center space-x-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              PV
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-pink-600 dark:group-hover:from-indigo-400 dark:group-hover:to-pink-400 transition-all duration-300">
              Pratham Verma
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-zinc-650 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-zinc-900 rounded-full group bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group-hover:from-indigo-500 group-hover:to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800 transition-all duration-300 cursor-pointer"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-full group-hover:bg-opacity-0 group-hover:text-white">
                Let's Talk
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon with neat animations */}
              <div className="w-6 h-5 flex flex-col justify-between items-center relative">
                <span
                  className={`w-full h-0.5 bg-current rounded transition-all duration-300 origin-left ${
                    isOpen ? 'rotate-45 translate-y-[2px] translate-x-[2px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded transition-all duration-300 origin-left ${
                    isOpen ? '-rotate-45 -translate-y-[2px] translate-x-[2px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[350px] border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg' : 'max-h-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-650 hover:text-zinc-950 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900/50 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}