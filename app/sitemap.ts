import type { MetadataRoute } from 'next';
import { firms } from '@/data/firms';
import { getPosts } from '@/lib/blog';
import { SITE } from '@/lib/seo';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/reviews', '/compare', '/blog', '/discounts', '/news', '/about', '/contact', '/privacy-policy', '/terms', '/affiliate-disclosure', '/risk-disclaimer'];
  return [
    ...pages.map(p => ({ url: SITE + p })),
    ...firms.map(f => ({ url: `${SITE}/reviews/${f.slug}` })),
    ...getPosts().map(p => ({ url: `${SITE}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
