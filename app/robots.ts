
import { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/constants';

// This function automatically generates robots.txt at build time
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
