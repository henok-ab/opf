import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'About Online Prop Firm', description: 'Who we are, how we review prop firms, and how we stay independent.' };
export default function About() {
  return (
    <div className="wrap" style={{padding:'64px 20px'}}>
      <h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>About Online Prop Firm</h1>
      <div className="prose">
        <h2>Who we are</h2><p>Online Prop Firm is an independent review site for prop trading firms. We are not a prop firm. We publish reviews, comparisons, rule explainers, discount codes, a blog and a weekly high-impact news calendar. [Add a short team or founder introduction.]</p>
        <h2>How we review</h2><p>We read each firm&apos;s published rules, record the key numbers in a consistent format, and show the date we last checked them. We re-check a review when a firm changes its rules or at least every [X] months. [Describe any hands-on testing you do.]</p>
        <h2>Independence</h2><p>Firms cannot pay for a better review. Some links on this site are affiliate links, and we may earn a commission if you buy through them, at no extra cost to you. Read the full <Link href="/affiliate-disclosure">affiliate disclosure</Link>.</p>
        <h2>Spotted a mistake?</h2><p>Rules change often. <Link href="/contact">Tell us</Link> and we will check and correct it.</p>
      </div>
    </div>
  );
}
