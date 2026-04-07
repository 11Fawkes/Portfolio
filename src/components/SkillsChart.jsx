import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/**
 * SkillsChart visualises the distribution of skills across categories.  It
 * expects a list of skill group objects with a `group` name and an `items`
 * array.  Each slice represents the number of skills in that group.
 */
export default function SkillsChart({ groups = [] }) {
  const data = groups.map((g) => ({ name: g.group, value: g.items.length }));
  const COLORS = ['#2563eb', '#fbbf24', '#f87171', '#34d399'];
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}