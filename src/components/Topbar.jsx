/**
 * Topbar displays the current page title and a global search box.  The search
 * value is lifted to the App component to allow client‑side filtering of
 * projects.  On smaller screens the search input still appears but collapses
 * gracefully.
 */
export default function Topbar({ title, search, onSearch }) {
  return (
    <div className="bg-card border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold text-gray-800 truncate">
          {title}
        </h1>
        <div className="ml-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search projects..."
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-56"
          />
        </div>
      </div>
    </div>
  );
}