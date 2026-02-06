import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';
import { Shield, Briefcase, Brain } from 'lucide-react';

export const privacySafetyGuide: Article = {
  id: 'privacy-safety-guide',
  categoryId: 'safety',
  title: 'המדריך לפרטיות: מה אסור בשום אופן לספר ל-AI?',
  description: 'האם מותר להעלות מסמכים רפואיים? סיסמאות? סודות מסחריים? כל מה שצריך לדעת כדי להישאר בטוחים.',
  readTimeMinutes: 5,
  lastUpdated: '01/2026',
  imageUrl: 'https://images.unsplash.com/photo-1510915361405-ef8db9036289?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-red-900 mb-2">כלל הברזל: אם זה סוד, זה לא עולה ל-AI</h3>
      <p className="text-red-800 text-sm md:text-base leading-relaxed">
        ברירת המחדל של רוב כלי ה-AI היא להשתמש בשיחות שלכם כדי לאמן ולשפר את המודל. המשמעות: עובד של החברה, או אפילו משתמש אחר בעתיד, עלולים תיאורטית להיחשף למידע שהזנתם.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הרשימה השחורה: מה לא כותבים?</h3>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-500" />
          פרטים אישיים מזהים (PII)
        </p>
        <p className="text-sm text-slate-600">תעודות זהות, מספרי אשראי, כתובות מגורים מלאות, מספרי טלפון פרטיים.</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-red-500" />
          סודות מסחריים ועבודה
        </p>
        <p className="text-sm text-slate-600">קוד תוכנה סודי של החברה, מצגות פנימיות שטרם פורסמו, רשימות לקוחות.</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Brain className="w-5 h-5 text-red-500" />
          מידע רפואי ואינטימי
        </p>
        <p className="text-sm text-slate-600">סיכומי ביקור רופא, תוצאות בדיקות דם, או פרטים אינטימיים על אנשים אחרים.</p>
      </div>
    </div>
  </PlainText>
};