import React from 'react';
import { Link } from '../lib/router';
import { Article, Category } from '../lib/types';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  category?: Category;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, category }) => {
  return (
    <Link href={`/article/${article.id}`} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {category && (
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${category.color} shadow-sm backdrop-blur-sm bg-opacity-90`}>
            {category.title}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-slate-500 mb-3 gap-3">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {article.readTimeMinutes} דקות קריאה
          </span>
          <span>•</span>
          <span>עודכן: {article.lastUpdated}</span>
        </div>
        <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {article.description}
        </p>
      </div>
    </Link>
  );
};