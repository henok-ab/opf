import Link from 'next/link';
import type { Post } from '@/lib/blog';
export default function BlogCard({ p }: { p: Post }) {
  return (
    <article className="card" style={{padding:0,overflow:'hidden',display:'flex',flexDirection:'column'}}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {p.image ? <img src={p.image} alt="" loading="lazy" style={{aspectRatio:'16/9',objectFit:'cover',width:'100%'}}/> : <div aria-hidden style={{aspectRatio:'16/9',background:'linear-gradient(135deg,rgba(14,96,84,.6),rgba(176,92,12,.5))'}}/>}
      <div style={{padding:28,display:'flex',flexDirection:'column',gap:12,flex:1}}>
        <span className="label" style={{fontSize:14}}>{p.category}</span>
        <h3 style={{margin:0}}>{p.title}</h3>
        <time className="muted" dateTime={p.date} style={{fontSize:16}}>{p.dateLabel}</time>
        <Link className="btn btn-secondary" style={{marginTop:'auto',alignSelf:'flex-start'}} href={`/blog/${p.slug}`}>Find out more</Link>
      </div>
    </article>
  );
}
