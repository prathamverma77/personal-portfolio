'use client';

import React, { useState, useEffect } from 'react';
import { FiX, FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Countdown timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    } else if (cooldown === 0 && submitted) {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose(); // Automatically close modal after cooldown
    }
    return () => clearTimeout(timer);
  }, [cooldown, submitted, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || cooldown > 0) return;

    if (formData.message.length > 500) {
      setError(`Message cannot exceed 500 characters (currently ${formData.message.length} characters)`);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setCooldown(3); // 3-second cooldown timer
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Modal contact submit error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block">
              Get in Touch
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Hire Me
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="pt-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="text-4xl">✅</div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Message Delivered!</h3>
              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-xs mx-auto leading-relaxed">
                Thank you for reaching out. Your inquiry has been sent directly to my dashboard inbox.
              </p>

              {/* Countdown Timer Badge */}
              <div className="pt-2 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] border border-[var(--border)] text-xs font-mono text-[var(--foreground)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Modal closes in <span className="font-bold text-sky-500">{cooldown}s</span>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Banner */}
              {error && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold">
                  {error}
                </div>
              )}

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-[var(--muted-foreground)] uppercase mb-1.5 flex items-center gap-1.5">
                  <FiUser className="text-xs" /> Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] text-xs sm:text-sm focus:outline-none focus:border-[var(--foreground)] transition-colors"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold text-[var(--muted-foreground)] uppercase mb-1.5 flex items-center gap-1.5">
                  <FiMail className="text-xs" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] text-xs sm:text-sm focus:outline-none focus:border-[var(--foreground)] transition-colors"
                />
              </div>

              {/* Message Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-[var(--muted-foreground)] uppercase flex items-center gap-1.5">
                    <FiMessageSquare className="text-xs" /> Message
                  </label>
                  <span className={`text-[11px] font-mono ${
                    formData.message.length > 500 ? 'text-rose-500 font-bold' : 'text-[var(--muted-foreground)]'
                  }`}>
                    {formData.message.length} / 500 chars
                  </span>
                </div>
                <textarea
                  required
                  maxLength={500}
                  rows={4}
                  placeholder="Describe your project, role, or inquiry (max 500 characters)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] text-xs sm:text-sm focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading || cooldown > 0}
                  className="px-6 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5 text-current" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend className="text-xs" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
