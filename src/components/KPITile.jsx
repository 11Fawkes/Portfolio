/**
 * KPI tile component used on the home and experience dashboards.  Accepts an
 * object with a label and a value.
 */
export default function KPITile({ kpi }) {
  return (
    <div className="bg-card shadow-sm border border-gray-200 rounded-lg p-4 flex flex-col justify-between">
      <span className="text-2xl font-bold text-primary">
        {kpi.value}
      </span>
      <span className="text-sm text-gray-600 mt-2">
        {kpi.label}
      </span>
    </div>
  );
}