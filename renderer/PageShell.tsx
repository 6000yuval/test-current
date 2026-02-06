import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../app/globals.css'; // Keep utilizing the global styles

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-heebo min-h-screen flex flex-col bg-slate-50 text-slate-900" dir="rtl">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}