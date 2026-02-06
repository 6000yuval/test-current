import { SITE_NAME, SITE_URL } from './constants';
import { Article } from './types';

export const buildMeta = (title: string, description: string, url: string, image?: string) => {
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'he_IL',
      images: image ? [{ url: image }] : [],
    }
  };
};

export const buildArticleJsonLd = (article: Article) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.title,
  description: article.description,
  image: [article.imageUrl],
  datePublished: article.lastUpdated,
  author: [{ '@type': 'Organization', name: SITE_NAME }],
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/article/${article.id}`
  }
});