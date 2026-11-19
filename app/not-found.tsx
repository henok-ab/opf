import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="wrap" style={{padding:'96px 20px',textAlign:'center'}}>
      <p className="label">Error 404</p>
      <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>Page not found</h1>
      <p className="muted">That page has moved or never existed. Try the reviews or head back home.</p>
      <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
        <Link className="btn btn-primary" href="/">Go home</Link><Link className="btn btn-secondary" href="/reviews">Browse reviews</Link>
      </div>
    </div>
  );
}
