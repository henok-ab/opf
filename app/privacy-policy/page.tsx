import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { legal } from '@/data/legal';
export const metadata: Metadata = { title: legal['privacy-policy'].title };
export default function Page() { return <LegalPage doc="privacy-policy" />; }
