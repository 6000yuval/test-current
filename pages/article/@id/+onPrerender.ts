import { ARTICLES } from '../../../lib/data';

// Vike hook to define which URLs to generate at build time (SSG)
export default function onPrerender() {
  const urls = ARTICLES.map((article) => `/article/${article.id}`);
  return urls;
}