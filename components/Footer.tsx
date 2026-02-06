import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
      <div className="container mx-auto px-4 text-center md:text-right">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">AI Illuminated</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              הבלוג המוביל בישראל ללימוד והבנה של בינה מלאכותית.
              מנגישים טכנולוגיה מורכבת בשפה פשוטה.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ניווט מהיר</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">דף הבית</a></li>
              <li><a href="/glossary" className="hover:text-white transition-colors">מילון מושגים</a></li>
              <li><a href="#" className="hover:text-white transition-colors">קטגוריות</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">הצהרה</h3>
            <p className="text-xs text-slate-500">
              התוכן באתר זה מיועד למטרות לימוד והעשרה בלבד ואינו מהווה ייעוץ מקצועי, פיננסי או משפטי.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} כל הזכויות שמורות. נבנה באמצעות Next.js & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
