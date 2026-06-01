// To change how ALL experience entries look: edit this file only.
// Content comes from src/data/experience.js — never edit content here.
export default function ExperienceRow({ exp, dark = false }) {
  const c = {
    primary:   dark ? 'var(--c-paper)'  : 'var(--c-ink)',
    secondary: dark ? '#8a8a8a'         : 'var(--c-muted)',
    border:    dark ? 'var(--c-ink-3)'  : 'var(--c-paper-3)',
  };
  return (
    <div className="reveal" style={{
      display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem',
      borderTop: `1px solid ${c.border}`, padding: '2.5rem 0',
      transition: 'background var(--t-base)',
    }}>
      <div>
        <div className="label" style={{ marginBottom: '0.4rem' }}>{exp.dates}</div>
        <div className="font-mono text-muted" style={{ fontSize: 'var(--fs-xs)' }}>{exp.company}</div>
      </div>
      <div>
        <h3 className="font-display font-semibold leading-tight"
            style={{ fontSize: 'var(--fs-h2)', color: c.primary, marginBottom: '0.5rem' }}>
          {exp.role}
        </h3>
        <p style={{ fontSize: 'var(--fs-sm)', color: c.secondary,
                    fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.65 }}>
          {exp.context}
        </p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
          {exp.impact.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.75rem',
                                  fontSize: 'var(--fs-sm)', color: c.secondary,
                                  fontWeight: 300, lineHeight: 1.65 }}>
              <span style={{ color: 'var(--c-gold)', flexShrink: 0, marginTop: '0.1rem' }}>—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {exp.tools.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}
