import { Link } from 'react-router-dom';
import profile from '../data/profile.js';
import kpis from '../data/kpis.js';
import experiences from '../data/experience.js';
import projects from '../data/projects.js';
import Card from '../components/Card.jsx';
import KPITile from '../components/KPITile.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';

export default function Home() {
  // Feature the NTT Global role (index 2) as the strongest experience
  const featuredExperience = experiences[2];
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-4">
        <div className="flex justify-center lg:justify-start">
          <img
            src={profile.photo}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border border-gray-300 shadow-sm"
          />
        </div>
        <div className="lg:col-span-2 space-y-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{profile.name}</h1>
            {profile.tagline && (
              <p className="text-md text-primary mt-1">{profile.tagline}</p>
            )}
            <p className="mt-3 text-gray-700 max-w-prose">{profile.intro}</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/projects" className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90">
              View Projects
            </Link>
            <a href={profile.resumeUrl} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300" download>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Video — only shown if a URL is set */}
      {profile.videoUrl && (
        <section>
          <h3 className="text-lg font-semibold mb-2">60-second overview</h3>
          <p className="text-sm text-gray-600 mb-2">{profile.videoDescription}</p>
          <VideoEmbed videoUrl={profile.videoUrl} />
        </section>
      )}

      {/* KPIs */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <KPITile key={index} kpi={kpi} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Featured</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredExperience && (
            <Card>
              <h4 className="text-lg font-semibold text-gray-900">{featuredExperience.role}</h4>
              <p className="text-sm text-gray-600">{featuredExperience.company}</p>
              <p className="text-sm text-gray-600 mt-1">{featuredExperience.impactSummary}</p>
              <Link to="/experience" className="text-primary hover:underline text-sm mt-2 inline-block">
                See Experience
              </Link>
            </Card>
          )}
          {featuredProjects.map((p) => (
            <Card key={p.title}>
              <h4 className="text-lg font-semibold text-gray-900">{p.title}</h4>
              <p className="text-sm text-gray-600">{p.outcome || p.problem}</p>
              <Link to="/projects" className="text-primary hover:underline text-sm mt-2 inline-block">
                View Project
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
