import Tag from './Tag.jsx';
import ProjectChart from './ProjectChart.jsx';

/**
 * Modal overlay for displaying a full project case study.  The parent
 * component controls its visibility and passes the project object to show.
 */
export default function ProjectCaseStudy({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white max-w-3xl w-full mx-4 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {project.title}
        </h2>
        {/* Larger chart providing a visual summary of skills or time spent on the project. */}
        {project.skillsUsage && project.skillsUsage.length > 0 && (
          <div className="mb-4">
            <ProjectChart data={project.skillsUsage} />
          </div>
        )}
        <div className="space-y-4 text-sm text-gray-700">
          <section>
            <h3 className="font-semibold text-gray-800 mb-1">1. Context</h3>
            <p>{project.context}</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-800 mb-1">2. Business Question</h3>
            <p>{project.business_question}</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-800 mb-1">3. Data</h3>
            <p>{project.data}</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-800 mb-1">4. Approach</h3>
            <p>{project.approach}</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-800 mb-1">5. Key Insights</h3>
            <ul className="list-disc list-inside">
              {project.insights && project.insights.map((insight, idx) => (
                <li key={idx}>{insight}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="font-semibold text-gray-800 mb-1">6. Recommendation</h3>
            <p>{project.recommendation}</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-800 mb-1">7. Validation</h3>
            <p>{project.validation}</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-800 mb-1">8. Artifacts</h3>
            <div className="flex flex-wrap gap-3">
              {project.artifacts && project.artifacts.map((art, idx) => (
                <a
                  key={idx}
                  href={art.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  {art.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}