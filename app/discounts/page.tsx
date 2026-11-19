import type { Metadata } from 'next';
import { discounts } from '@/data/discounts';
import { getFirm } from '@/data/firms';
export const metadata: Metadata = { title: 'Prop Firm Discount Codes' };
export default function Discounts() {
  return (
    <div className="wrap" style={{padding:'64px 20px'}}>
      <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>Discounts</h1>
      <p className="card" style={{padding:20,fontSize:17}}>Some links on this page are affiliate links. We may earn a commission at no extra cost to you.</p>
      <div className="grid-cards" style={{marginTop:32}}>{discounts.map(d => (
        <section key={d.slug} id={d.slug} className="card" style={{padding:28}}>
          <h3>{getFirm(d.slug)?.name}</h3><p>{d.percent} off</p>
          <p>Code: <strong style={{color:'var(--orange)'}}>{d.code}</strong></p>
          <a className="btn btn-primary" href={d.url} target="_blank" rel="sponsored nofollow noopener">Get discount</a>
          <p className="muted" style={{fontSize:15}}>Expires {d.expires}. {d.fine}</p>
        </section>))}</div>
    </div>
  );
}
