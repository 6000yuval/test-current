import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function AppShell({ children }: { children: React.ReactNode }) {
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