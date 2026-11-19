import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { legal } from '@/data/legal';
export const metadata: Metadata = { title: legal['risk-disclaimer'].title };
export default function Page() { return <LegalPage doc="risk-disclaimer" />; }
