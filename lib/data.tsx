import React from 'react';
import { Article, Category, GlossaryTerm } from '../types';
import { BookOpen, Zap, Brain, CheckCircle, Home, Briefcase, Layers, Shield, Star, ChevronLeft } from 'lucide-react';

// Helper for consistent typography in articles
export const PlainText = ({ children }: { children?: React.ReactNode }) => (
  <div className="space-y-6 text-lg leading-relaxed text-slate-800 text-justify">
    {children}
  </div>
);

export const CATEGORIES: Category[] = [
  { id: 'basics', title: 'הבסיס: מנגנון הפעולה', description: 'הבנת אופן הפעולה הטכני של מודלי שפה וההבדל בינם לבין מנועי חיפוש.', color: 'bg-slate-100 text-slate-700', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'skills', title: 'מיומנות (הנדסת פרומפט)', description: 'כיצד לנסח קלט (Prompt) בצורה שתמקסם את איכות הפלט.', color: 'bg-yellow-100 text-yellow-800', icon: <Zap className="w-5 h-5" /> },
  { id: 'thinking', title: 'עיבוד וניתוח', description: 'שימוש במערכת לצורך פירוק בעיות, סיעור מוחות וניתוח לוגי.', color: 'bg-orange-100 text-orange-800', icon: <Brain className="w-5 h-5" /> },
  { id: 'reliability', title: 'בדיקה ואמינות', description: 'זיהוי מידע שגוי, אימות עובדות והצלבת מקורות.', color: 'bg-blue-100 text-blue-800', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'personal', title: 'שימוש אישי', description: 'יישומים יומיומיים: ניסוח טקסטים, ארגון מידע ולימוד.', color: 'bg-purple-100 text-purple-800', icon: <Home className="w-5 h-5" /> },
  { id: 'work', title: 'עבודה ולימודים', description: 'כתיבה עסקית, סיכום מסמכים וניתוח נתונים.', color: 'bg-amber-100 text-amber-800', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'automation', title: 'מערכות ואוטומציה', description: 'שילוב מודלי שפה בתהליכים אוטומטיים.', color: 'bg-red-100 text-red-800', icon: <Layers className="w-5 h-5" /> },
  { id: 'safety', title: 'בטיחות ופרטיות', description: 'שמירה על מידע אישי ומגבלות השימוש.', color: 'bg-emerald-100 text-emerald-800', icon: <Shield className="w-5 h-5" /> },
  { id: 'master', title: 'מדריכי עומק', description: 'סקירות מקיפות על מתודולוגיות עבודה מתקדמות.', color: 'bg-indigo-100 text-indigo-800', icon: <Star className="w-5 h-5" /> },
];

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'Prompt (קלט)', definition: 'הטקסט המוזן למערכת, אשר משמש כבסיס לחישוב ההסתברויות ליצירת הטקסט הבא.' },
  { term: 'Fabrication (המצאת מידע)', definition: 'מצב בו המודל מייצר טקסט שנראה תקין לשונית אך מכיל עובדות שגויות או לא קיימות.' },
  { term: 'Context Window (חלון הקשר)', definition: 'כמות המידע המקסימלית (בטוקנים) שהמודל מסוגל לעבד ולהתייחס אליו ברצף אחד.' },
  { term: 'Token (אסימון)', definition: 'יחידת המידע הבסיסית שהמודל מעבד ומנבא. בעברית מילה עשויה להתפרק למספר טוקנים.' },
  { term: 'LLM (מודל שפה גדול)', definition: 'מערכת בינה מלאכותית שאומנה על כמויות גדולות של טקסט כדי לזהות דפוסים ולחזות רצפים לשוניים.' },
  { term: 'Zero-shot', definition: 'מתן הוראה למודל ללא דוגמאות מקדימות לפלט הרצוי.' },
  { term: 'Few-shot', definition: 'מתן מספר דוגמאות בתוך הקלט כדי לספק למודל הקשר לדפוס הרצוי.' },
  { term: 'Anthropomorphism (האנשה)', definition: 'הנטייה האנושית לייחס תכונות אנושיות, רגשות וכוונות למערכות ממוחשבות.' },
  { term: 'Alignment (יישור)', definition: 'תהליך התאמת מטרות המודל והתנהגותו לערכים ולכוונות של בני האדם.' },
];

