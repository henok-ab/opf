import fs from 'fs'; import path from 'path'; import matter from 'gray-matter';
export type Post = { slug: string; title: string; date: string; dateLabel: string; author: string; category: string; excerpt: string; youtubeId?: string; videoSummary?: string; image?: string; body: string; minutes: number };
export const categories = ['Comparisons', 'Reviews', 'Rules Explained', 'Risk Management', 'News'];
const dir = path.join(process.cwd(), 'content/blog');
export function getPosts(): Post[] {
  return fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).map(f => {
    const { data, content } = matter(fs.readFileSync(path.join(dir, f), 'utf8'));
    return { slug: f.replace(/\.mdx$/, ''), ...data, body: content, minutes: Math.max(1, Math.round(content.split(/\s+/).length / 200)) } as Post;
  }).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
export const getPost = (s: string) => getPosts().find(p => p.slug === s);
