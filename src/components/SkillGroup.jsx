// To change how ALL skill groups look: edit this file only.
// Content comes from src/data/skills.js — never edit content here.
export default function SkillGroup({ group }) {
  return (
    <div className="bg-paper p-8">
      <div className="label" style={{ marginBottom: '0.5rem' }}>{group.group}</div>
      <p className="text-muted leading-relaxed"
         style={{ fontSize: 'var(--fs-sm)', fontWeight: 300, marginBottom: '1.5rem' }}>
        {group.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
        {group.items.map(item => (
          <span key={item} className="tag"
                style={{ transition: 'all var(--t-fast)', cursor: 'default' }}
                onMouseEnter={e => { e.target.style.borderColor='var(--c-gold)'; e.target.style.color='var(--c-gold)'; }}
                onMouseLeave={e => { e.target.style.borderColor='var(--c-paper-3)'; e.target.style.color='var(--c-muted)'; }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
