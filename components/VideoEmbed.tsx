'use client';
import { useState } from 'react';
export default function VideoEmbed({ id, title }: { id: string; title: string }) {
  const [on, setOn] = useState(false);
  return (
    <div style={{aspectRatio:'16/9',borderRadius:28,overflow:'hidden',border:'2px solid var(--card-border)',background:'#000',position:'relative'}}>
      {on ? <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} title={title} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={{width:'100%',height:'100%',border:0}}/>
      : <button onClick={() => setOn(true)} aria-label={`Play video: ${title}`} style={{all:'unset',cursor:'pointer',display:'block',width:'100%',height:'100%',position:'relative'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <span className="btn btn-primary" style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>Play</span>
        </button>}
    </div>
  );
}
