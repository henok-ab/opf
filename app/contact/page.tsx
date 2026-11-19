import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
export const metadata: Metadata = { title: 'Contact Us', description: 'Get in touch with Online Prop Firm.' };
export default function Contact() {
  return (
    <div className="wrap" style={{padding:'64px 20px',display:'grid',gap:40,maxWidth:900}}>
      <div><h1 style={{fontSize:'clamp(2.4rem,6vw,4.5rem)'}}>Contact Us</h1>
        <p className="muted">Questions, review requests, partnerships or errors to report. We reply within [X] business days.</p>
        <p>Email: <a href="mailto:info@onlinepropfirm.com">info@onlinepropfirm.com</a></p></div>
      <ContactForm/>
    </div>
  );
}
