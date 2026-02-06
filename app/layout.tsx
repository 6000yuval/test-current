import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// In a real Next.js app, this would be exported
export const metadata = {
  title: 'AI Illuminated',
  description: 'המדריך המקיף לבינה מלאכותית בישראל',
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  // NOTE: For browser preview, we changed <html>/<body> to <div> to avoid nesting issues in index.html
  // In a real Next.js app, revert these to <html lang="he" dir="rtl"> and <body>
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