import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';

export const aiReplacementReality: Article = {
  id: 'ai-replacement-reality',
  categoryId: 'work',
  title: 'האם AI הולך להחליף את העבודה שלך?',
  description: 'AI לא מחליף אנשים. הוא מחליף אנשים שלא משתמשים בו.',
  readTimeMinutes: 4,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1531297461136-82lw8z0e3y?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: שדרוג ולא החלפה</h3>
      <p className="text-blue-800 text-sm md:text-base leading-relaxed">
        AI לא מחליף אנשים. הוא מחליף אנשים שלא משתמשים בו.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
    <p>
      AI מחליף משימות, לא מקצועות. כל תפקיד בנוי מהרבה חלקים — חלקם אוטומטיים, חלקם אנושיים.
    </p>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
    <p>
      רואה חשבון לא נעלם —
      אבל מי שממשיך לעבוד כמו לפני 10 שנים, כן יתקשה להתחרות.
    </p>
    
    <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
      סיכום: מי שמשלב AI — נהיה חזק יותר, לא מיותר.
    </div>
  </PlainText>
};