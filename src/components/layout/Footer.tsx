import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-[var(--background)] text-[var(--muted-foreground)] border-t border-[var(--border)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium">
        <p>© {new Date().getFullYear()} Pratham Verma. Built with Next.js & Tailwind CSS.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/prathamverma77"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Twitter / X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
