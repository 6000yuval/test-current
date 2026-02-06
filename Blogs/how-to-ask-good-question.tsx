import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';

export const howToAskGoodQuestion: Article = {
  id: 'how-to-ask-good-question',
  categoryId: 'basics',
  title: 'נוסחת הקסם (CPF): איך לכתוב פרומפט מושלם',
  description: 'שיטה פשוטה בת 3 שלבים שתבטיח שה-AI יבין אתכם בכל פעם מחדש.',
  readTimeMinutes: 6,
  lastUpdated: '03/2024',
  imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: תבנית CPF</h3>
      <p className="text-blue-800 text-sm md:text-base leading-relaxed">
        כדי לא לשכוח שום פרט חשוב, תמיד תבנו את הבקשה שלכם (הפרומפט) לפי שלושה מרכיבים: 
        <br/>1. <strong>C</strong>ontext (הקשר - מי אני ומה הרקע).
        <br/>2. <strong>P</strong>urpose (מטרה - מה אני רוצה להשיג).
        <br/>3. <strong>F</strong>ormat (פורמט - איך התשובה צריכה להיראות).
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה צריך תבנית?</h3>
    <p>
      כמו שאדריכל לא בונה בית בלי שרטוט, ככה אי אפשר לבקש משימה מורכבת מ-AI בלי מבנה. כשאנחנו כותבים "מהר", אנחנו שוכחים פרטים. התבנית CPF היא כמו רשימת מכולת שמוודאת שלא שכחתם את החלב והלחם.
    </p>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך בונים את זה? (דוגמה)</h3>
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <p className="mb-4 font-bold text-lg">המשימה: אני רוצה לכתוב פוסט לפייסבוק על המוצר החדש שלי.</p>
      
      <div className="space-y-3">
        <div className="flex gap-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold text-xs h-fit">C - הקשר</span>
          <p className="text-sm">"אני בעל עסק קטן לתכשיטים בעבודת יד. קהל היעד שלי הוא נשים שאוהבות אופנה ייחודית."</p>
        </div>
        <div className="flex gap-3">
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-bold text-xs h-fit">P - מטרה</span>
          <p className="text-sm">"אני רוצה להשיק קולקציה חדשה לקיץ. המטרה היא לגרום להן להרגיש שהתכשיטים האלה ישדרגו להן את המראה בחופשה."</p>
        </div>
        <div className="flex gap-3">
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold text-xs h-fit">F - פורמט</span>
          <p className="text-sm">"תכתוב פוסט קצר (עד 3 משפטים), עם אימוג'ים, ובסוף הנעה לפעולה ללחוץ על הלינק."</p>
        </div>
      </div>
    </div>
  </PlainText>
};