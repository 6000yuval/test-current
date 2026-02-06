import React from 'react';
import { ARTICLES, CATEGORIES } from '../../../lib/data';
import { Link, notFound } from '../../../lib/router';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '../../../lib/constants';

// In a real Vike app, this would be injected via PageContext
export function Page({ routeParams }: { routeParams?: { id: string } }) {
  // Use routeParams if available, or fall back to manual extraction for the preview shim
  const id = routeParams?.id;
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) {
    return notFound();
  }

  const category = CATEGORIES.find(c => c.id === article.categoryId);
  const relatedArticles = ARTICLES
    .filter(a => a.categoryId === article.categoryId && a.id !== article.id)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-slate-50 pb-20">
      {/* Header Image Background */}
      <div className="relative h-64 md:h-96 w-full">
         <div className="absolute inset-0 bg-slate-900">
           <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
         </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Article Header Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
             <div className="flex items-center gap-3 mb-4">
                {category && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${category.color}`}>
                    {category.title}
                  </span>
                )}
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Clock size={12} /> {article.readTimeMinutes} דקות קריאה
                </span>
             </div>
             
             <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
               {article.title}
             </h1>
             
             <p className="text-xl text-slate-600 leading-relaxed mb-6">
               {article.description}
             </p>

             <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                   <span>נכתב ע"י המערכת</span>
                </div>
                <div className="flex items-center gap-1">
                   <Calendar size={14} /> עודכן: {article.lastUpdated}
                </div>
             </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            {article.content}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">עוד בנושא {category?.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map(rel => (
                  <Link key={rel.id} href={`/article/${rel.id}`} className="block bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors group">
                    <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600">{rel.title}</h4>
                    <p className="text-sm text-slate-500 line-clamp-2">{rel.description}</p>
                    <div className="mt-4 text-xs font-bold text-indigo-500 flex items-center gap-1">
                      לקריאה <ArrowRight size={12} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}