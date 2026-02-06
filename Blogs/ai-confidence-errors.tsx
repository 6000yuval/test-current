import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';

export const aiConfidenceErrors: Article = {
  id: 'ai-confidence-errors',
  categoryId: 'reliability',
  title: 'למה בינה מלאכותית טועה בביטחון מלא',
  description: 'AI לא יודע שהוא טועה — ולכן הוא גם לא מהסס.',
  readTimeMinutes: 4,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: ביטחון מטעה</h3>
      <p className="text-blue-800 text-sm md:text-base leading-relaxed">
        AI לא יודע שהוא טועה — ולכן הוא גם לא מהסס.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
    <p>
      AI לא בודק אמת. הוא בודק הסתברות. אם משהו נשמע הגיוני לפי הנתונים — הוא יגיד אותו.
    </p>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
    <p>
      אם תשאל: “מי היה מלך מאדים הראשון?”
    </p>
    <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
      <li>אין תשובה — אבל יש דפוס.</li>
      <li>אז הוא ימציא שם שנשמע אמין.</li>
    </ul>

    <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
      סיכום: הבעיה היא לא ש-AI טועה. הבעיה היא שאנחנו שוכחים לבדוק.
    </div>
  </PlainText>
};