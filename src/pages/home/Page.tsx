import React from 'react';
import { getAllPosts, CATEGORIES } from '../../data/contentIndex';
import { ArticleCard } from '../../app/components/ArticleCard';
import { Link } from '../../routes/router';

export function Page() {
  const recentArticles = getAllPosts().slice(0, 9); 

  const scrollToArticles = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('articles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            בינה מלאכותית. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">בעברית פשוטה.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            הבלוג שילמד אתכם איך לעבוד עם AI.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#articles" onClick={scrollToArticles} className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-indigo-500/30 cursor-pointer">
              התחילו לקרוא
            </a>
            <Link href="/glossary" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold border border-slate-700 transition-all">
              מילון מושגים
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Strip */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
            {CATEGORIES.map(cat => (
              <div key={cat.id} className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className={`p-3 rounded-full mb-2 ${cat.color} group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <span className="text-xs font-bold text-slate-700">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">כתבות אחרונות</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                category={CATEGORIES.find(c => c.id === article.categoryId)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}