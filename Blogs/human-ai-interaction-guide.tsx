import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';

export const humanAiInteractionGuide: Article = {
  id: 'human-ai-interaction-guide',
  categoryId: 'basics',
  title: 'איך לדבר עם AI? (מדריך למתחילים)',
  description: 'הסבר פשוט וברור איך המחשב "מבין" אתכם ואיך לקבל תשובות טובות יותר, בלי מילים מסובכות.',
  readTimeMinutes: 5,
  lastUpdated: '01/2026',
  imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: זה לא בן אדם, זו מכונת השלמות</h3>
      <p className="text-blue-800 text-sm md:text-base leading-relaxed">
        אל תחשבו על ה-AI כמו על חבר חכם שיודע הכל. תחשבו עליו כמו על <strong>"השלמה אוטומטית" משוכללת מאוד</strong>. הוא לא באמת "מבין" את השאלה, הוא פשוט מנחש בצורה מצוינת מהי המילה הבאה שצריכה לבוא.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
    <p>
      דמיינו שקראתם את כל הספרים והאינטרנט בעולם, ואז מישהו שואל אתכם שאלה. אתם לא "חושבים" על התשובה, אתם פשוט שולפים את המשפט שהכי הגיוני להגיד באותו רגע לפי כל מה שקראתם.
    </p>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
          <li>כשצריך רעיונות (כמו מתנות או ברכות).</li>
          <li>כדי לסכם טקסט ארוך ומסובך.</li>
          <li>כדי לנסח מחדש מייל שייצא יפה.</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
        <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
        <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
          <li>כשמחפשים עובדה היסטורית מדויקת (הוא עלול לטעות).</li>
          <li>בשאלות רפואיות או משפטיות חשובות.</li>
        </ul>
      </div>
    </div>
  </PlainText>
};