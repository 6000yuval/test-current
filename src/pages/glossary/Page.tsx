import React from 'react';
import { GLOSSARY } from '../../lib/contentIndex';
import { Search } from 'lucide-react';

export function Page() {
  const sortedGlossary = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, 'he'));

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">מילון מונחים</h1>
          <p className="text-xl text-slate-600">כל המילים המוזרות של עולם הבינה המלאכותית - בהסבר פשוט.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
             <Search className="text-slate-400" />
             <input type="text" placeholder="חפש מונח..." className="bg-transparent w-full outline-none text-slate-700 font-medium" disabled />
          </div>
          <div className="divide-y divide-slate-100">
            {sortedGlossary.map((item, index) => (
              <div key={index} className="p-6 hover:bg-indigo-50/30 transition-colors">
                <h3 className="font-bold text-xl text-indigo-700 mb-2" dir="ltr">{item.term}</h3>
                <p className="text-slate-700 leading-relaxed text-lg" dir="rtl">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}