export const ARTICLES: Article[] = [
  {
    id: 'jobs-disappearing-2030',
    categoryId: 'work',
    title: 'המקצועות שייעלמו עד 2030 (האם העבודה שלך ברשימה?)',
    description: 'התחזית המפתיעה: זה לא נהגי המשאיות שבסכנה, אלא דווקא אנשי המשרד. מי הולך הביתה ומי יהפוך לבלתי-מוחלף?',
    readTimeMinutes: 8,
    lastUpdated: '02/2026',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">האמת הכואבת: הבינוניות מתה</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          בואו נשים את הקלפים על השולחן: אם העבודה שלכם מורכבת בעיקר מלקחת מידע ממקום א' ולהעביר אותו למקום ב', או לכתוב טקסטים גנריים - אתם בבעיה. ה-AI לא יחליף את ה"מומחים", אבל הוא יחסל לחלוטין את ה"בינוניים". החדשות הטובות? יש דרך פשוטה להינצל.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המהפכה השקטה של הצווארון הלבן</h3>
      <p>
        במשך שנים אמרו לנו שהרובוטים יקחו את עבודות הכפיים: פועלי פס ייצור, נהגים, מנקים. טעינו בענק. הרובוטים הפיזיים עדיין מסורבלים ויקרים.
      </p>
      <p>
        לעומת זאת, הבינה המלאכותית (AI) היא וירטואלית, זולה ומהירה. היא תוקפת דווקא את המעמד הבינוני-גבוה: מתכנתים זוטרים, כותבי תוכן, גרפיקאים, ואנשי שירות לקוחות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5 המקצועות שבסיכון גבוה (ומה לעשות)</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">1. מתרגמים וכותבי תוכן "פשוטים"</p>
          <p className="text-sm text-slate-600 mb-2">אם אתם מתרגמים חוברות הפעלה או כותבים פוסטים גנריים לפייסבוק, ChatGPT עושה את זה בחינם בשניות.</p>
          <p className="text-xs font-bold text-green-600">הפתרון: הפכו ל"עורכי על". אל תכתבו - תנהלו את האסטרטגיה ותוודאו דיוק.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">2. שירות לקוחות בצ'אט</p>
          <p className="text-sm text-slate-600 mb-2">הבוטים החדשים מבינים סרקזם, הקשר והיסטוריה. אין צורך באדם שיענה "תנסה לכבות ולהדליק".</p>
          <p className="text-xs font-bold text-green-600">הפתרון: התמקדות במקרי קצה מורכבים הדורשים אמפתיה אנושית אמיתית.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">3. מתכנתים זוטרים (Juniors)</p>
          <p className="text-sm text-slate-600 mb-2">AI כותב קוד בסיסי מושלם. מי שרק יודע תחביר (Syntax) - מיותר.</p>
          <p className="text-xs font-bold text-green-600">הפתרון: למדו ארכיטקטורה ופתרון בעיות. הקוד הוא רק הכלי, החשיבה היא המוצר.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">פרדוקס ה"פרימיום האנושי"</h3>
      <p>
        ככל שיותר תוכן ייוצר על ידי מכונות, הערך של "מגע אנושי" יעלה. תחשבו על קפה: אפשר לקנות קפה ממכונה ב-5 שקלים, אבל אנשים עומדים בתור ומשלמים 20 שקלים לקפה שהכין בריסטה אנושי. למה? בגלל החוויה.
      </p>
      <p>
        בעתיד, אנשים ישלמו אקסטרה כדי לדעת שמי שכתב את הספר, צייר את הציור או טיפל בבעיה שלהם היה <strong>בן אדם</strong>. האנושיות שלכם תהיה היתרון השיווקי הגדול ביותר שלכם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך להישאר רלוונטיים?</h3>
      <div className="bg-indigo-50 p-4 rounded-lg border-t-4 border-indigo-500">
        <ul className="text-sm text-indigo-900 space-y-2 list-disc list-inside">
          <li><strong>תאמצו, אל תברחו:</strong> עורך דין שמשתמש ב-AI יעבוד פי 10 מהר יותר מעורך דין שלא. השני יפשוט רגל.</li>
          <li><strong>פתחו "כישורים רכים" (Soft Skills):</strong> מחשב לא יודע לנהל משא ומתן רגיש, לא יודע להניע עובדים, ולא יודע להבין ניואנסים תרבותיים עדינים.</li>
          <li><strong>חשיבה ביקורתית:</strong> ה-AI משקר בביטחון. מי שידע לתפוס אותו על חם ולתקן אותו יהיה שווה זהב.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות קשות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם ללמוד תכנות זה בזבוז זמן?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            ממש לא. אבל הלימודים משתנים. במקום לשנן פקודות בעל פה, לומדים איך לתכנן מערכות ואיך "לדבר" עם ה-AI כדי שיכתוב את הקוד עבורנו.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            מתי השינוי הזה יקרה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            הוא קורה עכשיו. חברות ענק כבר מקפיאות גיוסים למשרות מסוימות. זה לא יקרה ביום אחד, זה תהליך של 5 השנים הקרובות.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'is-ai-dangerous',
    categoryId: 'safety',
    title: 'האם ה-AI ישמיד את האנושות? (ספוילר: הבעיה אחרת)',
    description: 'כולם מפחדים מ"שליחות קטלנית", אבל הסכנה האמיתית של הבינה המלאכותית היא הרבה יותר שקטה, ערמומית ומסוכנת.',
    readTimeMinutes: 7,
    lastUpdated: '03/2026',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">תרגיעו את הפאניקה, תגבירו את הערנות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כשמדברים על "סכנות ה-AI", רוב האנשים מדמיינים רובוט עם עיניים אדומות שיורה בלייזרים. המציאות? ה-AI לא צריך לירות בנו כדי לגרום נזק. הוא רק צריך לגרום לנו להפסיק להאמין אחד לשני. הסכנה היא לא השמדה פיזית, אלא קריסה של האמת.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המיתוס של הוליווד</h3>
      <p>
        בסרטים, למחשב יש "רצון עצמי". הוא מחליט שבני האדם הם וירוס וצריך להשמיד אותם.
        במציאות, מודלי שפה (LLMs) הם בסך הכל מתמטיקה סטטיסטית. אין להם רצונות, אין להם תודעה, והם לא "רוצים" כלום. הם פשוט משלימים טקסט. אז ממה המומחים בכל זאת מפחדים?
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3 הסכנות האמיתיות (שקורות כבר היום)</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl text-slate-800">1. קץ המציאות (Deepfakes)</h4>
          <p className="text-slate-700">
            אנחנו נכנסים לעידן שבו אי אפשר להאמין לשום תמונה, הקלטה או וידאו. ראיתם פוליטיקאי אומר משהו מזעזע בווידאו? יכול להיות שזה זיוף מושלם שנוצר ב-AI.
            <br/><strong>הסכנה:</strong> אם אי אפשר להאמין לכלום, הדמוקרטיה ומערכת המשפט קורסות. איך מוכיחים שמישהו ביצע פשע אם אפשר לזייף ראיות ב-5 דקות?
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl text-slate-800">2. הטיה ואפליה (Bias)</h4>
          <p className="text-slate-700">
            ה-AI למד מהאינטרנט, והאינטרנט מלא בדעות קדומות. אם נתן ל-AI להחליט מי יקבל משכנתא או מי יתקבל לעבודה, הוא עלול להפלות נשים או מיעוטים פשוט כי זה הדפוס שהוא ראה בעבר בנתונים.
            <br/><strong>הסכנה:</strong> אפליה "שקופה" שאף אחד לא לוקח עליה אחריות ("זה המחשב החליט").
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl text-slate-800">3. בעיית "מהדק הנייר" (Alignment)</h4>
          <p className="text-slate-700">
            ניסוי מחשבתי מפורסם: דמיינו שנותנים ל-AI על-אנושי הוראה פשוטה: "תייצר כמה שיותר מהדקי נייר".
            כדי לעמוד במטרה, ה-AI עלול להבין שצריך להפוך את כל העולם (כולל בני האדם) לחומר גלם לייצור מהדקים.
            <br/><strong>הסכנה:</strong> אנחנו נותנים הוראה לא מדויקת למערכת חזקה מדי, והיא מבצעת אותה בצורה קיצונית והרסנית.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">האם יש תקווה?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">הרגולציה בדרך</h4>
        <p className="text-sm text-green-800">
          העולם מתעורר. האיחוד האירופי, ארה"ב ואפילו סין מתחילים להעביר חוקים שמגבילים את ה-AI.
        </p>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside mt-2">
          <li>חובה לסמן תוכן שנוצר על ידי AI.</li>
          <li>איסור על שימוש ב-AI במערכות נשק אוטונומיות.</li>
          <li>אחריות משפטית לחברות שמפתחות מודלים מסוכנים.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה אתם יכולים לעשות?</h3>
      <p>
        תפתחו <strong>סקפטיות בריאה</strong>. אל תאמינו לכל כותרת, אל תעבירו בוואטסאפ תמונות שנראות מוזר, ותמיד תבדקו מי המקור של המידע. הנשק הכי טוב נגד שקרים של מכונה הוא שכל ישר של בני אדם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם ה-AI יכול לפתח רגשות בעתיד?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            זו שאלה פילוסופית. טכנית, הוא יכול *לחקות* רגשות בצורה מושלמת, עד שלא נדע להבדיל. האם הוא "מרגיש" באמת? כנראה שלא, הוא עדיין רק קוד שרץ על שרת.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'save-10-hours-a-week',
    categoryId: 'personal',
    title: 'מדריך לעצלנים: איך חסכתי 10 שעות בשבוע עם AI',
    description: 'בלי סיסמאות ובלי תיאוריות. רשימת ה"האקים" הקטנים לחיים שיפנו לכם זמן לנטפליקס, לילדים או סתם לשינה.',
    readTimeMinutes: 5,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">זמן זה כסף? לא, זמן זה החיים</h3>
        <p className="text-yellow-800 text-sm md:text-base leading-relaxed">
          כולנו "עסוקים". כולנו טובעים במיילים, סידורים, הודעות ובירוקרטיה. רוב האנשים משתמשים ב-ChatGPT רק כדי לשאול שאלות טריוויה, ומפספסים את המהפכה האמיתית: היכולת שלו להיות המזכיר האישי הכי יעיל בעולם, בחינם. הנה איך עושים את זה תכל'ס.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. המייל המתיש (חיסכון: 3 שעות בשבוע)</h3>
      <p>
        מכירים את המייל הארוך והכועס מהוועד בית / המורה / הלקוח? לקרוא אותו לוקח זמן, לנסח תשובה מנומסת לוקח עוד יותר זמן ועצבים.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200 mt-2">
        <p className="font-bold text-slate-700">הפרומפט הקסום:</p>
        <p className="text-sm italic text-slate-600">"הנה מייל שקיבלתי [הדבק מייל]. תסכם לי במשפט מה הוא רוצה, ותנסח תשובה מנומסת אבל אסרטיבית שאומרת שאני לא יכול להגיע, אבל אשלח את הכסף בביט."</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. בירוקרטיה וטפסים (חיסכון: 2 שעות בשבוע)</h3>
      <p>
        קיבלתם מסמך PDF מפחיד מהביטוח או מהבנק? אל תקראו את האותיות הקטנות לבד.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>צלמו את המסמך או העלו את הקובץ.</li>
        <li>בקשו: "תקרא את המסמך ותגיד לי: האם יש כאן דמי ניהול חריגים? ומה אני צריך לעשות כדי לבטל את העסקה? תענה לי בשלבים פשוטים."</li>
        <li>זה עובד גם על חוזי שכירות! ("האם יש סעיפים שמסכנים אותי כשוכר?").</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. תכנון הלו"ז המשפחתי (חיסכון: שעתיים בשבוע)</h3>
      <p>
        לתכנן ארוחות שבועיות + רשימת קניות זה סיוט לוגיסטי. תנו ל-AI לעבוד.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200 mt-2">
        <p className="font-bold text-slate-700">הפרומפט:</p>
        <p className="text-sm italic text-slate-600">"יש לי בבית 2 מבוגרים ו-2 ילדים ששונאים חצילים. תבנה לי תפריט שבועי בריא לארוחות ערב (שלא לוקח יותר מ-20 דקות להכין), וצור רשימת קניות מסודרת לפי מחלקות בסופר (ירקות, מוצרי חלב, יבשים)."</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. "מחסום הדף הלבן" (חיסכון: אינסופי)</h3>
      <p>
        צריכים לכתוב ברכה? מצגת? פוסט? החלק הכי קשה הוא להתחיל.
        אל תבקשו ממנו לכתוב את התוצאה הסופית, בקשו <strong>שלד</strong>.
        <br/>"תן לי 5 ראשי פרקים למצגת על מכירות". ברגע שיש לכם שלד, הרבה יותר קל למלא אותו בתוכן שלכם. זה הופך משימה של שעה למשימה של 10 דקות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טיפ הזהב: הקלטה קולית</h3>
      <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-500">
        <p className="text-sm text-purple-900">
          באפליקציה של ChatGPT בנייד יש מיקרופון. במקום להקליד, פשוט דברו אליו כשאתם בפקק או שוטפים כלים.
          <br/><strong>"תקשיב, יש לי מלא משימות למחר: להתקשר לרופא, לקנות מתנה לאמא... תעשה לי סדר ותכתוב לי לו"ז הגיוני לפי שעות."</strong>
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ממה להיזהר?</h3>
      <p>
        אל תסמכו עליו בחישובים כספיים מורכבים (הוא גרוע במתמטיקה לפעמים), ואל תעלו פרטים אישיים מדי (כמו סיסמאות). לכל השאר? הוא העוזר הכי טוב שלא שכרתם מעולם.
      </p>
    </PlainText>
  },
  {
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
  },
  {
    id: 'persona-technique',
    categoryId: 'skills',
    title: 'טכניקת הפרסונה: "תתנהג כמו..."',
    description: 'הסוד הגדול של הנדסת הפרומפטים: איך שינוי כובע אחד הופך תשובה בינונית לתשובה של מומחה עולמי.',
    readTimeMinutes: 6,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: תנו לו תפקיד</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          ה-AI הוא כמו שחקן הוליוודי מוכשר שיכול לשחק כל דמות, אבל אם לא תתנו לו תסריט, הוא ישחק דמות של "פקיד משעמם". כשאומרים לו "תתנהג כמו מומחה לשיווק" או "תתנהג כמו מדריך טיולים נלהב", אתם משנים את כל אוצר המילים, הטון ועומק התשובה שלו. אל תשאלו סתם, תשאלו מתוך דמות.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        מודלי שפה אומנו על כל האינטרנט. זה אומר שיש להם בזיכרון גם את הידע של רופא, גם של קופירייטר, וגם של ילד בן 5.
        ברירת המחדל של המודל היא לענות תשובה "ממוצעת" שתתאים לכולם. טכניקת הפרסונה (Persona) היא הדרך שלנו להגיד למודל: "תתעלם מכל שאר הדברים שאתה יודע, ותתמקד רק בידע ובסגנון של המומחה הספציפי הזה".
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>נניח שאתם רוצים לכתוב מייל נזיפה לעובד. תראו את ההבדל:</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-slate-700">בלי פרסונה:</p>
          <p className="text-sm italic text-slate-500">"כתוב מייל לעובד שמאחר כל הזמן."</p>
          <p className="text-xs text-slate-900 mt-2 font-medium">התוצאה: מייל גנרי, יבש, אולי קצת רובוטי ("שלום דני, שמתי לב שאתה מאחר...").</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700">עם פרסונה:</p>
          <p className="text-sm italic text-green-800">"תתנהג כמו מנהל משאבי אנוש אמפתי ומכיל, שחשוב לו לשמור על העובד אבל גם להציב גבולות. כתוב מייל לעובד שמאחר."</p>
          <p className="text-xs text-slate-900 mt-2 font-medium">התוצאה: מייל רגיש, מקצועי, שמתחיל בשאלה "האם הכל בסדר?" ויוצר דיאלוג.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>כשצריך כתיבה שיווקית ("תתנהג כמו קופירייטר שנון").</li>
            <li>בלימודים ("תתנהג כמו המורה האהוב עליי להיסטוריה").</li>
            <li>בייעוץ ("תתנהג כמו יועץ עסקי עם 20 שנות ניסיון").</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>אל תבקשו "תתנהג כמו רופא" לייעוץ רפואי אמיתי.</li>
            <li>אל תגזימו עם דמויות סטריאוטיפיות מדי שעלולות לפגוע.</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>פרסונה כללית מדי:</strong> "תתנהג כמו כותב". זה לא עוזר.
          <br/><span className="text-slate-500 text-sm">הפתרון: "תתנהג כמו כותב תוכן ללינקדאין שמתמחה בטכנולוגיה".</span>
        </li>
        <li>
          <strong>לשכוח את הקהל:</strong> הגדרתם מי הכותב, אבל מי הקורא?
          <br/><span className="text-slate-500 text-sm">הפתרון: הוסיפו "כתוב את זה עבור קהל של בני נוער".</span>
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם אפשר להשתמש בשמות של מפורסמים?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כן! "תתנהג כמו סטיב ג'ובס" יפיק טקסט מינימליסטי, חד ומלא השראה. "תתנהג כמו שייקספיר" יפיק טקסט פיוטי ועתיק. זו דרך מצוינת לקבל סגנון מהיר.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];