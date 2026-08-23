'use client';

import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    } else if (cooldown === 0 && submitted) {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }
    return () => clearTimeout(timer);
  }, [cooldown, submitted]);

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
        setCooldown(3); // 3 seconds timer
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col space-y-6">
            <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
              I am currently open to new opportunities, freelance projects, and collaborations. Have a question or want to work together? Feel free to send a message!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-4 p-4 rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)]">
                <div className="p-2.5 rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] text-lg">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase">Email</h4>
                  <a href="mailto:prathamverma1980@gmail.com" className="text-sm font-medium text-[var(--foreground)] hover:underline">
                    prathamverma1980@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)]">
                <div className="p-2.5 rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] text-lg">
                  📍
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase">Location</h4>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase mb-3">Follow & Connect</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/prathamverma77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--background)] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prathamverma77/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--background)] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/Pratham39423901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--background)] transition-colors"
                >
                  Twitter / X
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="text-4xl">✅</div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">Message Sent Successfully!</h3>
                <p className="text-sm text-[var(--muted-foreground)] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your inquiry has been delivered directly to my dashboard inbox.
                </p>

                {/* Countdown Timer Badge */}
                <div className="pt-4 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] border border-[var(--border)] text-xs font-mono text-[var(--foreground)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Form resets in <span className="font-bold text-sky-500">{cooldown}s</span>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Banner */}
                {error && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[var(--muted-foreground)] uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[var(--muted-foreground)] uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-colors"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-xs font-semibold text-[var(--muted-foreground)] uppercase">
                      Message
                    </label>
                    <span className={`text-[11px] font-mono ${
                      formData.message.length > 500 ? 'text-rose-500 font-bold' : 'text-[var(--muted-foreground)]'
                    }`}>
                      {formData.message.length} / 500 chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    required
                    maxLength={500}
                    rows={4}
                    placeholder="Your message here (max 500 characters)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || cooldown > 0}
                  className="w-full py-3 px-6 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
