import Link from 'next/link';
import Logo from './Logo';
const social = [['Facebook','[FACEBOOK_URL]'],['Instagram','[INSTAGRAM_URL]'],['X','[X_URL]'],['TikTok','[TIKTOK_URL]'],['YouTube','[YOUTUBE_CHANNEL_URL]']];
export default function Footer() {
  return (
    <footer className="section" style={{marginTop:60}}>
      <div className="wrap" style={{display:'grid',gap:32,fontSize:17}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:40,justifyContent:'space-between'}}>
          <Logo/>
          <nav aria-label="Footer" style={{display:'flex',gap:24,flexWrap:'wrap'}}>
            {[['/reviews','Reviews'],['/discounts','Discounts'],['/blog','Blog'],['/contact','Contact us'],['/about','About'],['/news','News'],['/compare','Compare']].map(([h,l]) => <Link key={h} href={h}>{l}</Link>)}
          </nav>
          <div><a href="mailto:info@onlinepropfirm.com">info@onlinepropfirm.com</a>
            <div style={{display:'flex',gap:16,marginTop:8}}>
              {social.map(([n,u]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer" aria-label={n}>{n}</a>)}
            </div></div>
        </div>
        <nav aria-label="Legal" className="muted" style={{display:'flex',gap:20,flexWrap:'wrap'}}>
          {[['/privacy-policy','Privacy Policy'],['/terms','Terms'],['/affiliate-disclosure','Affiliate Disclosure'],['/risk-disclaimer','Risk Disclaimer']].map(([h,l]) => <Link key={h} href={h} className="muted">{l}</Link>)}
        </nav>
        <p className="muted" style={{fontSize:15,margin:0}}>Online Prop Firm is an independent review site. Content is educational and is not financial advice. Trading involves risk, and firm rules change often, so verify details on each firm&apos;s official site.</p>
      </div>
    </footer>
  );
}
