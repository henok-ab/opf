import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import { getPosts, getPost } from '@/lib/blog';
import VideoEmbed from '@/components/VideoEmbed';
import BlogCard from '@/components/BlogCard';
import JsonLd from '@/components/JsonLd';
import { crumbs } from '@/lib/seo';
export const generateStaticParams = () => getPosts().map(p => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug); return p ? { title: p.title, description: p.excerpt } : {};
}
export default function Post({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug); if (!p) notFound();
  const sl = new GithubSlugger();
  const toc = (p.body.match(/^## .+$/gm) || []).map(h => { const t = h.slice(3).trim(); return { t, id: sl.slug(t) }; });
  const url = encodeURIComponent(`https://onlinepropfirm.com/blog/${p.slug}`); const text = encodeURIComponent(p.title);
  const related = getPosts().filter(x => x.slug !== p.slug && x.category === p.category).slice(0, 3);
  const ld = { '@context':'https://schema.org','@type':'Article',headline:p.title,datePublished:p.date,author:{'@type':'Person',name:p.author},description:p.excerpt };
  return (
    <article className="wrap" style={{padding:'64px 20px'}}>
      <header style={{maxWidth:860}}>
        <span className="label">{p.category}</span>
        <h1 style={{fontSize:'clamp(2.2rem,5vw,4rem)',marginTop:12}}>{p.title}</h1>
        <p className="muted" style={{fontSize:17}}>By {p.author} · <time dateTime={p.date}>{p.dateLabel}</time> · {p.minutes} min read</p>
      </header>
      {p.youtubeId && <div style={{maxWidth:860,margin:'24px 0'}}><VideoEmbed id={p.youtubeId} title={p.title}/>{p.videoSummary && <p className="muted" style={{marginTop:16}}>{p.videoSummary}</p>}</div>}
      {toc.length > 0 && <nav aria-label="Table of contents" className="card" style={{maxWidth:760,padding:24,margin:'24px 0'}}>
        <strong>On this page</strong><ul>{toc.map(h => <li key={h.id}><a href={`#${h.id}`}>{h.t}</a></li>)}</ul></nav>}
      <div className="prose"><MDXRemote source={p.body} options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}/></div>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',margin:'40px 0',alignItems:'center'}}>
        <strong>Share:</strong>
        <a className="btn btn-secondary" style={{padding:'6px 18px'}} href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">X</a>
        <a className="btn btn-secondary" style={{padding:'6px 18px'}} href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Facebook</a>
        <a className="btn btn-secondary" style={{padding:'6px 18px'}} href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <form className="card form" action="[NEWSLETTER_FORM_URL]" method="post" style={{maxWidth:760,padding:28}}>
        <h2 style={{fontSize:'1.8rem'}}>Get new posts by email</h2>
        <label htmlFor="nl">Email address</label>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}><input id="nl" name="email" type="email" required className="field" style={{flex:1,minWidth:220}}/><button className="btn btn-primary" type="submit">Subscribe</button></div>
      </form>
      {related.length > 0 && <section style={{marginTop:64}}><h2>Related posts</h2><div className="grid-cards">{related.map(r => <BlogCard key={r.slug} p={r}/>)}</div></section>}
      <p className="muted" style={{fontSize:15,marginTop:40}}>Educational content only. Not financial advice. Trading involves risk. Rules change often; verify on the firm&apos;s official site.</p>
      <JsonLd data={crumbs([['Home','/'],['Blog','/blog'],[p.title,`/blog/${p.slug}`]])}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}/>
    </article>
  );
}
