import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';

export const howChatgptWorksSimple: Article = {
  id: 'how-chatgpt-works-simple',
  categoryId: 'basics',
  title: 'איך ChatGPT באמת עובד (בלי מתמטיקה)',
  description: 'ChatGPT לא יודע דברים — הוא יודע להשלים משפטים.',
  readTimeMinutes: 5,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: השלמה חכמה</h3>
      <p className="text-blue-800 text-sm md:text-base leading-relaxed">
        ChatGPT לא יודע דברים — הוא יודע להשלים משפטים.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
    <p>
      זה מודל שפה. הוא קרא המון טקסטים, ולמד מה בדרך כלל בא אחרי מה.
    </p>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
    <p>
      אתה כותב: “השמיים הם…”
    </p>
    <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
      <li>הוא ראה שב־רוב המקרים ההמשך הוא “כחולים”.</li>
      <li>אז זה מה שתקבל.</li>
      <li><strong>לא בדיקה. לא הבנה. ניחוש סטטיסטי מעולה.</strong></li>
    </ul>
    
    <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
      סיכום: ChatGPT הוא כלי חזק — לא מוח.
    </div>
  </PlainText>
};