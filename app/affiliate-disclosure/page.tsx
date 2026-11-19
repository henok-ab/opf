import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { legal } from '@/data/legal';
export const metadata: Metadata = { title: legal['affiliate-disclosure'].title };
export default function Page() { return <LegalPage doc="affiliate-disclosure" />; }
