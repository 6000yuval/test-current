import React from 'react';
import { Link } from '../../routes/router';

export function Page() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">404</h2>
      <p className="text-xl text-slate-600">מצטערים, הדף שחיפשת לא נמצא.</p>
      <Link href="/" className="mt-6 text-indigo-600 hover:underline font-bold">
        חזרה לדף הבית
      </Link>
    </div>
  );
}