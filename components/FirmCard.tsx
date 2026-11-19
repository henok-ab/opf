import Link from 'next/link';
import type { Firm } from '@/data/firms';
export default function FirmCard({ f }: { f: Firm }) {
  const rows = [['Type', f.kind + (f.location ? `, ${f.location}` : '')],['Profit split', f.split],['Plans', f.plans],['Highlight', f.highlight]].filter(r => r[1]);
  return (
    <article className="card" style={{padding:28,display:'flex',flexDirection:'column',gap:16}}>
      <h3 style={{margin:0}}>{f.name}</h3>
      <dl className="facts">{rows.map(([k,v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:'auto'}}>
        <Link className="btn btn-primary" href={`/reviews/${f.slug}`}>Review</Link>
        <Link className="btn btn-secondary" href={`/reviews/${f.slug}#overview`}>Overview</Link>
      </div>
    </article>
  );
}
