'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';
import { firms } from '@/data/firms';

export default function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  const cur = (h: string) => (h === '/' ? path === '/' : path.startsWith(h)) ? 'page' : undefined;
  return (
    <header className="site-header" style={{position:'sticky',top:0,zIndex:50,background:'rgba(5,5,5,.9)',backdropFilter:'blur(10px)'}}>
      <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:84}}>
        <Link href="/" aria-label="Online Prop Firm home"><Logo/></Link>
        <nav className="nav hidden lg:flex" style={{gap:32,alignItems:'center'}} aria-label="Main">
          <Link href="/" aria-current={cur('/')}>Home</Link>
          <div className="drop">
            <Link href="/reviews" aria-current={cur('/reviews')}>Reviews</Link>
            <div className="drop-menu">
              {firms.map(f => <Link key={f.slug} href={`/reviews/${f.slug}`}>{f.name}</Link>)}
              <Link href="/reviews">All reviews</Link>
            </div>
          </div>
          <Link href="/blog" aria-current={cur('/blog')}>Blog</Link>
          <Link href="/discounts" aria-current={cur('/discounts')}>Discounts</Link>
          <Link href="/contact" aria-current={cur('/contact')}>Contact us</Link>
        </nav>
        <button className="lg:hidden btn btn-secondary" style={{padding:'8px 18px'}} aria-expanded={open} aria-controls="m-menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <nav id="m-menu" className="nav m-menu lg:hidden" style={{position:'fixed',inset:'84px 0 0 0',background:'#050505',padding:'32px 20px',display:'flex',flexDirection:'column',gap:24,fontSize:22}} onClick={() => setOpen(false)}>
          {[['/','Home'],['/reviews','Reviews'],['/blog','Blog'],['/discounts','Discounts'],['/contact','Contact us']].map(([h,l]) => <Link key={h} href={h} aria-current={cur(h)}>{l}</Link>)}
        </nav>
      )}
    </header>
  );
}
