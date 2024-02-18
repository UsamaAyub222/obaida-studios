import { NextApiResponse } from 'next';
import generateSitemap from '../../utils/sitemapGenerator';

async function generateSitemapXml(req, res) {
  const pages = [
    { url: 'https://obaidazeino.com/', changefreq: 'daily', priority: '1.0' },
    // Add more pages as needed
  ];

  const sitemapXml = generateSitemap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapXml);
  res.end();
}

export default generateSitemapXml;