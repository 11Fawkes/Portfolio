import { useState } from 'react';
import projects from '../data/projects.js';
import ProjectCaseStudy from '../components/ProjectCaseStudy.jsx';
import ProjectChart from '../components/ProjectChart.jsx';

const CATEGORIES = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const categoryColors = {
  'ML & Explainability': 'bg-blue-100 text-blue-700',
  'Analytics': 'bg-emerald-100 text-emerald-700',
  'ML & Product': 'bg-purple-100 text-purple-700',
  'Data Engineering': 'bg-orange-100 text-orange-700',
  'Business Analysis': 'bg-amber-100 text-amber-700',
  'Growth Analytics': 'bg-teal-100 text-teal-700',
};

export default function Projects() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-8">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col"
          >
            {/* Category badge */}
            <div className="px-5 pt-5 pb-0">
              <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${categoryColors[project.category] || 'bg-gray-100 text-gray-600'}`}>
                {project.category}
              </span>

              <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3 line-clamp-3">
                {project.outcome}
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mini chart */}
              {project.skillsUsage && (
                <div className="mb-4">
                  <ProjectChart data={project.skillsUsage} />
                </div>
              )}
            </div>

            {/* Footer actions — pinned to bottom */}
            <div className="mt-auto px-5 py-4 border-t border-gray-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setSelected(project)}
                className="text-sm font-medium text-primary hover:underline"
              >
                View Case Study →
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-800 hover:text-white px-3 py-1.5 rounded-lg transition-all"
              >
                {/* GitHub icon */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Case study modal */}
      {selected && (
        <ProjectCaseStudy project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
