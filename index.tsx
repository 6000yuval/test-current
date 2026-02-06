import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, useRouter } from './lib/router';

// Layout
import RootLayout from './app/layout';

// Pages
import HomePage from './app/page';
import GlossaryPage from './app/glossary/page';
import ArticlePage from './app/article/[id]/page';

const AppContent = () => {
  const { path } = useRouter();

  let Component;
  let params = {};

  if (path === '/' || path === '') {
    Component = <HomePage />;
  } else if (path === '/glossary') {
    Component = <GlossaryPage />;
  } else if (path.startsWith('/article/')) {
    const id = path.split('/')[2];
    if (id) {
      params = { id };
      Component = <ArticlePage params={{ id }} />;
    } else {
       Component = <div className="p-8 text-center">Invalid Article ID</div>;
    }
  } else {
    Component = <div className="p-8 text-center">404 - Page Not Found</div>;
  }

  // We wrap the page component in the RootLayout structure
  // Note: We bypass the RootLayout's html/body tags in app/layout.tsx for the preview
  // to avoid nesting html tags.
  return (
    <RootLayout>
      {Component}
    </RootLayout>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  </React.StrictMode>
);
