'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-transparent text-[var(--muted-foreground)] border-t border-[var(--border)]/50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-center sm:text-left">
        <p>© {new Date().getFullYear()} Pratham Verma. Built with Next.js & Tailwind CSS.</p>

        <div className="flex items-center justify-center gap-4">
          <motion.a
            href="https://github.com/prathamverma77"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prathamverma77/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://x.com/Pratham39423901"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            Twitter / X
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
