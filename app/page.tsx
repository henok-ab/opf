import Link from 'next/link';
import type { CSSProperties } from 'react';
import { firms } from '@/data/firms';
import { getPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import VideoEmbed from '@/components/VideoEmbed';
import { featuredVideos, channelUrl } from '@/data/videos';
const FEATURED = ['prop-firm-comparison-2026', 'tsg-broker-review', 'prop-firms-and-brokers'];


function HeroLogo() {
  return (
    <figure className="card card-neon hero-logo">
      <div className="logo-stage">
        <div className="logo-aura" />

        <div className="logo-depth">
          <span
            className="logo-mark"
            role="img"
            aria-label="Online Prop Firm"
          />
        </div>

        <div className="logo-light" />
      </div>

      <figcaption className="label">
        Independent <span>·</span> In-depth
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const vids = featuredVideos.filter(v => !v.id.startsWith('['));
  const posts = FEATURED.map(s => getPosts().find(p => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p);
  return (<>
    <section className="wrap" style={{display:'grid',gap:48,padding:'72px 20px 88px',alignItems:'center'}}>
      <div className="lg:grid" style={{gridTemplateColumns:'1.6fr 1fr',gap:56,alignItems:'center'}}>
        <div>
          <h1 className="rise"><span className="first">Unbiased</span> Prop Firm Reviews</h1>
          <p className="muted rise" style={{fontSize:24,maxWidth:640,'--d':'.2s'} as CSSProperties}>In-depth, independent reviews to help you choose the right prop firm.</p>
        </div>
        <HeroLogo/>
      </div>
    </section>
    <section className="section"><div className="wrap grid-cards" style={{gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))'}}>
      <div className="card"><h2>Online Prop Firm Reviews</h2><p className="muted">Independent prop firm reviews and comparisons, helping you understand trading rules, costs and what each firm offers.</p><Link className="btn btn-primary" href="/reviews">Explore Reviews</Link></div>
      <div className="card"><h2>Blog</h2><p className="muted">Discover prop firm news, industry developments, trading insights and useful updates for funded traders.</p><Link className="btn btn-primary" href="/blog">Read the Blog</Link></div>
    </div></section>
    <section className="section"><div className="wrap">
      <h2>Our Favourite Firms</h2>
      <div className="grid-cards">{firms.filter(f => f.featured).map(f => (
        <div key={f.slug} className="card" style={{padding:28,textAlign:'center'}}>
          <h3>{f.name}</h3>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link className="btn btn-primary" href={`/reviews/${f.slug}`}>Review</Link>
            <Link className="btn btn-secondary" href={`/reviews/${f.slug}#overview`}>Overview</Link>
          </div></div>))}</div>
    </div></section>
    {vids.length > 0 && <section className="section"><div className="wrap">
      <h2>Latest Videos</h2>
      <div className="grid-cards" style={{gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))'}}>{vids.map(v => (
        <div key={v.id}><VideoEmbed id={v.id} title={v.title}/><h3 style={{marginTop:16,fontSize:'1.2rem'}}>{v.title}</h3><p className="muted" style={{fontSize:16}}>{v.summary}</p></div>))}</div>
      <a className="btn btn-secondary" style={{marginTop:24}} href={channelUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
    </div></section>}
    {posts.length > 0 && <section className="section"><div className="wrap">
      <h2>Featured Blog Posts</h2>
      <div className="grid-cards">{posts.map(p => <BlogCard key={p.slug} p={p}/>)}</div>
    </div></section>}
  </>);
}
