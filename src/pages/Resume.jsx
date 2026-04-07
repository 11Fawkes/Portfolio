import profile from '../data/profile.js';

/**
 * Resume page: embeds the candidate's resume PDF using an <embed> tag and
 * provides quick access to download the PDF or visit LinkedIn.  Also shows
 * work authorization text.
 */
export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-6">
      {/* Display resume pages as images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profile.resumeImages &&
          profile.resumeImages.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`Resume page ${idx + 1}`}
              className="w-full border border-gray-200 rounded-lg shadow-sm"
            />
          ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href={profile.resumeUrl}
          download
          className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90"
        >
          Download PDF
        </a>
        <a
          href={profile.links.linkedin || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
        >
          Open LinkedIn
        </a>
      </div>
      <p className="text-sm text-gray-600">
        {profile.workAuth}
      </p>
    </div>
  );
}