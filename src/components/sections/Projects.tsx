import React from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce web application featuring dynamic product filtering, cart management, and seamless payment processing.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with drag-and-drop kanban boards, workspace organization, and real-time updates.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'A modern SaaS application leveraging generative AI APIs to produce blog posts, marketing copy, and automated email drafts.',
    tags: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Featured Projects
          </h2>
        </div>

        {/* Static Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 flex flex-col justify-between hover:border-[var(--ring)] transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--muted-foreground)] transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <a
                    href={project.githubUrl}
                    className="text-xs font-semibold text-[var(--foreground)] hover:text-[var(--muted-foreground)] transition-colors inline-flex items-center gap-1"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-xs font-semibold text-[var(--foreground)] hover:text-[var(--muted-foreground)] transition-colors inline-flex items-center gap-1"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;