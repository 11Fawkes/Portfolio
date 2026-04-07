/**
 * A vertical timeline component for displaying a chronological list of roles or
 * events.  Each item should contain dates, role, company and context.
 */
export default function Timeline({ items = [] }) {
  return (
    <ol className="relative border-l border-gray-200">
      {items.map((item, idx) => (
        <li key={idx} className="mb-6 ml-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500">
            {item.dates}
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            {item.role} – {item.company}
          </h3>
          {item.context && (
            <p className="text-sm text-gray-700 mt-1">
              {item.context}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}