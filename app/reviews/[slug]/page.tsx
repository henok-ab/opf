import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { firms, getFirm } from '@/data/firms';
import VideoEmbed from '@/components/VideoEmbed';
import JsonLd from '@/components/JsonLd';
import { crumbs } from '@/lib/seo';
export const generateStaticParams = () => firms.map(f => ({ slug: f.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const f = getFirm(params.slug); if (!f) return {};
  return { title: `${f.name} Review`, description: `Independent ${f.name} review: rules, profit split, plans and who it suits.` };
}
export default function Review({ params }: { params: { slug: string } }) {
  const f = getFirm(params.slug); if (!f) notFound();
  const facts = [['Type',f.kind],['Base country',f.location],['Plans',f.plans],['Profit split',f.split],['Profit target(s)',f.targets],['Drawdown limits',f.limits],['Platforms',f.platforms],['Payout frequency',f.payouts]].filter(r => r[1]);
  const jsonLd = f.faq?.length ? { '@context':'https://schema.org','@type':'FAQPage',mainEntity:f.faq.map(x => ({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}})) } : null;
  return (
    <article className="wrap" style={{padding:'64px 20px',display:'grid',gap:48}}>
      <header>
        <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>{f.name} Review</h1>
        <p className="muted">Last updated {f.updated}</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <a className="btn btn-primary" href={f.affiliateUrl} target="_blank" rel="sponsored nofollow noopener">Visit {f.name}</a>
          <Link className="btn btn-secondary" href={`/discounts#${f.slug}`}>Get discount</Link>
        </div>
        <p className="muted" style={{fontSize:15}}>Affiliate link: we may earn a commission at no extra cost to you.</p>
      </header>
      <section id="overview" className="card"><h2>Quick facts</h2>
        <dl className="facts">{facts.map(([k,v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section>
      {(f.pros || f.cons) && <section className="grid-cards">
        {f.pros && <div className="card pro"><h3>Pros</h3><ul>{f.pros.map(p => <li key={p}>{p}</li>)}</ul></div>}
        {f.cons && <div className="card con"><h3>Cons</h3><ul>{f.cons.map(p => <li key={p}>{p}</li>)}</ul></div>}</section>}
      {f.whoFor && <section><h2>Who is it for</h2><p className="muted">{f.whoFor}</p></section>}
      {f.youtubeId && <section><h2>Review video</h2><VideoEmbed id={f.youtubeId} title={`${f.name} review`}/>{f.videoSummary && <p className="muted" style={{marginTop:16}}>{f.videoSummary}</p>}</section>}
      {f.faq && <section><h2>FAQ</h2>{f.faq.map(x => <details key={x.q} className="card" style={{marginBottom:12,padding:20}}><summary style={{cursor:'pointer',fontWeight:800}}>{x.q}</summary><p className="muted">{x.a}</p></details>)}</section>}
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>}
      <JsonLd data={crumbs([['Home','/'],['Reviews','/reviews'],[f.name,`/reviews/${f.slug}`]])}/>
      <footer><Link className="btn btn-secondary" href="/compare">Compare with another firm</Link>
        <p className="muted" style={{fontSize:15}}>Educational content only. Not financial advice. Trading involves risk. Rules change often; verify on the firm&apos;s official site.</p></footer>
    </article>
  );
}
