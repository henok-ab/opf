import { legal } from '@/data/legal';
export default function LegalPage({ doc }: { doc: string }) {
  const d = legal[doc];
  return (
    <div className="wrap" style={{padding:'64px 20px'}}>
      <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>{d.title}</h1>
      <p className="card" style={{padding:16,fontSize:16,maxWidth:760}}>[Have a lawyer review] This is draft text and not legal advice.</p>
      <div className="prose"><p>{d.intro}</p>
        {d.sections.map(([h, t]) => <section key={h}><h2>{h}</h2><p>{t}</p></section>)}
        <p style={{fontSize:15}}>Last updated: [DATE]</p></div>
    </div>
  );
}
