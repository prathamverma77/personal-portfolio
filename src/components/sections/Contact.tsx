'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)]">
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
                  href="#"
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
              <div className="py-12 text-center space-y-3">
                <div className="text-4xl">✅</div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">Message Sent!</h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <label htmlFor="message" className="block text-xs font-semibold text-[var(--muted-foreground)] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm hover:opacity-90 transition-all shadow-sm"
                >
                  Send Message
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
