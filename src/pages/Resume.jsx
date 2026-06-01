import profile from '../data/profile.js';
import Btn from '../components/Btn.jsx';
export default function Resume() {
  return (
    <div className="page" style={{ paddingTop: '6rem', paddingBottom: '6rem', maxWidth: '48rem' }}>
      <div className="sec-header">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
          <span className="sec-num">05</span>
          <h1 className="sec-title">Resume</h1>
        </div>
      </div>
      <p className="text-muted leading-relaxed" style={{ fontWeight: 300, marginBottom: '2.5rem' }}>
        {profile.workAuth}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
        <Btn href={profile.resumeUrl} download>Download PDF →</Btn>
        <Btn href={profile.links.linkedin} variant="gold">Open LinkedIn ↗</Btn>
      </div>
      <div style={{ border: 'var(--b-light)' }}>
        <iframe src={profile.resumeUrl} style={{ width: '100%', height: '80vh', border: 'none' }}
                title="Dhruv Kumar Resume" />
      </div>
    </div>
  );
}
