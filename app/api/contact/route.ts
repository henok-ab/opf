import { NextResponse } from 'next/server';
const SUBJECTS = ['General', 'Review request', 'Partnership', 'Report an error'];
// In-memory limiter: fine for one server. On serverless, use Upstash/Vercel KV for a shared limit.
const hits = new Map<string, number[]>();
const bad = (error: string, status = 400) => NextResponse.json({ error }, { status });
export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const now = Date.now(); const recent = (hits.get(ip) || []).filter(t => now - t < 10 * 60_000);
  if (recent.length >= 3) return bad('Too many messages. Please try again in a few minutes.', 429);
  let b: Record<string, unknown>; try { b = await req.json(); } catch { return bad('Invalid request.'); }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot: pretend success
  const s = (k: string) => (typeof b[k] === 'string' ? (b[k] as string).trim() : '');
  const name = s('name'), email = s('email'), subject = s('subject'), message = s('message');
  if (!name || name.length > 100) return bad('Please enter your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) return bad('Please enter a valid email address.');
  if (!SUBJECTS.includes(subject)) return bad('Please choose a subject.');
  if (message.length < 10 || message.length > 4000) return bad('Your message should be between 10 and 4000 characters.');
  if (b.consent !== 'yes') return bad('Please tick the consent box.');
  const key = process.env.RESEND_API_KEY, from = process.env.CONTACT_FROM;
  if (!key || !from) return bad('Email is not configured yet. Please email info@onlinepropfirm.com directly.', 500);
  hits.set(ip, [...recent, now]);
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: ['info@onlinepropfirm.com'], reply_to: email, subject: `[${subject}] ${name}`.slice(0, 150), text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}` }),
  });
  if (!r.ok) return bad('We could not send your message. Please try again later.', 502);
  return NextResponse.json({ ok: true });
}
