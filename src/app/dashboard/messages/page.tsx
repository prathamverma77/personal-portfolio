'use client';

import React, { useEffect, useState } from 'react';
import { FiMail, FiInbox, FiClock, FiUser, FiCheckCircle } from 'react-icons/fi';

interface MessageItem {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function MessagesDashboardPage() {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch('/api/contact');
        const data = await res.json();
        if (res.ok && data.success) {
          setMessages(data.data);
        } else {
          setError(data.message || 'Failed to fetch messages.');
        }
      } catch (err) {
        console.error('Fetch messages error:', err);
        setError('Connection error fetching messages.');
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2.5">
            <FiMail className="text-xl" /> Inbound Messages
          </h1>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-1">
            Client inquiries and contact form submissions
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-[var(--accent)] border border-[var(--border)] text-xs text-[var(--foreground)] font-semibold w-fit flex items-center gap-2">
          <FiCheckCircle className="text-emerald-500" />
          <span>{messages.length} Received</span>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-16 text-center text-xs text-[var(--muted-foreground)] font-mono flex items-center justify-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading messages from MongoDB...
        </div>
      )}

      {/* Empty State */}
      {!loading && messages.length === 0 && (
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-12 text-center flex flex-col items-center justify-center shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[var(--accent)] border border-[var(--border)] flex items-center justify-center text-xl text-[var(--muted-foreground)] mb-4">
            <FiInbox />
          </div>
          <h3 className="text-base font-bold text-[var(--foreground)] mb-1">No Messages Yet</h3>
          <p className="text-xs text-[var(--muted-foreground)] max-w-sm leading-relaxed">
            When visitors fill out the contact form on your portfolio website, their messages will immediately appear here.
          </p>
        </div>
      )}

      {/* Messages List */}
      {!loading && messages.length > 0 && (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 shadow-xs space-y-3"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-sm">
                    <FiUser />
                  </span>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                        Name:
                      </span>
                      <h3 className="text-sm font-bold text-[var(--foreground)]">{msg.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                        Email:
                      </span>
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-xs text-sky-500 hover:underline font-mono"
                      >
                        {msg.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-[var(--muted-foreground)] font-mono flex items-center gap-1.5 bg-[var(--accent)]/50 px-3 py-1 rounded-full border border-[var(--border)] w-fit">
                  <FiClock className="text-xs" />
                  {new Date(msg.createdAt).toLocaleString()}
                </div>
              </div>

              {/* Message Body Field Label */}
              <div className="pt-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-1.5">
                  Message:
                </span>
                <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed whitespace-pre-wrap bg-[var(--background)] p-4 rounded-lg border border-[var(--border)] font-sans">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
