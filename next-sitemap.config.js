const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studytomy.com';

export default {
  siteUrl,
  generateRobotsTxt: false,
  outDir: 'out',
  exclude: [],
  sitemapSize: 7000,
  trailingSlash: false
};
