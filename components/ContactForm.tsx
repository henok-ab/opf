'use client';
import { useState } from 'react';
const subjects = ['General', 'Review request', 'Partnership', 'Report an error'];
export default function ContactForm() {
  const [st, setSt] = useState<{ s: 'idle' | 'sending' | 'ok' | 'err'; msg?: string }>({ s: 'idle' });
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; setSt({ s: 'sending' });
    const fd = new FormData(form); const body = Object.fromEntries(fd.entries()); body.consent = fd.get('consent') ? 'yes' : '';
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const j = await r.json(); if (!r.ok) throw new Error(j.error || 'Something went wrong.');
      form.reset(); setSt({ s: 'ok' });
    } catch (err) { setSt({ s: 'err', msg: (err as Error).message }); }
  }
  return (
    <form className="form card" onSubmit={onSubmit} style={{display:'grid',gap:20}} noValidate>
      <div><label htmlFor="name">Name</label><input id="name" name="name" required maxLength={100} autoComplete="name" className="field"/></div>
      <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className="field"/></div>
      <div><label htmlFor="subject">Subject</label><select id="subject" name="subject" className="field">{subjects.map(s => <option key={s}>{s}</option>)}</select></div>
      <div><label htmlFor="message">Message</label><textarea id="message" name="message" required rows={6} maxLength={4000} className="field"/></div>
      <div aria-hidden="true" style={{position:'absolute',left:'-9999px'}}><label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
      <label style={{display:'flex',gap:12,fontWeight:600,fontSize:17}}><input type="checkbox" name="consent" required style={{marginTop:6}}/> I agree that Online Prop Firm may use my details to reply to this message, as described in the Privacy Policy.</label>
      <button className="btn btn-primary" type="submit" disabled={st.s === 'sending'} style={{justifySelf:'start'}}>{st.s === 'sending' ? 'Sending…' : 'Send message'}</button>
      {st.s === 'ok' && <p role="status" style={{color:'var(--pro)',margin:0}}>Thanks, your message was sent.</p>}
      {st.s === 'err' && <p role="alert" style={{color:'var(--con)',margin:0}}>{st.msg}</p>}
    </form>
  );
}
