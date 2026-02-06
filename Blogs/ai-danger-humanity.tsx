import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';
import { ChevronLeft } from 'lucide-react';

export const aiDangerHumanity: Article = {
  id: 'ai-danger-humanity',
  categoryId: 'safety',
  title: 'האם בינה מלאכותית מסוכנת לאנושות?',
  description: 'בינה מלאכותית לא מסוכנת כי היא “חכמה מדי” — היא מסוכנת כשאנחנו סומכים עליה יותר מדי.',
  readTimeMinutes: 5,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-red-900 mb-2">בשורה התחתונה: עניין של שליטה</h3>
      <p className="text-red-800 text-sm md:text-base leading-relaxed">
        אל תחשבו על AI כמו על ישות שחושבת או רוצה דברים. תחשבו עליה כמו על כלי עוצמתי מאוד, בלי שיקול דעת ובלי אחריות. הבעיה מתחילה כשנותנים לכלי כזה לקבל החלטות בלי פיקוח אנושי.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
    <p>
      בינה מלאכותית היא מערכת שלומדת מדוגמאות. היא סורקת כמויות עצומות של מידע, מזהה דפוסים, ולומדת מה “נראה נכון” לפי מה שכבר קרה בעבר. היא לא מבינה מוסר, הקשר או השלכות. היא רק טובה מאוד בלנחש מה אמור לקרות עכשיו.
    </p>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
    <p>
      אם מערכת AI רואה שב־90% מהמקרים אדם עם מאפיינים מסוימים לא קיבל הלוואה, היא תלמד לדחות אנשים דומים בעתיד.
    </p>
    <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
      <li>היא לא שואלת אם זה הוגן.</li>
      <li>היא לא בודקת אם העולם השתנה.</li>
      <li>היא פשוט ממשיכה את הדפוס.</li>
    </ul>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
          <li>לניתוח נתונים גדולים</li>
          <li>לאוטומציה של תהליכים</li>
          <li>לעזרה בקבלת החלטות (לא קבלת החלטות לבד)</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
        <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
        <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
          <li>בהחלטות רפואיות</li>
          <li>בהחלטות משפטיות</li>
          <li>כשיש השפעה ישירה על חיים של אנשים</li>
        </ul>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
    <ul className="list-disc list-inside space-y-3">
      <li>
        <strong>לחשוב ש-AI אובייקטיבי:</strong> לזכור שהוא משקף את הנתונים שהוזנו אליו.
      </li>
      <li>
        <strong>לתת לו סמכות:</strong> AI הוא יועץ, לא שופט.
      </li>
    </ul>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
    <div className="space-y-4">
      <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
        <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
          האם AI יכול לצאת משליטה?
          <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
        </summary>
        <p className="text-slate-600 mt-2 text-sm">
          לא במובן של סרטים, כן במובן של שימוש לא אחראי.
        </p>
      </details>
      <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
        <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
          מי אחראי לטעויות של AI?
          <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
        </summary>
        <p className="text-slate-600 mt-2 text-sm">
          בסוף – בני אדם.
        </p>
      </details>
    </div>

    <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
      סיכום: AI לא יהרוס את האנושות. אבל חוסר מחשבה כן.
    </div>
  </PlainText>
};