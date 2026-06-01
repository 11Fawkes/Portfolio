// Used at the top of every page section.
// To change the header style globally: edit .sec-header in src/styles/index.css
export default function SectionHeader({ num, title, right, dark = false }) {
  return (
    <div className={`sec-header ${dark ? 'dark' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
        <span className="sec-num">{num}</span>
        <h2 className={`sec-title ${dark ? 'dark' : ''}`}>{title}</h2>
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}
