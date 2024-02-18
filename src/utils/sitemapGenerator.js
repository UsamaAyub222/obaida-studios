import { create } from 'xmlbuilder';

function generateSitemap(pages) {
  const root = create('urlset').att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  pages.forEach((page) => {
    const url = root.ele('url');
    url.ele('loc', null, page.url);
    url.ele('changefreq', null, 'weekly'); // Set change frequency as needed
    url.ele('priority', null, '0.8'); // Set priority as needed
  });

  return root.end({ pretty: true });
}

export default generateSitemap;