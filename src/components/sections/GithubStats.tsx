'use client';

import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const explicitGreenTheme = {
  light: [
    '#e4e4e7', // Level 0 (no contributions)
    '#15803d', // Level 1 (deep bold green)
    '#22c55e', // Level 2 (rich green)
    '#4ade80', // Level 3 (vibrant emerald green)
    '#86efac', // Level 4 (glowing light green)
  ],
  dark: [
    '#27272a', // Level 0 (zinc gray)
    '#15803d', // Level 1 (deep green)
    '#16a34a', // Level 2 (rich green)
    '#22c55e', // Level 3 (vibrant green)
    '#4ade80', // Level 4 (glowing light green)
  ],
};

const GithubStats = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Open Source & Activity
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            GitHub Contributions
          </h2>
        </div>

        {/* Calendar Card Container */}
        <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 flex flex-col items-center justify-center overflow-x-auto shadow-sm min-h-[160px]">
          {mounted ? (
            <GitHubCalendar
              username="prathamverma77"
              blockSize={13}
              blockMargin={4}
              fontSize={13}
              theme={explicitGreenTheme}
            />
          ) : (
            <div className="text-sm text-[var(--muted-foreground)] animate-pulse">
              Loading contribution graph...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
