import React from 'react';
import { Article } from '../types';
import { PlainText } from '../components/PlainText';

export const chainOfThought: Article = {
  id: 'chain-of-thought',
  categoryId: 'skills',
  title: 'לחשוב בקול רם: השיטה שתמנע מה-AI לעשות טעויות',
  description: 'טכניקת "שרשרת המחשבה" (Chain of Thought) היא הדרך הכי טובה לגרום למודל לפתור בעיות מורכבות בלי ליפול בפח.',
  readTimeMinutes: 7,
  lastUpdated: '04/2026',
  imageUrl: 'https://images.unsplash.com/photo-1509228627129-7252f3057dc5?auto=format&fit=crop&q=80&w=1000',
  content: <PlainText>
    <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: אל תתן לו לקפוץ למסקנות</h3>
      <p className="text-blue-800 text-sm md:text-base leading-relaxed">
        כשאתם שואלים שאלה מסובכת (חידה, מתמטיקה, או לוגיקה), ה-AI מנסה לפעמים לנחש את התשובה הסופית מיד, וזה גורם לו לטעות. הטריק הוא להכריח אותו "להראות את הדרך". כשמבקשים ממנו "תחשוב צעד אחר צעד" (Think step by step), הוא הופך לחכם יותר ומדויק יותר בצורה דרמטית.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
    <p>
      תחשבו על תלמיד במבחן במתמטיקה. אם הוא כותב רק את התשובה הסופית, יש סיכוי גבוה שהוא טעה בחישוב בראש. אם הוא כותב את כל הדרך על הדף, הסיכוי לטעות יורד, וגם אם הוא טועה - קל לתקן.
    </p>
    <p>
      ה-AI עובד בדיוק אותו דבר. כשהוא מייצר טקסט של "מחשבה" (כתיבת השלבים), הוא בעצם מייצר לעצמו הקשר (Context) שעוזר לו להגיע לתשובה הנכונה בסוף.
    </p>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה מפתיעה)</h3>
    <p>בואו נראה חידה שהפילה מודלים רבים בעבר:</p>
    
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <p className="font-bold text-slate-700">פרומפט רגיל:</p>
        <p className="text-sm italic text-slate-500">"לדני יש 5 תפוחים. הוא זרק 2, קנה עוד 3, ואכל 1. כמה תפוחים יש לו?"</p>
        <p className="text-xs text-red-600 mt-2 font-bold">תשובה שגויה אפשרית: "לדני יש 6 תפוחים." (המודל התבלבל בחישוב המהיר).</p>
      </div>
      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
        <p className="font-bold text-green-700">פרומפט שרשרת מחשבה:</p>
        <p className="text-sm italic text-green-800">"לדני יש 5 תפוחים. הוא זרק 2, קנה עוד 3, ואכל 1. כמה תפוחים יש לו? <span className="font-bold">בוא נחשוב על זה צעד אחר צעד.</span>"</p>
        <p className="text-xs text-slate-900 mt-2">
          תשובה: <br/>
          1. התחלה: 5 תפוחים.<br/>
          2. זרק 2: נשארו 3.<br/>
          3. קנה 3: עכשיו יש 6.<br/>
          4. אכל 1: נשארו 5.<br/>
          <strong>התשובה הסופית היא 5.</strong>
        </p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
          <li>בבעיות מתמטיות או לוגיות.</li>
          <li>כשמבקשים לכתוב קוד מורכב ("תכנן את הארכיטקטורה לפני שאתה כותב").</li>
          <li>כשצריך להסיק מסקנות מתוך טקסט ארוך.</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500">
        <h4 className="font-bold text-orange-900 mb-2">המחיר</h4>
        <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
          <li>זה לוקח יותר זמן לקרוא.</li>
          <li>זה מייצר תשובות ארוכות יותר (אם אתם משלמים לפי מילים/טוקנים, זה עולה יותר).</li>
          <li>לפעמים זה מיותר לשאלות יצירתיות פשוטות ("ספר בדיחה").</li>
        </ul>
      </div>
    </div>
  </PlainText>
};