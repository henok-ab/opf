import type { Metadata } from 'next';
import news from '@/data/news.json';
export const metadata: Metadata = { title: 'High Impact News This Week', description: 'Weekly high-impact economic calendar, times in UTC.' };
type Ev = { day: string; time: string; currency: string; event: string; impact: string };
const flag: Record<string, string> = { USD:'🇺🇸', EUR:'🇪🇺', GBP:'🇬🇧', JPY:'🇯🇵', AUD:'🇦🇺', NZD:'🇳🇿', CAD:'🇨🇦', CHF:'🇨🇭', CNY:'🇨🇳' };
const fmt = (d: string) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
function Week({ start, events }: { start: string; events: Ev[] }) {
  return (
    <section className="card" style={{padding:24,overflowX:'auto'}}>
      <h2 style={{fontSize:'1.8rem'}}>Week of {fmt(start)}</h2>
      <table className="tbl"><thead><tr><th scope="col">Day</th><th scope="col">Time (UTC)</th><th scope="col">Currency</th><th scope="col">Event</th><th scope="col">Impact</th></tr></thead>
        <tbody>{events.map((e, i) => <tr key={i}><th scope="row">{e.day}</th><td>{e.time}</td><td><span aria-hidden>{flag[e.currency] || ''}</span> {e.currency}</td><td>{e.event}</td><td>{e.impact}</td></tr>)}</tbody></table>
    </section>
  );
}
export default function News() {
  const weeks = [...(news.weeks as { weekStart: string; events: Ev[] }[])].sort((a, b) => b.weekStart.localeCompare(a.weekStart));
  const today = new Date().toISOString().slice(0, 10);
  const cur = weeks.find(w => w.weekStart <= today) || weeks[0]; const archive = weeks.filter(w => w !== cur);
  return (
    <div className="wrap" style={{padding:'64px 20px',display:'grid',gap:32}}>
      <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>High Impact News</h1>
      <p className="muted" style={{maxWidth:720,margin:0}}>The week&apos;s major economic releases, in UTC. Many prop firms restrict trading around news, so check your firm&apos;s rules.</p>
      {cur ? <Week start={cur.weekStart} events={cur.events}/> : <p className="muted">No events published yet.</p>}
      {archive.length > 0 && <><h2>Archive</h2>{archive.map(w => <Week key={w.weekStart} start={w.weekStart} events={w.events}/>)}</>}
    </div>
  );
}
