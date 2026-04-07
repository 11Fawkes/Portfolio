import skills from '../data/skills.js';
import languages from '../data/languages.js';
import Tag from '../components/Tag.jsx';
import SkillsChart from '../components/SkillsChart.jsx';

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-8">
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills Overview</h3>
        <SkillsChart groups={skills} />
      </section>
      {skills.map((group) => (
        <section key={group.group}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.group}</h3>
          <p className="text-sm text-gray-600 mb-2">{group.description}</p>
          <div className="flex flex-wrap">
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </section>
      ))}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Languages</h3>
        <div className="flex flex-wrap">
          {languages.map((lang) => (
            <div key={lang.name} className="mr-4 mb-2 flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-1">{lang.name}:</span>
              <span className="text-sm text-gray-500">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
