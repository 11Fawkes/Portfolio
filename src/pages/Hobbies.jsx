import { useEffect, useState } from 'react';

export default function Hobbies() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const start = new Date('2023-11-01');
    const diff = Math.floor((new Date() - start) / 86400000);
    setDays(diff);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Hobbies & Interests</h2>
        <p className="text-sm text-gray-500 mt-1">The person behind the CV</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
      }}>

        {/* Berlin counter — wide */}
        <div style={{
          gridColumn: 'span 2',
          background: '#eff6ff',
          border: '0.5px solid #bfdbfe',
          borderRadius: '16px',
          padding: '20px',
          transition: 'border-color 0.2s, transform 0.2s',
          cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#3b82f6'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#bfdbfe'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          <div style={{ fontSize:'10px', fontWeight:'500', letterSpacing:'0.06em', textTransform:'uppercase', color:'#6b7280', marginBottom:'8px' }}>Currently based</div>
          <div style={{ fontSize:'40px', fontWeight:'500', color:'#2563eb', lineHeight:'1', marginBottom:'4px' }}>{days}</div>
          <div style={{ fontSize:'11px', color:'#3b82f6', marginBottom:'10px' }}>days in Berlin</div>
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <div style={{
              width:'8px', height:'8px', borderRadius:'50%', background:'#10b981',
              animation:'pulse 1.5s infinite',
            }} />
            <span style={{ fontSize:'11px', color:'#10b981' }}>Still exploring. Still finding new corners.</span>
          </div>
        </div>

        {/* Football */}
        <div style={{
          background: '#f0fdf4', border: '0.5px solid #bbf7d0', borderRadius: '16px', padding: '20px',
          transition: 'border-color 0.2s, transform 0.2s', cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#10b981'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#bbf7d0'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          <div style={{ fontSize:'10px', fontWeight:'500', letterSpacing:'0.06em', textTransform:'uppercase', color:'#6b7280', marginBottom:'8px' }}>Sport</div>
          <div style={{ fontSize:'34px', marginBottom:'8px' }}>⚽</div>
          <div style={{ fontSize:'14px', fontWeight:'500', color:'#111827', marginBottom:'4px' }}>Football</div>
          <div style={{ fontSize:'12px', color:'#6b7280' }}>Weak knee. Still playing. No regrets.</div>
          <div style={{ display:'flex', gap:'5px', marginTop:'10px' }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#10b981' }} />
            ))}
          </div>
        </div>

        {/* Chaos / ADHD */}
        <div style={{
          background: '#0f172a', border: '0.5px solid #1e293b', borderRadius: '16px', padding: '20px',
          transition: 'border-color 0.2s, transform 0.2s', cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#334155'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#1e293b'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          <div style={{ fontSize:'10px', fontWeight:'500', letterSpacing:'0.06em', textTransform:'uppercase', color:'#475569', marginBottom:'8px' }}>Mode</div>
          <div style={{ fontSize:'34px', marginBottom:'8px' }}>⚡</div>
          <div style={{ fontSize:'14px', fontWeight:'500', color:'#f1f5f9', marginBottom:'4px' }}>Thrives in chaos</div>
          <div style={{ fontSize:'12px', color:'#94a3b8', lineHeight:'1.5' }}>Lightly undiagnosed ADHD. Endless energy around people. Needs constant new input.</div>
        </div>

        {/* Manga — tall */}
        <div style={{
          gridRow: 'span 2',
          background: '#fffbeb', border: '0.5px solid #fde68a', borderRadius: '16px', padding: '20px',
          transition: 'border-color 0.2s, transform 0.2s', cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#f59e0b'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#fde68a'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          <div style={{ fontSize:'10px', fontWeight:'500', letterSpacing:'0.06em', textTransform:'uppercase', color:'#6b7280', marginBottom:'8px' }}>Reading</div>
          <div style={{ fontSize:'34px', marginBottom:'8px' }}>📖</div>
          <div style={{ fontSize:'14px', fontWeight:'500', color:'#111827', marginBottom:'4px' }}>Manga & Stories</div>
          <div style={{ fontSize:'12px', color:'#6b7280', lineHeight:'1.5', marginBottom:'10px' }}>Less interested in what's told. More in how it's told.</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'5px', marginBottom:'12px' }}>
            {['Narrative','Structure','Perspective'].map(t => (
              <span key={t} style={{ fontSize:'10px', padding:'3px 8px', borderRadius:'999px', background:'#e0e7ff', color:'#3730a3' }}>{t}</span>
            ))}
          </div>
          <div style={{ fontSize:'12px', color:'#92400e', lineHeight:'1.6', fontStyle:'italic' }}>
            "That instinct bleeds into how I think about data too."
          </div>
        </div>

        {/* Three friend groups — wide dark */}
        <div style={{
          gridColumn: 'span 2',
          background: '#0f172a', border: '0.5px solid #1e293b', borderRadius: '16px', padding: '20px',
          transition: 'border-color 0.2s, transform 0.2s', cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#334155'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#1e293b'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          <div style={{ fontSize:'10px', fontWeight:'500', letterSpacing:'0.06em', textTransform:'uppercase', color:'#475569', marginBottom:'8px' }}>Social life</div>
          <div style={{ fontSize:'14px', fontWeight:'500', color:'#f1f5f9', marginBottom:'12px' }}>Three friend groups. All different vibes.</div>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
            {[
              { color:'#3b82f6', text:'Expats — international chaos crew' },
              { color:'#f59e0b', text:'Indians — home away from home' },
              { color:'#10b981', text:'Germans — book appointments to meet (with love)' },
            ].map(f => (
              <div key={f.text} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:f.color, flexShrink:0 }} />
                <span style={{ fontSize:'12px', color:'#94a3b8' }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nature */}
        <div style={{
          background: '#f0fdf4', border: '0.5px solid #bbf7d0', borderRadius: '16px', padding: '20px',
          transition: 'border-color 0.2s, transform 0.2s', cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#10b981'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#bbf7d0'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          <div style={{ fontSize:'10px', fontWeight:'500', letterSpacing:'0.06em', textTransform:'uppercase', color:'#6b7280', marginBottom:'8px' }}>Movement</div>
          <div style={{ fontSize:'34px', marginBottom:'8px' }}>🌿</div>
          <div style={{ fontSize:'14px', fontWeight:'500', color:'#111827', marginBottom:'4px' }}>Nature & outdoors</div>
          <div style={{ fontSize:'12px', color:'#6b7280' }}>Always moving. Head resets outside.</div>
        </div>

        {/* Gratitude — wide purple */}
        <div style={{
          gridColumn: 'span 3',
          background: '#faf5ff', border: '0.5px solid #e9d5ff', borderRadius: '16px', padding: '20px',
          transition: 'border-color 0.2s, transform 0.2s', cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#8b5cf6'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#e9d5ff'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          <div style={{ fontSize:'10px', fontWeight:'500', letterSpacing:'0.06em', textTransform:'uppercase', color:'#6b7280', marginBottom:'8px' }}>Life in Berlin</div>
          <div style={{ fontSize:'14px', fontWeight:'500', color:'#111827', marginBottom:'6px' }}>Overwhelmed · Delighted · Exhausted · Excited</div>
          <div style={{ fontSize:'12px', color:'#6b7280', lineHeight:'1.6' }}>
            Sometimes all in the same week. None of it has ever felt like too much. Every step moves toward something. Grateful for all of it.
          </div>
        </div>

        {/* What I'm building toward — full width */}
        <div style={{
          gridColumn: 'span 4',
          background: '#1a1208',
          border: '0.5px solid #2e2010',
          borderRadius: '16px',
          padding: '28px',
          cursor: 'default',
        }}>
          <div style={{ fontSize:'10px', fontWeight:'500', letterSpacing:'0.06em', textTransform:'uppercase', color:'#c0392b', marginBottom:'16px' }}>What I'm building toward</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.8fr 1.8fr', gap:'32px', alignItems:'start' }}>
            <div>
              <div style={{ fontSize:'18px', fontWeight:'600', color:'#f0ebe0', lineHeight:'1.3', marginBottom:'8px' }}>Creator.<br/>Researcher.<br/>Problem finder.</div>
              <div style={{ fontSize:'11px', color:'#7a6040', lineHeight:'1.6', marginTop:'12px' }}>The projects are not just portfolio pieces. They're how I think.</div>
            </div>
            <div style={{ fontSize:'12px', color:'#a09070', lineHeight:'1.75' }}>
              Most of the work in this portfolio starts with the same observation: one side of a market has sophisticated tools and the other side has a spreadsheet. Zalando has machine learning models for return rate prediction. Their seller partners have a spreadsheet. That asymmetry is what's interesting — not just as a business problem, but as a design problem. Who builds for the other side?
            </div>
            <div style={{ fontSize:'12px', color:'#a09070', lineHeight:'1.75' }}>
              Ideation isn't a phase before the real work. It is the real work. Finding the right problem, framing it so a non-technical operator can act on it, understanding what they actually need to see — that's where most of the time goes. The code is just how you ship the answer.
              <div style={{ marginTop:'12px', color:'#c0392b', fontSize:'12px', fontStyle:'italic' }}>
                "Why doesn't this exist yet?" is the question driving all of it.
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}
