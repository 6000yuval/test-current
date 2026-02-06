
import { MetadataRoute } from 'next';
import { ARTICLES } from '../lib/data';
import { SITE_URL } from '../lib/constants';

// This function automatically generates sitemap.xml at build time
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = ARTICLES.map((article) => ({
    url: `${SITE_URL}/article/${article.id}`,
    // In real app: use actual lastModified date object
    lastModified: new Date(), 
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const routes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  return [...routes, ...articles];
}
