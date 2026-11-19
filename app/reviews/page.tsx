import type { Metadata } from 'next';
import { firms } from '@/data/firms';
import FirmCard from '@/components/FirmCard';
export const metadata: Metadata = { title: 'Prop Firm Reviews', description: 'Independent prop firm reviews: rules, costs, profit splits and what each firm offers.' };
export default function Reviews({ searchParams }: { searchParams: { type?: string; q?: string } }) {
  const t = searchParams.type, q = (searchParams.q || '').toLowerCase();
  const list = firms.filter(f => (!t || f.kind.toLowerCase() === t) && f.name.toLowerCase().includes(q));
  const chip = (href: string, label: string, on: boolean) => <a key={label} href={href} className={`btn ${on ? 'btn-primary' : 'btn-secondary'}`} style={{padding:'8px 20px'}}>{label}</a>;
  return (
    <div className="wrap" style={{padding:'64px 20px'}}>
      <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>Prop Firm Reviews</h1>
      <p className="muted" style={{maxWidth:720}}>Independent reviews and comparisons covering trading rules, costs and what each firm offers. Rules change often, so each review shows when it was last updated.</p>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center',margin:'32px 0'}}>
        {chip('/reviews','All firms',!t)}{chip('/reviews?type=forex','Forex',t==='forex')}{chip('/reviews?type=futures','Futures',t==='futures')}
        <form action="/reviews" role="search" style={{marginLeft:'auto'}}>
          <label className="sr-only" htmlFor="q">Search firms</label>
          <input id="q" name="q" defaultValue={searchParams.q} placeholder="Search firms" style={{background:'var(--card)',border:'2px solid var(--card-border)',borderRadius:40,padding:'10px 20px',color:'var(--cream)',font:'inherit'}}/>
        </form>
      </div>
      {list.length ? <div className="grid-cards">{list.map(f => <FirmCard key={f.slug} f={f}/>)}</div> : <p className="muted">No firms match. Try another search or filter.</p>}
    </div>
  );
}
