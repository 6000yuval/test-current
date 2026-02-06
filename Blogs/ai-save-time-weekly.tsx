import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';

export const aiSaveTimeWeekly: Article = {
  id: 'ai-save-time-weekly',
  categoryId: 'work',
  title: 'איך בינה מלאכותית יכולה לחסוך לך שעות עבודה',
  description: 'AI לא עובד במקומך — הוא חוסך לך את החלקים המעצבנים של העבודה.',
  readTimeMinutes: 4,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: התייעלות</h3>
      <p className="text-blue-800 text-sm md:text-base leading-relaxed">
        AI לא עובד במקומך — הוא חוסך לך את החלקים המעצבנים של העבודה.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
    <p>
      בינה מלאכותית מצטיינת במשימות שחוזרות על עצמן: ניסוח, סיכום, חיפוש, ארגון מידע. דברים שגוזלים זמן אבל לא באמת דורשים חשיבה עמוקה.
    </p>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
    <p>
      במקום לכתוב מייל מאפס, אתה נותן ל-AI:
      “נסח מייל קצר, רשמי, ללקוח שלא ענה שבוע”.
    </p>
    <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
      <li>הוא נותן טיוטה.</li>
      <li>אתה עובר, מתקן, ושולח.</li>
      <li><strong>5 דקות במקום 20.</strong></li>
    </ul>
  </PlainText>
};