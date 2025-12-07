/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://studytomy.com',
  generateRobotsTxt: true,
  outDir: './out',
  generateIndexSitemap: false,
  exclude: ['/consent-preferences'],
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/consent-preferences'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on page importance
    const priorityMap = {
      '/': { priority: 1.0, changefreq: 'weekly' },
      '/book-trial': { priority: 0.9, changefreq: 'monthly' },
      '/about': { priority: 0.8, changefreq: 'monthly' },
      '/exam-boards': { priority: 0.8, changefreq: 'monthly' },
      '/contact': { priority: 0.8, changefreq: 'monthly' },
      '/home-school': { priority: 0.8, changefreq: 'monthly' },
      '/career': { priority: 0.7, changefreq: 'monthly' },
      '/terms': { priority: 0.5, changefreq: 'yearly' },
    };

    const pageConfig = priorityMap[path] || { priority: 0.7, changefreq: 'monthly' };

    return {
      loc: path,
      changefreq: pageConfig.changefreq,
      priority: pageConfig.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
