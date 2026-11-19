import type { Metadata } from 'next';
import Link from 'next/link';
import { firms, type Firm } from '@/data/firms';
import CompareSelector from '@/components/CompareSelector';
export const metadata: Metadata = { title: 'Compare Prop Firms', description: 'Compare up to three prop firms side by side: profit split, plans, targets and drawdowns.' };
const rows: [string, keyof Firm][] = [['Type','kind'],['Base country','location'],['Profit split','split'],['Plans','plans'],['Profit targets','targets'],['Drawdown limits','limits'],['Highlight','highlight']];
export default function Compare({ searchParams }: { searchParams: { firms?: string } }) {
  const slugs = (searchParams.firms || '').split(',').filter(Boolean).slice(0, 3);
  const sel = slugs.map(s => firms.find(f => f.slug === s)).filter((f): f is Firm => !!f);
  const shown = rows.filter(([, k]) => sel.some(f => f[k]));
  return (
    <div className="wrap" style={{padding:'64px 20px'}}>
      <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>Compare Prop Firms</h1>
      <p className="muted" style={{maxWidth:720}}>Pick up to three firms. The page address updates, so you can copy it to share your comparison.</p>
      <CompareSelector selected={sel.map(f => f.slug)}/>
      {sel.length < 2 ? <p className="muted">Select at least two firms to see the comparison.</p> : (
        <div style={{overflowX:'auto'}} className="card">
          <table className="tbl">
            <thead><tr><th scope="col"><span className="sr-only">Feature</span></th>{sel.map(f => <th key={f.slug} scope="col"><Link href={`/reviews/${f.slug}`}>{f.name}</Link></th>)}</tr></thead>
            <tbody>{shown.map(([label, k]) => <tr key={k}><th scope="row">{label}</th>{sel.map(f => <td key={f.slug}>{(f[k] as string) || '—'}</td>)}</tr>)}</tbody>
          </table>
        </div>)}
      <p className="muted" style={{fontSize:15,marginTop:24}}>Educational content only. Not financial advice. Trading involves risk. Rules change often; verify on each firm&apos;s official site.</p>
    </div>
  );
}
