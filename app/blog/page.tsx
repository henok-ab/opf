import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, categories } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
export const metadata: Metadata = { title: 'Prop Firm Blog', description: 'Prop firm news, comparisons, rules explained and risk management for funded traders.' };
const SIZE = 9;
export default function Blog({ searchParams }: { searchParams: { cat?: string; page?: string } }) {
  const cat = searchParams.cat; const page = Math.max(1, Number(searchParams.page) || 1);
  const all = getPosts().filter(p => !cat || p.category === cat);
  const list = all.slice((page - 1) * SIZE, page * SIZE); const pages = Math.ceil(all.length / SIZE);
  const q = (p: number) => `/blog?${cat ? `cat=${encodeURIComponent(cat)}&` : ''}page=${p}`;
  return (
    <div className="wrap" style={{padding:'64px 20px'}}>
      <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>Blog</h1>
      <nav aria-label="Categories" style={{display:'flex',gap:12,flexWrap:'wrap',margin:'24px 0 40px'}}>
        <Link href="/blog" className={`btn ${!cat ? 'btn-primary' : 'btn-secondary'}`} style={{padding:'8px 20px'}}>All</Link>
        {categories.map(c => <Link key={c} href={`/blog?cat=${encodeURIComponent(c)}`} className={`btn ${cat === c ? 'btn-primary' : 'btn-secondary'}`} style={{padding:'8px 20px'}}>{c}</Link>)}
      </nav>
      {list.length ? <div className="grid-cards">{list.map(p => <BlogCard key={p.slug} p={p}/>)}</div> : <p className="muted">No posts in this category yet.</p>}
      {pages > 1 && <nav aria-label="Pagination" style={{display:'flex',gap:12,marginTop:40}}>
        {page > 1 && <Link className="btn btn-secondary" href={q(page - 1)}>Previous</Link>}
        {page < pages && <Link className="btn btn-secondary" href={q(page + 1)}>Next</Link>}</nav>}
    </div>
  );
}
