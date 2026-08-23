'use client';

import React from 'react';
import Link from 'next/link';
import { FiGrid, FiFolder, FiBriefcase, FiMail, FiCheckCircle, FiServer, FiArrowRight } from 'react-icons/fi';

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-1">
            Welcome to your portfolio management control panel
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent)] border border-[var(--border)] text-xs text-[var(--foreground)] font-semibold w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          System Operational
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 text-[var(--muted-foreground)]">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Projects</span>
            <FiFolder className="text-lg text-[var(--foreground)]" />
          </div>
          <div className="text-3xl font-extrabold text-[var(--foreground)]">3</div>
          <p className="text-[11px] text-[var(--muted-foreground)] mt-2">Active featured projects</p>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 text-[var(--muted-foreground)]">
            <span className="text-xs font-semibold uppercase tracking-wider">Experience</span>
            <FiBriefcase className="text-lg text-[var(--foreground)]" />
          </div>
          <div className="text-3xl font-extrabold text-[var(--foreground)]">3</div>
          <p className="text-[11px] text-[var(--muted-foreground)] mt-2">Roles in timeline</p>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 text-[var(--muted-foreground)]">
            <span className="text-xs font-semibold uppercase tracking-wider">Messages</span>
            <FiMail className="text-lg text-[var(--foreground)]" />
          </div>
          <div className="text-3xl font-extrabold text-[var(--foreground)]">0</div>
          <p className="text-[11px] text-[var(--muted-foreground)] mt-2">Inbound client messages</p>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3 text-[var(--muted-foreground)]">
            <span className="text-xs font-semibold uppercase tracking-wider">Database Status</span>
            <FiServer className="text-lg text-emerald-500" />
          </div>
          <div className="text-lg font-bold text-[var(--foreground)]">Connected</div>
          <p className="text-[11px] text-emerald-500 font-medium mt-2 flex items-center gap-1">
            <FiCheckCircle className="text-xs" /> MongoDB Atlas
          </p>
        </div>
      </div>

      {/* Module Navigation Cards */}
      <div>
        <h2 className="text-lg font-bold tracking-tight text-[var(--foreground)] mb-4">
          Management Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Messages Module */}
          <Link
            href="/dashboard/messages"
            className="group bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 flex flex-col justify-between hover:border-[var(--foreground)]/40 transition-all shadow-xs"
          >
            <div>
              <div className="p-3 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] w-fit mb-4 group-hover:scale-105 transition-transform">
                <FiMail className="text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-[var(--foreground)] flex items-center justify-between">
                Messages
                <FiArrowRight className="text-base text-[var(--muted-foreground)] group-hover:translate-x-1 group-hover:text-[var(--foreground)] transition-all" />
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Review and respond to client inquiries sent via the contact form.
              </p>
            </div>
          </Link>

          {/* Projects Module */}
          <Link
            href="/dashboard/projects"
            className="group bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 flex flex-col justify-between hover:border-[var(--foreground)]/40 transition-all shadow-xs"
          >
            <div>
              <div className="p-3 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] w-fit mb-4 group-hover:scale-105 transition-transform">
                <FiFolder className="text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-[var(--foreground)] flex items-center justify-between">
                Projects
                <FiArrowRight className="text-base text-[var(--muted-foreground)] group-hover:translate-x-1 group-hover:text-[var(--foreground)] transition-all" />
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Manage featured portfolio projects, descriptions, tech stack, and live URLs.
              </p>
            </div>
          </Link>

          {/* Experience Module */}
          <Link
            href="/dashboard/experience"
            className="group bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 flex flex-col justify-between hover:border-[var(--foreground)]/40 transition-all shadow-xs"
          >
            <div>
              <div className="p-3 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] w-fit mb-4 group-hover:scale-105 transition-transform">
                <FiBriefcase className="text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-[var(--foreground)] flex items-center justify-between">
                Experience
                <FiArrowRight className="text-base text-[var(--muted-foreground)] group-hover:translate-x-1 group-hover:text-[var(--foreground)] transition-all" />
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Update work timeline, organisation badges, dates, and live deployed links.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
