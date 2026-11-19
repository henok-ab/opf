'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
// Analytics loads ONLY after the visitor accepts. Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN or NEXT_PUBLIC_GA_ID.
const PLAUSIBLE = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN, GA = process.env.NEXT_PUBLIC_GA_ID;
export default function CookieBanner() {
  const [choice, setChoice] = useState<'yes' | 'no' | 'unset' | null>(null);
  useEffect(() => { try { setChoice((localStorage.getItem('opf-consent') as 'yes' | 'no') || 'unset'); } catch { setChoice('unset'); } }, []);
  const save = (v: 'yes' | 'no') => { try { localStorage.setItem('opf-consent', v); } catch {} setChoice(v); };
  return (<>
    {choice === 'yes' && PLAUSIBLE && <Script defer data-domain={PLAUSIBLE} src="https://plausible.io/js/script.js" strategy="afterInteractive"/>}
    {choice === 'yes' && GA && (<>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive"/>
      <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}');`}</Script>
    </>)}
    {choice === 'unset' && (
      <div role="region" aria-label="Cookie consent" className="card" style={{position:'fixed',left:16,right:16,bottom:16,maxWidth:720,margin:'0 auto',padding:20,zIndex:60,background:'#0a0a0a',fontSize:16}}>
        <p style={{margin:'0 0 12px'}}>We use cookies for anonymous analytics only if you agree. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
        <div style={{display:'flex',gap:12}}>
          <button className="btn btn-primary" style={{padding:'8px 22px'}} onClick={() => save('yes')}>Accept</button>
          <button className="btn btn-secondary" style={{padding:'8px 22px'}} onClick={() => save('no')}>Decline</button>
        </div>
      </div>)}
  </>);
}
