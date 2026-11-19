import type { Metadata } from 'next';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/800.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import JsonLd from '@/components/JsonLd';
import { organization } from '@/lib/seo';
export const metadata: Metadata = {
  metadataBase: new URL('https://onlinepropfirm.com'),
  title: { default: 'Online Prop Firm | Unbiased Prop Firm Reviews', template: '%s | Online Prop Firm' },
  description: 'In-depth, independent reviews to help you choose the right prop firm.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><Header/><main>{children}</main><Footer/><CookieBanner/><JsonLd data={organization}/></body></html>);
}
