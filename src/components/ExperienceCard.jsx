import Card from './Card.jsx';
import Tag from './Tag.jsx';

/**
 * Detailed card for a single experience entry.  Displays context,
 * responsibilities, impact bullets and tools/tags.
 */
export default function ExperienceCard({ item }) {
  return (
    <Card className="mb-6">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900">
          {item.role} @ {item.company}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{item.dates}</p>
        {item.context && (
          <p className="text-sm text-gray-700 mb-2">
            <strong>Context:</strong> {item.context}
          </p>
        )}
        {item.responsibilities && (
          <p className="text-sm text-gray-700 mb-2">
            <strong>Responsibilities:</strong> {item.responsibilities}
          </p>
        )}
        {item.impact && item.impact.length > 0 && (
          <div className="mb-2">
            <strong className="text-sm text-gray-700">Impact:</strong>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
              {item.impact.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        )}
        {item.tools && item.tools.length > 0 && (
          <div className="mt-2">
            {item.tools.map((tool, idx) => (
              <Tag key={idx}>{tool}</Tag>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}