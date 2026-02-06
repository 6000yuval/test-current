
// This file simulates the "generated/posts/*.json" output.
// In a real build, individual MD files would be compiled.

import React from 'react';
import { Article } from '../types';
import { PlainText } from '../../components/PlainText';
import { ChevronLeft } from 'lucide-react';

// Re-exporting content from previous files inline here for structure compliance
// This ensures all data is available in the new src/data structure

export const jobsDisappearing2030: Article = {
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
    <p>במשך שנים אמרו לנו שהרובוטים יקחו את עבודות הכפיים: פועלי פס ייצור, נהגים, מנקים. טעינו בענק. הרובוטים הפיזיים עדיין מסורבלים ויקרים.</p>
  </PlainText>
};

export const isAiDangerous: Article = {
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
        כשמדברים על "סכנות ה-AI", רוב האנשים מדמיינים רובוט עם עיניים אדומות שיורה בלייזרים. המציאות? ה-AI לא צריך לירות בנו כדי לגרום נזק.
      </p>
    </div>
  </PlainText>
};

// ... (Other articles would be here in a full migration. 
// For this shim, I am importing the existing ones from the old Blogs folder 
// in the index to avoid code duplication limit, but ideally they move here)
