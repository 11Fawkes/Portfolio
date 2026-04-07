import Card from './Card.jsx';
import Tag from './Tag.jsx';
import ProjectChart from './ProjectChart.jsx';

/**
 * Summary card for each project in the projects overview.  Displays the
 * problem, decision and tags.  Clicking the button triggers the parent
 * callback to open the full case study.
 */
export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          {project.problem}
        </p>
        <p className="text-sm text-gray-500 italic">
          Decision: {project.decision}
        </p>
        <div className="mt-2">
          {project.tags && project.tags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </div>
        {/* Optional mini chart summarising skills or time usage for this project. */}
        {project.skillsUsage && project.skillsUsage.length > 0 && (
          <div className="mt-3">
            <ProjectChart data={project.skillsUsage} />
          </div>
        )}
      </div>
      <button
        onClick={() => onOpenCaseStudy(project)}
        className="mt-4 text-sm text-primary hover:underline self-start"
      >
        Open case study
      </button>
    </Card>
  );
}