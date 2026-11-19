'use client';
import { useRouter } from 'next/navigation';
import { firms } from '@/data/firms';
export default function CompareSelector({ selected }: { selected: string[] }) {
  const router = useRouter();
  const toggle = (slug: string) => {
    const next = selected.includes(slug) ? selected.filter(s => s !== slug) : [...selected, slug].slice(0, 3);
    router.replace(next.length ? `/compare?firms=${next.join(',')}` : '/compare', { scroll: false });
  };
  return (
    <fieldset style={{border:0,padding:0,margin:'0 0 32px'}}>
      <legend className="label" style={{marginBottom:12}}>Choose up to 3 firms</legend>
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        {firms.map(f => { const on = selected.includes(f.slug); const full = !on && selected.length >= 3;
          return (<label key={f.slug} className={`btn ${on ? 'btn-primary' : 'btn-secondary'}`} style={{padding:'8px 20px',opacity:full?.45:1,cursor:full?'not-allowed':'pointer'}}>
            <input type="checkbox" className="sr-only" checked={on} disabled={full} onChange={() => toggle(f.slug)}/>{f.name}</label>); })}
      </div>
    </fieldset>
  );
}
