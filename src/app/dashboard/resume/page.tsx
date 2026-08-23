'use client';

import React, { useEffect, useState } from 'react';
import {
  FiFileText,
  FiUpload,
  FiCheckCircle,
  FiAlertCircle,
  FiExternalLink,
  FiTrash2,
  FiCheck,
  FiXCircle,
  FiClock,
} from 'react-icons/fi';

interface ResumeItem {
  _id: string;
  title: string;
  cloudinaryUrl: string;
  cloudinaryPublicId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function ResumeDashboardPage() {
  const [resumes, setResumes] = useState<ResumeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Alert Banners
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    fetchResumes();
  }, []);

  async function fetchResumes() {
    setLoading(true);
    try {
      const res = await fetch('/api/resumes');
      const data = await res.json();
      if (res.ok && data.success) {
        setResumes(data.data);
      } else {
        setErrorMsg(data.message || 'Failed to fetch resumes');
      }
    } catch (err) {
      console.error('Fetch resumes error:', err);
      setErrorMsg('Connection error fetching resumes');
    } finally {
      setLoading(false);
    }
  }

  // Handle PDF Upload Form Submit
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!title.trim()) {
      setErrorMsg('Please enter a descriptive title for the resume');
      return;
    }

    if (!selectedFile) {
      setErrorMsg('Please select a PDF file to upload');
      return;
    }

    if (selectedFile.type !== 'application/pdf' && !selectedFile.name.toLowerCase().endsWith('.pdf')) {
      setErrorMsg('Uploaded file must be a valid PDF document');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('file', selectedFile);

      const res = await fetch('/api/resumes', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || 'Resume uploaded successfully!');
        setTitle('');
        setSelectedFile(null);
        // Reset file input element value if present
        const fileInput = document.getElementById('pdf-file-input') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        fetchResumes();
      } else {
        setErrorMsg(data.message || 'Failed to upload resume');
      }
    } catch (err) {
      console.error('Upload resume error:', err);
      setErrorMsg('Error uploading file to Cloudinary.');
    } finally {
      setUploading(false);
    }
  };

  // Handle Activate Resume
  const handleActivate = async (id: string, resumeTitle: string) => {
    setActionLoadingId(id);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch(`/api/resumes/${id}/activate`, {
        method: 'PATCH',
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(`"${resumeTitle}" is now the active resume on your portfolio website.`);
        setResumes(data.data);
      } else {
        setErrorMsg(data.message || 'Failed to activate resume');
      }
    } catch (err) {
      console.error('Activate error:', err);
      setErrorMsg('Connection error activating resume');
    } finally {
      setActionLoadingId(null);
    }
  };

  // Handle Deactivate Resume
  const handleDeactivate = async (id: string, resumeTitle: string) => {
    setActionLoadingId(id);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch(`/api/resumes/${id}/deactivate`, {
        method: 'PATCH',
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(`"${resumeTitle}" deactivated.`);
        setResumes(data.data);
      } else {
        setErrorMsg(data.message || 'Failed to deactivate resume');
      }
    } catch (err) {
      console.error('Deactivate error:', err);
      setErrorMsg('Connection error deactivating resume');
    } finally {
      setActionLoadingId(null);
    }
  };

  // Handle Delete Resume
  const handleDelete = async (id: string, isActive: boolean, resumeTitle: string) => {
    if (isActive) {
      setErrorMsg('Deactivate this resume before deleting it.');
      return;
    }

    if (!confirm(`Are you sure you want to delete "${resumeTitle}"? This will permanently delete the file from Cloudinary and MongoDB.`)) {
      return;
    }

    setActionLoadingId(id);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch(`/api/resumes/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(`"${resumeTitle}" deleted successfully.`);
        setResumes(data.data);
      } else {
        setErrorMsg(data.message || 'Failed to delete resume');
      }
    } catch (err) {
      console.error('Delete error:', err);
      setErrorMsg('Connection error deleting resume');
    } finally {
      setActionLoadingId(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2.5">
            <FiFileText className="text-xl" /> Resume Management
          </h1>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-1">
            Upload PDF versions to Cloudinary & set the active resume for your portfolio
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-[var(--accent)] border border-[var(--border)] text-xs text-[var(--foreground)] font-semibold w-fit flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Cloudinary Connected
        </div>
      </div>

      {/* Global Banners */}
      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold flex items-center gap-3">
          <FiAlertCircle className="text-base flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-semibold flex items-center gap-3">
          <FiCheckCircle className="text-base flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Section 1: Upload Form */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 shadow-xs">
        <h2 className="text-lg font-bold tracking-tight text-[var(--foreground)] mb-4 flex items-center gap-2">
          <FiUpload /> Upload New Resume
        </h2>

        <form onSubmit={handleUploadSubmit} className="space-y-4 max-w-2xl">
          <div>
            <label htmlFor="title" className="block text-xs font-semibold uppercase text-[var(--muted-foreground)] mb-1.5">
              Resume Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="e.g. Full Stack Developer Resume (2026)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] text-xs sm:text-sm placeholder-[var(--muted-foreground)] focus:outline-none focus:border-[var(--foreground)] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="pdf-file-input" className="block text-xs font-semibold uppercase text-[var(--muted-foreground)] mb-1.5">
              PDF Document (Max 10MB)
            </label>
            <input
              type="file"
              id="pdf-file-input"
              accept=".pdf,application/pdf"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="w-full px-3 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] text-xs file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[var(--accent)] file:text-[var(--foreground)] hover:file:bg-[var(--background)] cursor-pointer"
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="px-6 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all disabled:opacity-50 inline-flex items-center gap-2 cursor-pointer shadow-xs"
          >
            {uploading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Uploading to Cloudinary...
              </>
            ) : (
              <>
                <FiUpload /> Upload Resume
              </>
            )}
          </button>
        </form>
      </div>

      {/* Section 2: Uploaded Resumes List */}
      <div>
        <h2 className="text-lg font-bold tracking-tight text-[var(--foreground)] mb-4">
          Your Resumes ({resumes.length})
        </h2>

        {loading && (
          <div className="py-12 text-center text-xs text-[var(--muted-foreground)] font-mono flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading resumes from MongoDB...
          </div>
        )}

        {!loading && resumes.length === 0 && (
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-12 text-center text-xs text-[var(--muted-foreground)]">
            No resume uploaded yet. Use the form above to upload your first PDF resume.
          </div>
        )}

        {!loading && resumes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resumes.map((item) => (
              <div
                key={item._id}
                className={`bg-[var(--card)] border rounded-xl p-6 shadow-xs flex flex-col justify-between transition-all ${
                  item.isActive
                    ? 'border-emerald-500/60 ring-1 ring-emerald-500/20'
                    : 'border-[var(--border)]'
                }`}
              >
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                        item.isActive
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/30'
                          : 'bg-[var(--accent)] text-[var(--muted-foreground)] border border-[var(--border)]'
                      }`}
                    >
                      {item.isActive ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          ACTIVE
                        </>
                      ) : (
                        <>
                          <span className="w-2 h-2 rounded-full bg-zinc-500" />
                          INACTIVE
                        </>
                      )}
                    </span>

                    <span className="text-[11px] text-[var(--muted-foreground)] font-mono flex items-center gap-1">
                      <FiClock /> {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[var(--foreground)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] font-mono truncate mb-4">
                    {item.cloudinaryUrl}
                  </p>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between flex-wrap gap-2">
                  {/* View PDF */}
                  <a
                    href={item.cloudinaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--foreground)] text-xs font-semibold border border-[var(--border)] hover:bg-[var(--background)] transition-colors inline-flex items-center gap-1.5"
                  >
                    View <FiExternalLink className="text-xs" />
                  </a>

                  <div className="flex items-center gap-2">
                    {/* Activate / Deactivate Toggle */}
                    {item.isActive ? (
                      <button
                        onClick={() => handleDeactivate(item._id, item.title)}
                        disabled={actionLoadingId === item._id}
                        className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-white border border-amber-500/30 text-xs font-semibold transition-all disabled:opacity-50 cursor-pointer inline-flex items-center gap-1"
                      >
                        <FiXCircle className="text-xs" /> Deactivate
                      </button>
                    ) : (
                      <button
                        onClick={() => handleActivate(item._id, item.title)}
                        disabled={actionLoadingId === item._id}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 text-xs font-semibold transition-all disabled:opacity-50 cursor-pointer inline-flex items-center gap-1"
                      >
                        <FiCheck className="text-xs" /> Activate
                      </button>
                    )}

                    {/* Delete Resume */}
                    <button
                      onClick={() => handleDelete(item._id, item.isActive, item.title)}
                      disabled={actionLoadingId === item._id || item.isActive}
                      title={item.isActive ? 'Deactivate this resume before deleting it.' : 'Delete resume'}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-1 ${
                        item.isActive
                          ? 'opacity-40 cursor-not-allowed bg-zinc-500/10 text-zinc-500'
                          : 'text-rose-500 bg-rose-500/10 hover:bg-rose-500 hover:text-white border border-rose-500/30 cursor-pointer'
                      }`}
                    >
                      <FiTrash2 className="text-xs" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
