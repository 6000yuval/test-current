import React from 'react';
import { Article, Category, GlossaryTerm } from '../types';
import { BookOpen, Zap, Brain, CheckCircle, Home, Briefcase, Layers, Shield, Star } from 'lucide-react';
import { jobsDisappearing2030 } from '../Blogs/jobs-disappearing-2030';
import { isAiDangerous } from '../Blogs/is-ai-dangerous';
import { save10HoursAWeek } from '../Blogs/save-10-hours-a-week';
import { aiDangerHumanity } from '../Blogs/ai-danger-humanity';
import { personaTechnique } from '../Blogs/persona-technique';
import { chainOfThought } from '../Blogs/chain-of-thought';
import { aiSaveTimeWeekly } from '../Blogs/ai-save-time-weekly';
import { aiReplacementReality } from '../Blogs/ai-replacement-reality';
import { howChatgptWorksSimple } from '../Blogs/how-chatgpt-works-simple';
import { aiConfidenceErrors } from '../Blogs/ai-confidence-errors';
import { humanAiInteractionGuide } from '../Blogs/human-ai-interaction-guide';
import { privacySafetyGuide } from '../Blogs/privacy-safety-guide';
import { howToAskGoodQuestion } from '../Blogs/how-to-ask-good-question';

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
  jobsDisappearing2030,
  isAiDangerous,
  save10HoursAWeek,
  aiDangerHumanity,
  personaTechnique,
  chainOfThought,
  aiSaveTimeWeekly,
  aiReplacementReality,
  howChatgptWorksSimple,
  aiConfidenceErrors,
  humanAiInteractionGuide,
  privacySafetyGuide,
  howToAskGoodQuestion
];