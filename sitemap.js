const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
];

const stream = new SitemapStream({ hostname: 'http://localhost:4200' });

streamToPromise(require('stream').Readable.from(links).pipe(stream))
  .then((data) => {
    fs.writeFileSync('./sitemap.xml', data.toString());
    console.log('✅ Sitemap generated successfully: sitemap.xml');
  })
  .catch((err) => console.error('❌ Error generating sitemap:', err));
