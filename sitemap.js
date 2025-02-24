const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
   { url: '/tools/image-compressor', changefreq: 'weekly', priority: 0.8 },
   { url: '/tools/image-converter', changefreq: 'weekly', priority: 0.8 },
{ url: '/tools/thumbnail-downloader', changefreq: 'weekly', priority: 0.8 },
{ url: '/services/seo-services', changefreq: 'weekly', priority: 0.8 },
{ url: '/services/web-development', changefreq: 'weekly', priority: 0.8 },
{ url: '/services/social-media-marketing', changefreq: 'weekly', priority: 0.8 },
{ url: '/services/ads', changefreq: 'weekly', priority: 0.8 },
{ url: '/services/email-marketing', changefreq: 'weekly', priority: 0.8 },
 { url: '/services/content-marketing', changefreq: 'weekly', priority: 0.8 }, 
  
];

const stream = new SitemapStream({ hostname: 'https://www.groovstacks.com/' });

streamToPromise(require('stream').Readable.from(links).pipe(stream))
  .then((data) => {
    fs.writeFileSync('./sitemap.xml', data.toString());
    console.log('✅ Sitemap generated successfully: sitemap.xml');
  })
  .catch((err) => console.error('❌ Error generating sitemap:', err));
