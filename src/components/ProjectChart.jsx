import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/**
 * A small horizontal bar chart used within project cards and case studies.
 * Accepts an array of objects with `name` and `value` properties.  Bars
 * will automatically scale to the largest value in the dataset.  Colour
 * values here mirror the Tailwind highlight palette but can be adjusted
 * per instance if needed.
 */
export default function ProjectChart({ data = [], colors }) {
  const defaultColors = ['#2563eb', '#fbbf24', '#f87171', '#34d399'];
  const barColor = colors?.[0] || defaultColors[0];
  return (
    <div className="w-full h-32">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 0, right: 16 }}>
          {/* Hide axes ticks and labels for a cleaner mini chart */}
          <XAxis type="number" hide domain={[0, 'dataMax']} />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip
            contentStyle={{ fontSize: '0.8rem' }}
            cursor={{ fill: 'transparent' }}
          />
          <Bar dataKey="value" fill={barColor} barSize={8} radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}