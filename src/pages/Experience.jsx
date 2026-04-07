import experiences from '../data/experience.js';
import KPITile from '../components/KPITile.jsx';
import Timeline from '../components/Timeline.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';

/**
 * Experience page: shows an overview dashboard with KPIs, a timeline of roles
 * and detailed cards for each experience entry.  KPIs are computed on the fly
 * from the experience data: number of roles, approximate years of experience
 * and total stakeholder engagements (placeholder).
 */
export default function Experience() {
  // Compute simple dashboard metrics.  In lieu of precise dates we count roles
  // and estimate years by counting unique years in the date strings.
  const roleCount = experiences.length;
  // Extract start/end years from dates like "Jul 2021 – Jan 2022".
  const years = experiences
    .map((exp) => exp.dates.match(/(\d{4})/g))
    .flat()
    .map(Number);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  const totalYears = Math.max(1, maxYear - minYear + 1);
  const stakeholderTouches = roleCount * 3; // placeholder multiplier

  const dashboardKpis = [
    { label: 'Roles', value: roleCount },
    { label: 'Years of Experience', value: `${totalYears}+` },
    { label: 'Stakeholder Touchpoints', value: stakeholderTouches },
  ];

  // Helper: convert a month abbreviation to a number (Jan=1, Feb=2, ...)
  const monthIndex = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  // Compute duration in months for each experience.  If dates are missing or
  // formatted unexpectedly, default to 1 month so the bar still appears.
  function durationInMonths(dates) {
    const match = dates.match(/([A-Za-z]{3}) (\d{4}) \u2013 ([A-Za-z]{3}) (\d{4})/);
    if (!match) return 1;
    const startMonth = monthIndex[match[1]];
    const startYear = parseInt(match[2], 10);
    const endMonth = monthIndex[match[3]];
    const endYear = parseInt(match[4], 10);
    const start = startYear * 12 + startMonth - 1;
    const end = endYear * 12 + endMonth - 1;
    return Math.max(1, end - start + 1);
  }
  const durations = experiences.map((exp) => durationInMonths(exp.dates));
  const maxDuration = Math.max(...durations);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Dashboard row */}
      <section className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dashboardKpis.map((kpi, index) => (
            <KPITile key={index} kpi={kpi} />
          ))}
        </div>
      </section>
      {/* Timeline */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Timeline</h3>
        <Timeline items={experiences} />
      </section>
      {/* Progress bars visualising the relative duration of each role */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Progress</h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const duration = durations[index];
            const width = (duration / maxDuration) * 100;
            return (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">
                    {exp.role} @ {exp.company}
                  </span>
                  <span className="text-xs text-gray-500">{exp.dates}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${width}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Detailed experience cards */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Experience Details</h3>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} item={exp} />
        ))}
      </section>
    </div>
  );
}