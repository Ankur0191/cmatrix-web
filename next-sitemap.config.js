/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://thecmatrix.com', // replace with your domain
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  exclude: ['/studio'], // example of excluding Sanity studio
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
