/**
 * Small pill‑shaped tag used to display tools, skills and other metadata.
 */
export default function Tag({ children }) {
  return (
    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded mr-1 mt-1">
      {children}
    </span>
  );
}