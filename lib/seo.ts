export const SITE = 'https://onlinepropfirm.com';
export const crumbs = (items: [string, string][]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + path })),
});
export const organization = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'Online Prop Firm', url: SITE,
  logo: SITE + '/logo.png', email: 'info@onlinepropfirm.com',
  sameAs: [] as string[], // add your real social profile URLs
};
