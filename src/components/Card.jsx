/**
 * A simple card container with padding, rounded corners and shadow.  Use this
 * component to wrap content in a consistent style across the dashboard.
 */
export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-card shadow-sm border border-gray-200 rounded-lg p-4 transition transform duration-200 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}