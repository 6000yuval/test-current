import React from 'react';
import { Link } from '../lib/router'; // Using shim for preview
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white group-hover:bg-indigo-700 transition-colors">
            <Brain size={24} />
          </div>
          <span className="font-bold text-xl text-slate-800">AI Illuminated</span>
        </Link>
        
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">ראשי</Link>
          <Link href="/glossary" className="hover:text-indigo-600 transition-colors">מילון מונחים</Link>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:text-indigo-600 transition-colors">אודות</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
